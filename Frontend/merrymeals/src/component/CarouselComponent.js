import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../css/CarouselComponent.css'
import { Link } from 'react-router-dom';
import banner1 from '../image/banner1.png'
import banner2 from '../image/banner2.png'
import banner3 from '../image/banner3.png'

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-start">
          <h3 className="fs-1">PROTECT SENIORS NATIONWIDE</h3>
          <p className="fs-5">Help seniors like Sophia age with dignity and without fear of hunger.</p>
          <Link to="/donate">
          <button type="button" class="btn btn-info fs-5 fw-bold text-light">GIVE NOW</button><br></br><br></br><br></br><br></br><br></br>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-start">
          <h3 className="fs-1">TOGETHER, WE CAN DELIVER</h3>
          <p className="fs-5">so Grace's inability to drive to the grocery store doesn't mean she will go hungry.</p>
          <Link to="/destination">
          <button type="button" class="btn btn-info fs-5 fw-bold text-light">LEARN MORE</button><br></br><br></br><br></br><br></br><br></br>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-start">
          <h3 className="fs-1">RALLYING A NATION</h3>
          <p class="custom-caption">Join us in the mission to bring meals, hope, and support to those in need.</p>
          <Link to="/destination">
          <button type="button" class="btn btn-info fs-5 fw-bold text-light">LEARN MORE</button><br></br><br></br><br></br><br></br><br></br>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;