import React from 'react';
import sliderImgOne from '../../img/slider-2.jpg';
import sliderImgTwo from '../../img/slider-3.jpg';
import sliderImgThree from '../../img/slider-6.jpg';
import './CarouselMec.css';

const Carousel = () => {

    return (
        <div className="bd-example home-slider-padding">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators carousel-indicators-home">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src= {sliderImgOne} className="d-block w-100" alt="blue pipe" />
                        <div className="carousel-caption d-none d-lg-block carousel-caption-center-mec">
                            <h2><span className = "secondary-color-title">We resolve</span> tasks</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src= {sliderImgTwo} className="d-block w-100" alt="trench" />
                        <div className="carousel-caption d-none d-lg-block carousel-caption-center-mec">
                            <h2><span className = "secondary-color-title">We resolve</span> tasks</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src= {sliderImgThree} className="d-block w-100" alt="trench" />
                        <div className="carousel-caption d-none d-lg-block carousel-caption-center-mec">
                            <h2><span className = "secondary-color-title">We resolve</span> tasks</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;