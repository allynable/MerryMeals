import React, { useState, useEffect } from "react";
import memberService from "../service/MemberService";
import {
  Table,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import DeleteModal from "./Modal/DeleteModal";
import MemberForm from "./Modal/MemberForm";
import { toast } from "react-toastify";

const MemberTable = (props) => {
  const { keyword } = useParams();
  const [members, setMembers] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [memberToUpdate, setMemberToUpdate] = useState(null);

  const memberData = () => {
    if (keyword) {
      memberService.searchMember(keyword).then((response) => {
        setMembers(response.data);
      });
    } else {
      memberService.viewMember().then((response) => {
        setMembers(response.data);
      });
    }
  };
  useEffect(() => {
    memberData();
  }, [keyword]);

  const showDeleteConfirmation = (memberId) => {
    setMemberToDelete(memberId);
    setShowDeleteModal(true);
  };

  const deleteMember = (memberId) => {
    memberService.deleteMember(memberId).then(() => {
      setMembers((prevMembers) =>
        prevMembers.filter((member) => member.memberId !== memberId)
      );
      setShowDeleteModal(false);
      toast.error("Member deleted successfully!");
    });
  };

  const showMember = (member) => {
    if (member) {
      setMemberToUpdate(member);
    } else {
      setMemberToUpdate(null);
    }
    setShowMemberForm(true);
  };

  const saveUpdateMember = (member) => {
    if (member.memberId) {
      memberService.updateMember(member).then(() => {
        memberService.viewMember().then((response) => {
          setMembers(response.data);
          toast.info("Member updated Successfully!");
        });
      });
    } else {
      memberService.saveMember(member).then(() => {
        memberService.viewMember().then((response) => {
          setMembers(response.data);
          toast.success("Member added successfully!");
        });
      });
    }
  };

  
  return (
    <section>
      <Container>
        <Row className="py-5 align-items-center">
          <Col xs={12} md={4} lg={3}>
            <h1>Members</h1>
          </Col>
          <Col xs={8} md={5} lg={7}>
          </Col>
          {props.authenticated && (
            <Col xs={4} md={3} lg={2}>
              <button className="btn btn-primary" onClick={() => showMember()}>
                Add New Member
              </button>
            </Col>
          )}
        </Row>

        <Table bordered striped className="table table-rounded">
          <thead>
            <tr className="table-dark">
              <th>Name</th>
              <th>Contact</th>
              <th>Condition</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.memberId}>
                <td>{member.firstName}</td>
                <td>{member.contactNumber}</td>
                <td>{member.condition}</td>
                  <td className="text-center">
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id={`tooltip-view-${member.memberId}`}>
                          View Member
                        </Tooltip>
                      }
                    >
                    <Link
                      to={`/member/${member.memberId}`}
                      className="btn btn-success m-1"
                    >
                      <FaEye />
                    </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id={`tooltip-edit-${member.memberId}`}>
                          Update
                        </Tooltip>
                      }
                    >
                      <button
                        className="btn btn-primary m-1"
                        onClick={() => showMember(member)}
                      >
                        <FaEdit />
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id={`tooltip-delete-${member.memberId}`}>
                          Delete
                        </Tooltip>
                      }
                    >
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => showDeleteConfirmation(member.memberId)}
                      >
                        <FaTrashAlt />
                      </button>
                    </OverlayTrigger>
                  </td>
                
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      {showDeleteModal && (
        <DeleteModal
          show={showDeleteModal}
          setShow={setShowDeleteModal}
          confirmDelete={() => deleteMember(memberToDelete)}
        />
      )}
      {showMemberForm && (
        <MemberForm
          show={showMember}
          setShow={setShowMemberForm}
          storeData={memberToUpdate}
          onSubmit={saveUpdateMember}
        />
      )}
    </section>
  );
};

export default MemberTable;
