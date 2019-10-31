import React from 'react';
import sliderImg from '../../img/reference-slider-19.jpg';
import sliderImgOne from '../../img/reference-slider-20.jpg';
import sliderImgTwo from '../../img/reference-slider-21.jpg';
import sliderImgFour from '../../img/reference-slider-22.jpg';
import sliderImgFive from '../../img/reference-slider-23.jpg';
import sliderImgSix from '../../img/reference-slider-24.jpg';
import sliderImgEight from '../../img/reference-slider-25.jpg';
import sliderImgNine from '../../img/reference-slider-26.jpg';
import sliderImgTen from '../../img/reference-slider-27.jpg';
import sliderImgEleven from '../../img/reference-slider-28.jpg';

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
                    <img className="d-block w-100" src= {sliderImgTen} alt="Nineth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src= {sliderImgEleven} alt="Nineth slide" />
                </div>
            </div>
        </div>
    )
}

export default ReferenceSlider;