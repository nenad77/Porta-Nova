import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import { faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import './ServicesMec.css';
import AboutTextMec from '../AboutTextMec/AboutTextMec';

const iconOne = <FontAwesomeIcon icon={faTools} />
const iconTwo = <FontAwesomeIcon icon={faPencilRuler} />
const iconThree = <FontAwesomeIcon icon={faHardHat} />
const iconFive = <FontAwesomeIcon icon={faTruckPickup} />

const Services = () => {

    return (
        <div className = "container services-padding">
            <AboutTextMec />
            <div className = "row">
                <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-6 p-4">
                    <div className = "row">
                        <div className = "col-3 col-md-3 icons-mec">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Izrada i montaža čeličnih kostrukcija, projektovanje i montaža sendvič panela, montaža aluminijumskih i staklenih fasada, izrada i montaža kancelarijskih staklenih pregrada.
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-6 p-4">
                    <div className = "row">
                        <div className = "col-3 col-md-3 icons-mec">
                            {iconTwo}
                        </div>
                        <div className = "col-9 col-md-9">
                            Popravka i održavanje elektro instalacija na objektima i “pametnim zgradama”, pranje fasade "mašinsko čišćenje snega" zamena rasvete, razne vrste visinskih radova Posebno izdvajamo iz naše ponude.
                        </div>
                    </div>
                </div>
            </div>
            <div className = "row">
                <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-6 p-4">
                    <div className = "row">
                        <div className = "col-3 col-md-3 icons-mec">
                            {iconThree}
                        </div>
                        <div className = "col-9 col-md-9">
                            Postavljanje i održavanje elektro instalacija, montaža mašina precizne mehanike i puštanje u rad različite vrste atestiranog varenja.
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-6 p-4">
                <div className = "row">
                        <div className = "col-3 col-md-3 icons-mec">
                            {iconFive}
                        </div>
                        <div className = "col-9 col-md-9">
                            Projektovanje, najam, prodaja i montaža ramovske i cevaste skele, podupirača sa atestima, usluge rada građevinskim mašinama ODRŽAVANJE OBJEKATA, završni gradjevinski radovi i održavanje.
                        </div>
                    </div>
                </div>
            </div>
            <h2 className = "text-center main-title-mec mt-5" id = "referenceMec">Mi radimo sa strašću!</h2>
        </div>
    )
}

export default Services;