import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FoodSafetyGuide = () => {
  return (
    <div className="container1">
      <h2 className="text-center mt-3 mb-4">KEEPING THE COMMUNITY SAFE</h2>
      <p className="lead text-center">COVID safe services</p>
      <p className="text-center">
        Meals on Wheels has always been committed to supporting the health and wellbeing of our customers, not only
        during the COVID-19 pandemic.
      </p>

      <h3 className="mt-5 mb-4">To ensure safe and continual delivery of our essential service, we...</h3>
      <ul className="list-group">
        <li className="list-group-item">Keep delivery visits brief</li>
        <li className="list-group-item">Maintain good hand hygiene before and after each delivery</li>
        <li className="list-group-item">Ask our volunteers and staff members to stay home if they feel unwell</li>
      </ul>

      <p className="mt-4 mb-4">When community restrictions increase, we introduce extra precautions, including:</p>
      <ul className="list-group">
        <li className="list-group-item">Avoiding entering the home where customers can come to the door</li>
        <li className="list-group-item">Placing the meal on furniture outside the door</li>
        <li className="list-group-item">The use of face masks</li>
      </ul>

      <p className="mt-4">
        Our strict food handling procedures and thorough food safety training ensure our customers receive flavorsome and
        nourishing meals in the safest way possible, at a time when it is needed most.
      </p>

      <h2 className="mt-5 mb-4">FOOD SAFETY</h2>
      <p>Meals on Wheels customers are likely to be more vulnerable to food-borne illness.</p>
      <p>
        From cooking to packing, our production process follows a strict food safety program that complies with higher
        safety standards than that in the broader community.
      </p>
      <p className=" mb-4">At Meals on Wheels, we train our workers involved in the preparation of food in:</p>
      <ul className="list-group">
        <li className="list-group-item">Temperature Cooking Controls and Storage Refrigeration Records</li>
        <li className="list-group-item">Food Receipt Monitoring</li>
        <li className="list-group-item">Cooking Standard Recipes</li>
        <li className="list-group-item">Cleaning and Sanitizing Schedules</li>
        <li className="list-group-item">Food Handling Fundamental Training (including personal hygiene)</li>
        <li className="list-group-item">
          Meeting all requirements of the Food Safety for Food Service to Vulnerable Persons Program
        </li>
        <li className="list-group-item">Appropriate handling of allergens</li>
        <li className="list-group-item">
          Meeting the specific needs of our customers, including special diet and texture-modified meals
        </li>
      </ul>

      <h2 className="mt-5 mb-4">WELLBEING AND SAFETY PROTOCOLS</h2>
      <p>
        As a part of each meal delivery, our volunteers take care to check that our customers are safe and well. If they
        notice that something is amiss...
      </p>
      <ol>
        <li>We will follow up with the customer directly and ask if they have sought medical care.</li>
        <li>We contact family and other key contacts provided by the customer.</li>
        <li>We contact other service providers involved in the customer’s care.</li>
        <li>We report concerns to their GP.</li>
        <li>With permission, we may refer to other services for additional support.</li>
      </ol>

      <p>
        If a customer is missing, we try to contact them first, and if we can’t get in touch with them, we follow up with
        their nominated key contacts. If the person is unable to be contacted, we arrange for a well-being check to be
        undertaken by SA Police.
      </p>

      <p>
        If we find a customer in an emergency situation, we will immediately arrange for emergency assistance and wait with
        them until help arrives.
      </p>

      <p>Meals on Wheels customers may be more vulnerable to strangers.</p>
      <p>
        At Meals on Wheels, we screen both our staff and volunteers who visit your home or who have access to your private
        information. This includes undergoing a National Police Check on commencement and again every three years of
        service.
      </p>
      <p>
        We also adhere to the Charter of Rights, and therefore, all personal information from our customers and volunteers
        is kept confidential to protect their privacy.
      </p>

      <h2 className="mt-5 mb-4">ADDITIONAL SUPPORT</h2>
      <p>
        At Meals on Wheels SA, we inform our customers about other available services that may benefit them, such as
        personal alarms or key safes.
      </p>
      <p className="mb-5">
        My Aged Care and other Government support systems can be overwhelming and difficult to understand. Our Customer
        Service Team can provide support to our customers to navigate the My Aged Care portal and kickstart their in-home
        and community support journey.
      </p>
    </div>
  );
};

export default FoodSafetyGuide;
