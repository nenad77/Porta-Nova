import React from 'react';
import sliderImgOne from '../../img/slider-1.jpg';
import sliderImgTwo from '../../img/slider-4.jpg';
import sliderImgThree from '../../img/slider-5.jpg';
import './Carousel.css';

const Carousel = () => {

    return (
        <div className="bd-example home-slider-padding">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="3000">
                <ol className="carousel-indicators carousel-indicators-home">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src= {sliderImgOne} className="d-block w-100" alt="blue pipe" />
                        <div className="carousel-caption carousel-caption-center">
                            <h2><span className = "secondary-color-title">We connect</span> pipes</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src= {sliderImgTwo} className="d-block w-100" alt="trench" />
                        <div className="carousel-caption carousel-caption-center">
                            <h2><span className = "secondary-color-title">We connect</span> pipes</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src= {sliderImgThree} className="d-block w-100" alt="trench" />
                        <div className="carousel-caption carousel-caption-center">
                            <h2><span className = "secondary-color-title">We connect</span> pipes</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;