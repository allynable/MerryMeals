import React, { Component } from 'react'
import '../css/HomeComponent.css'
import CarouselComponent from './CarouselComponent';
import TestimonialComponent from './TestimonialComponent';
import purpose from '../image/purpose.png'
import news from '../image/news.png'

export class HomeComponent extends Component {
  render() {
    return (
      <div>
       <CarouselComponent />
       <h1 class="testimonial">TESTIMONIALS</h1>
       <TestimonialComponent/>
       <div id="more-info">
       <div id="more-info-content" class="row g-0">
          <div class="col-xl-3">
            <h3>WAYS TO GIVE</h3>
            <p>Help ensure no senior is left behind.</p><br></br>
            <a class="btn btn-info fs-5 fw-bold text-light" href="..." role="button">DONATE</a>
          </div>
          <div class="col-xl-3">
            <h3>BODY & SOUL</h3>
            <p>Find out how Meals on Wheels delivers so much more than just a meal.</p>
            <a class="btn btn-info fs-5 fw-bold text-light" href="..." role="button">LEARN MORE</a>
          </div>
          <div class="col-xl-3">
            <h3>GET INVOLVED</h3>
            <p>Make an impact in your community.</p><br></br>
            <a class="btn btn-info fs-5 fw-bold text-light" href="..." role="button">SIGN UP</a>
          </div>
          <div class="col-xl-3">
            <h3>CONTACT US</h3>
            <p>Get in touch with us.</p><br></br>
            <a class="btn btn-info fs-5 fw-bold text-light" href="..." role="button">REACH OUT</a>
          </div>
      </div>
      </div>
      <h1 id="purpose-title">OUR PURPOSE</h1>
      <div id="purpose-content" class="row justify-content-center">       
        <div class="col-xl-4">
        <img src={purpose} alt="Purpose"/>
        </div>
        <div class="col-xl-4">
          <h4 class="mb-4">A KNOCK CAN TRANSFORM LIVES</h4>
          <p class="text-start mb-4">Our purpose is to alleviate hunger, improve nutrition, and enhance the overall quality of life for homebound seniors 
            and other vulnerable individuals through the provision of nutritious meals, social interaction, and support services 
            delivered by caring volunteers. We strive to ensure that no senior or vulnerable person goes hungry or feels isolated, 
            fostering a community that values and uplifts their well-being.</p>
            <a id="purpose-button" class="btn btn-info fs-5 fw-bold text-light" href="..." role="button">DONATE NOW</a>
        </div>      
        </div>
        <h1 id="news-title">NEWS</h1>
        <div id="news-content" class="row justify-content-center">       
        <div class="col-xl-4">
        <h4 class="mb-4">PROGRAMS SERVING MORE MEALS THAN EVER BEFORE TO KEEP UP WITH DEMAND</h4>
          <p class="text-start mb-4">During the pandemic, we sent $31.3 million directly to the frontlines. That’s more than 
          1,000 grants to support 628 local communities. Our impact spanned the nation and went into the communities that needed 
          it most. Thanks to our generous donors, we’ve been able to provide healthy meals, social contact and a watchful eye for 
          millions of seniors. But, our work has just begun. We still need to safely serve seniors in need through the end of the 
          pandemic and long into the future..</p>
            <a id="purpose-button" class="btn btn-info fs-5 fw-bold text-light" href="..." role="button">LEARN MORE</a>
        </div>
        <div class="col-xl-4">
        <img src={news} alt="Purpose"/>
        </div>      
        </div>
      </div>
    )
  }
}

export default HomeComponent