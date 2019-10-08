import React from 'react';
import sliderImg from '../../img/reference-slider.jpg';
import sliderImgOne from '../../img/reference-slider-10.jpg';
import sliderImgTwo from '../../img/reference-slider-2.jpg';
import sliderImgFour from '../../img/reference-slider-11.jpg';
import sliderImgFive from '../../img/reference-slider-12.jpg';
import sliderImgSix from '../../img/reference-slider-6.jpg';
import sliderImgEight from '../../img/reference-slider-8.jpg';
import sliderImgNine from '../../img/reference-slider-9.jpg';
import sliderImgTen from '../../img/reference-slider-13.jpg';

const ReferenceSlider = () => {

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="3000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src= {sliderImg} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src= {sliderImgOne} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src= {sliderImgTwo} alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src= {sliderImgFour} alt="TFourth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src= {sliderImgFive} alt="Fifth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src= {sliderImgSix} alt="Sixth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src= {sliderImgEight} alt="Eighth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src= {sliderImgNine} alt="Nineth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src= {sliderImgTen} alt="Tenth slide" />
                </div>
            </div>
        </div>
    )
}

export default ReferenceSlider;