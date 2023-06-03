import React, { Component } from 'react'
import '../css/AboutUs.css';
import Volunteer from '../image/Volunteer.jpg';

export class AboutUs extends Component {
  render() {
    return (
      <div>
        <h2 className="mt-5 mb-4">OUR STORY</h2>
        <div className="container1 mt-7 text-left">
        <div className="story-card">
        <img src={Volunteer} alt="Meals on Wheels" className="story-image" />
        <p className="story-text ms-4">
        MerryMeals is a dedicated meals on wheels organization based in Singapore. Founded in 1995, a group of caring individuals recognized a pressing need in the community and took action. They partnered with passionate volunteers who generously contribute their time and effort to ensure that nutritious meals reach those in need.<br></br> <br></br>
        With the help of these selfless volunteers, MerryMeals prepares and delivers wholesome food to individuals who face challenges in accessing proper nutrition. Beyond providing meals, MerryMeals strives to build meaningful connections with their recipients, offering companionship and support to create a sense of community.<br></br> <br></br>
        MerryMeals' commitment goes beyond fulfilling immediate hunger. They believe in making a lasting impact by fostering a supportive environment for those they serve. Their tireless efforts and collaborative spirit have made them a beacon of hope, spreading joy and nourishment throughout the community.<br></br> <br></br>
        As an integral part of Singapore's social fabric, MerryMeals continues to expand their reach and serve more individuals in need. Their unwavering dedication and caring approach have positively touched the lives of many, making a significant difference one meal at a time.
        </p>
        </div>
        </div>

        <div className="container2 mt-5">
       <div className="custom-container row">
        <div className="col-md-6">
          <h2 className='mb-3'>OUR VISION</h2>
          <p className='mb-5'>No senior will go hungry or experience social isolation.</p>

          <h2 className='mb-3'>OUR MISSION</h2>
          <p>
            We enrich the lives of seniors and assist them in maintaining independence by providing nutritious food, human connections, and social support. We also use our expertise and capacity to serve other nutritionally at-risk populations.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className='mb-3'>OUR VALUES</h2>
          <ul>
            <li>Integrity – We work in a trustworthy, compassionate, and ethical manner.</li>
            <li>Respect – We value the self-worth of our staff, volunteers, and populations we serve.</li>
            <li>Inclusion – We are strengthened by diversity.</li>
            <li>Creativity – We are innovative and willing to try new approaches.</li>
            <li>Commitment – We demonstrate quality performance and dedication.</li>
            <li>Teamwork – Together we accomplish more.</li>
          </ul>
        </div>
      </div>
    </div><br></br>

    <h2 className='mt-4'>HOW WE'VE GROWN</h2>
    <div className="container3 mt-4 mb-5">
      <p className='text-center'>
      Today, MerryMeals produces 7,300 nutritious meals four days each week in a 14,000-square-foot commercial kitchen located in the heart of Singapore. Meals are then delivered to dozens of dining centers throughout the city, where they are served at noon to older adults in center dining rooms or sent out as Meals on Wheels to homebound older adults.
      </p>
    </div>

    <h2 className='mt-4'>VOLUNTEERS HELP MAKE IT HAPPEN</h2>
    <div className="container3 mt-4 mb-5">
      <p className='text-center'>
        Volunteers are the heart and soul of the Meals on Wheels People, and we depend on more than 200 people every day to help prepare and deliver meals at the centers and to deliver Meals on Wheels. The volunteer with the friendly smile and hot meal is often the only person some of our homebound seniors will see on an average day. Find out more about volunteer opportunities.
      </p>
    </div>

    <h2 className='mt-4'>MAKING MEALS AVAILABLE</h2>
    <div className="container3 mt-4 mb-5">
      <p className='text-center'>
        Meals on Wheels People meals are available to anyone over the age of 60, and seniors are encouraged to donate what they can afford. For seniors that living more than 10km from our place, we can provide the frozen food to avoid stale food while on the go. 
      </p><br></br>
    </div>

    </div>
    )
  }
}

export default AboutUs;
