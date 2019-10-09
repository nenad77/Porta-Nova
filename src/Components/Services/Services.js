import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import './Services.css';
import AboutText from '../AboutText/AboutText';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1200,
  })

const iconOne = <FontAwesomeIcon icon={faTools} />
const iconTwo = <FontAwesomeIcon icon={faPencilRuler} />
const iconThree = <FontAwesomeIcon icon={faHardHat} />
const iconFive = <FontAwesomeIcon icon={faWater} />

const Services = () => {

    return (
        <div className = "container services-padding">
            <AboutText />
            <div className = "row">
                <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-6 p-4">
                    <div className = "row">
                        <div className = "col-3 col-md-3 icons">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Izgradnja sanitarne vodovodne mreže - unutrašnje i spoljašnje vodovodne instalacije.
                        </div>
                    </div>
                </div>
                <div  data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-6 p-4">
                    <div className = "row">
                        <div className = "col-3 col-md-3 icons">
                            {iconTwo}
                        </div>
                        <div className = "col-9 col-md-9">
                            Izgradnja fekalne i kišne kanalizacione mreže - unutrašnje i spoljašnje instalacije kanalizacije.
                        </div>
                    </div>
                </div>
            </div>
            <div className = "row">
                <div  data-aos="zoom-in" data-aos-offset="300" ata-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-6 p-4">
                    <div className = "row">
                        <div className = "col-3 col-md-3 icons">
                            {iconThree}
                        </div>
                        <div className = "col-9 col-md-9">
                            Izgradnja i opremanje crpnih stanica za atmosferske i otpadne vode.
                        </div>
                    </div>
                </div>
                <div  data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-6 p-4">
                <div className = "row">
                        <div className = "col-3 col-md-3 icons">
                            {iconFive}
                        </div>
                        <div className = "col-9 col-md-9">
                            Izgradnja protivpožarne vodovodne mreže - spoljašnje i unutrašnje instalacije za gašenje požara.
                        </div>
                    </div>
                </div>
            </div>
            <h2 className = "text-center main-title mt-5" id = "references">Mi radimo sa strašću!</h2>
        </div>
    )
}

export default Services;