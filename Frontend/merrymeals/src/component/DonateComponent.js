import React, { Component } from 'react'
import '../css/DonateComponent.css'
import donate from '../image/donate.png'
import news from '../image/news.png'

export class DonateComponent extends Component {
  render() {
    return (
      <div>
       <img src={donate} alt="Donate"/>
      </div>
    )
  }
}

export default DonateComponent