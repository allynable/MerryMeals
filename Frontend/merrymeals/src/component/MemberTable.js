import React, { Component } from 'react'
import memberService from '../service/MemberService'

export class MemberTable extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      members: []
   }
 }

 componentDidMount(){
   memberService.viewMember()
   .then( (response) => {
        console.log("All members in Component" + JSON.stringify(response))
        this.setState({
            members: response.data
         })
   })
 }

 deleteMember(memberId){
  memberService.deleteMember(memberId)
  .then( response =>{
    this.setState({
      members: this.state.members.filter(member=>member.memberId !== memberId)
    })
    this.props.history.push(`/members`)
  })
 }
 
 getMemberById(memberId){
  this.props.history.push(`/member/${memberId}`)
  window.location.reload();
 }

 updateMember(memberId){
  this.props.history.push(`/post/${memberId}`)
  window.location.reload();
 }
  render() {
    return (
      <div>
            <h1>VIEW MEMBERS</h1>
            <table class="table">
            <thead>
                <tr class="table-success">
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Condition</th>
                <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.members.map(member =>
                    <tr key={member.memberId}>
                        <td>{member.firstName}</td>
                        <td>{member.contactNumber}</td>
                        <td>{member.condition}</td>
                        <td>
                          <button type="button" class="btn btn-success"
                          onClick={ () => this.getMemberById(member.memberId)}>VIEW</button> &nbsp;

                          <button type="button" class="btn btn-warning"
                          onClick={ () => this.updateMember(member.memberId)}>UPDATE</button> &nbsp;


                          <button type="button" class="btn btn-danger"
                          onClick={ () => this.deleteMember(member.memberId)}>DELETE</button> &nbsp;
                        </td>
                    </tr>
                )
            }
            </tbody>
            </table>
      </div>
    )
  }
}

export default MemberTable