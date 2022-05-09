import React, { Fragment } from 'react';
import banner1 from '../../../image/carousel-img/1.jpg'
import banner2 from '../../../image/carousel-img/2.jpg'
import banner3 from '../../../image/carousel-img/3.jpg'
import './Carousel.css'

const Carousel = () => {

  
  return (
    <Fragment>
     <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className='text-dark'>Enjoy Your Pastime</h1>
        <p>Television can be a great source of recreation in your pastime.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1>Jump Into The Gaming Field</h1>
        <p>You can play any kind of games using our android TVs.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block text-white">
        <h1>Hurray! Its Movie Time!</h1>
        <p>We give you lots of features with unlimited netflix!.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </Fragment>
  );
};

export default Carousel;