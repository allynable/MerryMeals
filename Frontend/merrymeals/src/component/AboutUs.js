import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="container mt-7 text-left">
          <h2 className="mb-4">OUR STORY</h2>

          <div className="card mb-4">
            <div className="card-body">
              <p className="card-text">
                Meals on Wheels People was founded in 1969 by three caring
                women, Jean Wade, Martha Shull and Cay Kreiger, who saw a need
                in the community that was not being met. They gathered in the
                basement of the Lincoln Street Methodist Church in February 1970
                to serve a hot lunch to about a dozen seniors and then delivered
                14 Meals on Wheels on paper plates wrapped in newspaper.
              </p>
            </div>
          </div>

          <h3 className="mb-4">OUR VISION</h3>
          <p>No senior will go hungry or experience social isolation.</p>

          <h3 className="mb-4">OUR MISSION</h3>
          <p>
            We enrich the lives of seniors, and assist them in maintaining
            independence, by providing nutritious food, human connections and
            social support. We also use our expertise and capacity to serve
            other nutritionally at-risk populations.
          </p>

          <h3 className="mb-4">OUR VALUES</h3>
          <ul className="list-group">
            <li className="list-group-item">
              Integrity – We work in a trustworthy, compassionate and ethical
              manner.
            </li>
            <li className="list-group-item">
              Respect – We value the self-worth of our staff, volunteers and
              populations we serve.
            </li>
            <li className="list-group-item">
              Inclusion – We are strengthened by diversity.
            </li>
            <li className="list-group-item">
              Creativity – We are innovative and willing to try new approaches.
            </li>
            <li className="list-group-item">
              Commitment – We demonstrate quality performance and dedication.
            </li>
            <li className="list-group-item">
              Teamwork – Together we accomplish more.
            </li>
          </ul>

          <h3 className="mb-4">HOW WE’VE GROWN</h3>
          <div className="card mb-4">
            <div className="card-body">
              <p className="card-text">
                Today the Meals on Wheels People produces 7,300 nutritious meals
                four days each week in a 14,000-square-foot commercial kitchen
                located in the heart of Multnomah Village. Meals are then
                delivered to dozens of dining centers throughout Multnomah,
                Washington, and Clark counties where they are served at noon to
                older adults in center dining rooms or sent out as Meals on
                Wheels to homebound older adults.
              </p>
            </div>
          </div>

          <h3 className="mb-4">VOLUNTEERS HELP MAKE IT HAPPEN</h3>
          <div className="card mb-4">
            <div className="card-body">
              <p className="card-text">
                Volunteers are the heart and soul of the Meals on Wheels People,
                and we depend on more than 200 people every day to help prepare
                and deliver meals at the centers and to deliver Meals on Wheels.
                The volunteer with the friendly smile and hot meal is often the
                only person some of our homebound seniors will see on an average
                day. Find out more about volunteer opportunities.
              </p>
            </div>
          </div>

          <h3 className="mb-4">MAKING MEALS AVAILABLE</h3>
          <div className="card mb-4">
            <div className="card-body">
              <p className="card-text">
                Meals on Wheels People meals are available to anyone over the
                age of 60. Each meal costs $9.05, and seniors are encouraged to
                donate what they can afford. Weekend and Holiday meals are
                provided to those who have no other source of food or support.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
