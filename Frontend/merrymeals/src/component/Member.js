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
      <div>
            <h1>VIEW MEMBER INFORMATION</h1>

            <table class="table">
            <thead>
                <tr class="table-success">
                <th scope="col">Store Name</th>
                <th scope="col">Store Location</th>
                <th scope="col">Store Address</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{this.state.member.firstName}</td>
                        <td>{this.state.member.lastName}</td>
                        <td>{this.state.member.contactNumber}</td>
                    </tr>
            </tbody>
            </table>
      </div>
    )
  }
}

export default Member