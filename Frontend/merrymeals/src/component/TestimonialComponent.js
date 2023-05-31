import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import '../css/TestimonialComponent.css'
import profile1 from '../image/profile1.png'
import profile2 from '../image/profile2.png'
import profile3 from '../image/profile3.png'

export default class TestimonialComponent extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={profile1} alt="First profile"/>
          <div className="myCarousel">
            <h3>Shirley Thompson</h3>
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />    
            <p>
            I am incredibly grateful for Meals on Wheels. As a senior citizen with limited mobility, 
            it has become challenging for me to prepare nutritious meals on my own. This app has been a lifesaver!
            </p>
          </div>
        </div>

        <div>
          <img src={profile2} alt="Second profile"/>
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p>
            The quality of the meals is outstanding. Each dish is not only delicious but also packed with the right nutrients. 
            It feels like having a home-cooked meal, and it has significantly improved my overall health and well-being.
            </p>
          </div>
        </div>

        <div>
          <img src={profile3} alt="Third profile"/>
          <div className="myCarousel">
            <h3>Evelyn Thomas</h3>
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />  
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p>
            The user-friendly interface makes it easy for me to browse through a wide variety of meal options. 
            I can choose from different cuisines and dietary preferences, ensuring that I receive meals tailored to my needs. 
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}