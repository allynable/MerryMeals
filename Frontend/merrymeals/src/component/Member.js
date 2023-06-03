import React, { Component } from 'react'
import memberService from '../service/MemberService'

export class Member extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       memberId: this.props.match.params.memberId,
       member: {}
    }
  }  

  componentDidMount(){
    memberService.getMemberById(this.state.memberId)
    .then( (response) => {
        this.setState({
            member: response.data 
         })
    })
  }
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '50%' }}>
        <h1 className='my-4'>VIEW MEMBER'S INFORMATION</h1>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">First Name</th>
              <td style={{ textAlign: 'left' }}>{this.state.member.firstName}</td>
            </tr>
            <tr>
              <th scope="row">Last Name</th>
              <td style={{ textAlign: 'left' }}>{this.state.member.lastName}</td>
            </tr>
            <tr>
              <th scope="row">Contact Number</th>
              <td style={{ textAlign: 'left' }}>{this.state.member.contactNumber}</td>
            </tr>
            <tr>
              <th scope="row">Date of Birth</th>
              <td style={{ textAlign: 'left' }}>{this.state.member.dob}</td>
            </tr>
            <tr>
              <th scope="row">Condition</th>
              <td style={{ textAlign: 'left' }}>{this.state.member.condition}</td>
            </tr>
            <tr>
              <th scope="row">Allergies</th>
              <td style={{ textAlign: 'left' }}>{this.state.member.allergies}</td>
            </tr>
            <tr>
              <th scope="row">Caregiver Name</th>
              <td style={{ textAlign: 'left' }}>{this.state.member.caregiverName}</td>
            </tr>
            <tr>
              <th scope="row">Relationship</th>
              <td style={{ textAlign: 'left' }}>{this.state.member.relationship}</td>
            </tr>
            <tr>
              <th scope="row">Caregiver Contact</th>
              <td style={{ textAlign: 'left' }}>{this.state.member.caregiverContact}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}

export default Member