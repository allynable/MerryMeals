import React, { Component } from 'react'
import memberService from '../service/MemberService'
import { withRouter } from 'react-router-dom';
import { Modal} from "react-bootstrap";
import { toast } from "react-toastify";

export class MemberTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
      showUpdateModal: false,
      selectedMember: null,
      showAddModal: false,
      newMember: {
        firstName: '',
        lastName: '',
        contactNumber: '',
        dob: '',
        condition: '',
        allergies: '',
        caregiverName: '',
        relationship: '',
        caregiverContact: '',
      },
    };

    this.openUpdateModal = this.openUpdateModal.bind(this);
    this.updateMember = this.updateMember.bind(this);
    this.createMember = this.createMember.bind(this);
    this.openAddModal = this.openAddModal.bind(this);
    this.closeAddModal = this.closeAddModal.bind(this);
  }

  componentDidMount() {
    memberService
      .viewMember()
      .then((response) => {
        this.setState({
          members: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  deleteMember(memberId) {
    memberService
      .deleteMember(memberId)
      .then((response) => {
        this.setState({
          members: this.state.members.filter(
            (member) => member.memberId !== memberId
          ),
        });
        this.props.history.push('/members');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getMemberById(memberId) {
    this.props.history.push(`/member/${memberId}`);
  }

  openUpdateModal(memberId) {
    const selectedMember = this.state.members.find(
      (member) => member.memberId === memberId
    );
    this.setState({
      showUpdateModal: true,
      selectedMember: selectedMember,
    });
  }

  closeUpdateModal() {
    this.setState({
      showUpdateModal: false,
      selectedMember: null,
    });
  }

  updateMember(memberId, updatedMember) {
    memberService
      .updateMember(memberId, updatedMember)
      .then((response) => {
        toast.info('Member updated successfully!');
        this.closeUpdateModal();

        const updatedMembers = this.state.members.map((member) => {
          if (member.memberId === memberId) {
            return { ...member, ...updatedMember };
          }
          return member;
        });

        this.setState({ members: updatedMembers });
      })
      .catch((error) => {
        toast.error('Failed to update the member.');
      });
  }

  createMember(newMember) {
    memberService
      .saveMember(newMember)
      .then((response) => {
        toast.success('Member created successfully!');
        const createdMember = response.data;

        this.setState((prevState) => ({
          members: [...prevState.members, createdMember],
        }));
        this.closeAddModal();
      })
      .catch((error) => {
        toast.error('Failed to create the member.');
      });
  }

  openAddModal() {
    this.setState({ showAddModal: true });
  }

  closeAddModal() {
    this.setState({
      showAddModal: false,
      newMember: {
        name: '',
        email: '',
        address: '',
      },
    });
  }

  render() {
    const { members, showUpdateModal, selectedMember, showAddModal, newMember } =
      this.state;

    return (
      <div>
        <h1 className="mb-4">Member List</h1>
        <table className="table">
          <thead>
            <tr className="table-success">
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Condition</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.memberId}>
                <td>{member.firstName}</td>
                <td>{member.contactNumber}</td>
                <td>{member.condition}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning me-2"
                    onClick={() => this.openUpdateModal(member.memberId)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.deleteMember(member.memberId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showUpdateModal && selectedMember && (
          <Modal show={showUpdateModal} onHide={() => this.closeUpdateModal()}>
            <Modal.Header closeButton>
              <Modal.Title>Update Member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={selectedMember.name}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        name: e.target.value,
                      };
                      this.setState({ selectedMember: updatedMember });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={selectedMember.email}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        email: e.target.value,
                      };
                      this.setState({ selectedMember: updatedMember });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={selectedMember.address}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        address: e.target.value,
                      };
                      this.setState({ selectedMember: updatedMember });
                    }}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  this.updateMember(selectedMember.memberId, selectedMember)
                }
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => this.closeUpdateModal()}
              >
                Cancel
              </button>
            </Modal.Footer>
          </Modal>
        )}

        <Modal show={showAddModal} onHide={() => this.closeAddModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Add Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  value={newMember.firstName}
                  onChange={(e) => {
                    const createdMember = {
                      ...newMember,
                      firstName: e.target.value,
                    };
                    this.setState({ newMember: createdMember });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  value={newMember.lastName}
                  onChange={(e) => {
                    const createdMember = {
                      ...newMember,
                      lastName: e.target.value,
                    };
                    this.setState({ newMember: createdMember });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="contact"
                  value={newMember.contactNumber}
                  onChange={(e) => {
                    const createdMember = {
                      ...newMember,
                      contactNumber: e.target.value,
                    };
                    this.setState({ newMember: createdMember });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  value={newMember.dob}
                  onChange={(e) => {
                    const createdMember = {
                      ...newMember,
                      dob: e.target.value,
                    };
                    this.setState({ newMember: createdMember });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="condition">Condition</label>
                <input
                  type="text"
                  className="form-control"
                  id="condition"
                  value={newMember.condition}
                  onChange={(e) => {
                    const createdMember = {
                      ...newMember,
                      condition: e.target.value,
                    };
                    this.setState({ newMember: createdMember });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="allergies">Allergies</label>
                <input
                  type="text"
                  className="form-control"
                  id="allergies"
                  value={newMember.allergies}
                  onChange={(e) => {
                    const createdMember = {
                      ...newMember,
                      allergies: e.target.value,
                    };
                    this.setState({ newMember: createdMember });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="caregiverName">Caregiver's Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="caregiverName"
                  value={newMember.caregiverName}
                  onChange={(e) => {
                    const createdMember = {
                      ...newMember,
                      caregiverName: e.target.value,
                    };
                    this.setState({ newMember: createdMember });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="relationship">Relationship</label>
                <input
                  type="text"
                  className="form-control"
                  id="relationship"
                  value={newMember.relationship}
                  onChange={(e) => {
                    const createdMember = {
                      ...newMember,
                      relationship: e.target.value,
                    };
                    this.setState({ newMember: createdMember });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="caregiverContact">Caregiver's Contact</label>
                <input
                  type="number"
                  className="form-control"
                  id="caregiverContact"
                  value={newMember.caregiverContact}
                  onChange={(e) => {
                    const createdMember = {
                      ...newMember,
                      caregiverContact: e.target.value,
                    };
                    this.setState({ newMember: createdMember });
                  }}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.createMember(newMember)}
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => this.closeAddModal()}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>

        <button
          type="button"
          className="btn btn-success me-1"
          onClick={() => this.openAddModal()}
        >
          Add Member
        </button>
      </div>
    );
  }
}

export default withRouter(MemberTable);