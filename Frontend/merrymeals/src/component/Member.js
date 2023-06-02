import React, { useState, useEffect } from "react";
import memberService from "../service/MemberService";
import { useParams } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

const Member = () => {
  const { memberId } = useParams();
  const [member, setMember] = useState(null);
  
  useEffect(() => {
    const fetchMember = async () => {
      const response = await memberService.getMemberById(memberId);
      const memberData = response.data;
      setMember(memberData);
    };

   
    fetchMember();
  }, [memberId]);

  if (!member) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <Container>
        <h1 className="my-3">Member Information</h1>

        <Table bordered className="table table-rounded">
          <thead>
            <tr class="table-dark">
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Contact</th>
              <th scope="col">Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{member.firstName}</td>
              <td>{member.address}</td>
              <td>{member.contactNumber}</td>
              <td>{member.condition}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default Member;
