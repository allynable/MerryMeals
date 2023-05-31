import React, { Component } from 'react'
import '../css/FooterComponent.css'

export class FooterComponent extends Component {
  render() {
    return (
      <div>

<footer class="footer">
    <div class="footer-menu">
      <h3 class="footer-title">Get Support</h3>
      <ul class="footer-links">
        <li><a href="...">Meals</a></li>
        <li><a href="...">Wellbeing</a></li>
        <li><a href="...">Social Connection</a></li>
        <li><a href="...">Find Your Local Service</a></li>
      </ul>
    </div>
    <div class="footer-menu">
      <h3 class="footer-title">Get Involved</h3>
      <ul class="footer-links">
        <li><a href="...">Donate</a></li>
        <li><a href="...">Volunteer</a></li>
      </ul>
    </div>
    <div class="footer-menu">
      <h3 class="footer-title">Learn More</h3>
      <ul class="footer-links">
        <li><a href="...">About Us</a></li>
        <li><a href="...">FAQ's</a></li>
        <li><a href="...">Annual Report</a></li>
        <li><a href="...">Guide Book</a></li>
        <li><a href="...">Award</a></li>
        <li><a href="...">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="footer-menu">
      <h3 class="footer-title">Contact Us</h3>
      <ul class="footer-links">
        <li><a href="...">Contact Details</a></li>
        <li><a href="...">Media Enquiries</a></li>
      </ul>
    </div>
    <div class="footer-social">
      <a href="..." class="footer-social-link"><i class="fab fa-facebook"></i></a>
      <a href="..." class="footer-social-link"><i class="fab fa-youtube"></i></a>
      <a href="..." class="footer-social-link"><i class="fab fa-instagram"></i></a>
    </div>
  </footer>

      </div>
    )
  }
}

export default FooterComponent