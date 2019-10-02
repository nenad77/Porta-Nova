import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import { faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const iconOne = <FontAwesomeIcon icon={faTools} />
const iconTwo = <FontAwesomeIcon icon={faPencilRuler} />
const iconThree = <FontAwesomeIcon icon={faHardHat} />
const iconFour = <FontAwesomeIcon icon={faTruckPickup} />
const iconFive = <FontAwesomeIcon icon={faWater} />
const iconSix = <FontAwesomeIcon icon={faLightbulb} />

const Services = () => {

    return (
        <div className = "container services-padding">
            <div className = "row">
                <div className = "col-xs-12 col-md-4 p-4">
                    <div className = "row">
                        <div className = "col-3 col-md-3 icons">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Izrada i montaža čeličnih kostrukcija, projektovanje i montaža sendvič panela montaža aluminijumskih i staklenih fasada
                        </div>
                    </div>
                </div>
                <div className = "col-xs-12 col-md-4 p-4">
                <div className = "row">
                        <div className = "col-3 col-md-3 icons">
                            {iconTwo}
                        </div>
                        <div className = "col-9 col-md-9">
                            Postavljanje i održavanje elektro instalacija, montaža mašina precizne mehanike i puštanje u rad, različite vrste atestiranog varenja
                        </div>
                    </div>
                </div>
                <div className = "col-xs-12 col-md-4 p-4"><div className = "row">
                        <div className = "col-3 col-md-3 icons">
                            {iconThree}
                        </div>
                        <div className = "col-9 col-md-9">
                            Izrada i montaža kancelarijskih staklenih pregrada, projektovanje, najam, prodaja i montaža ramovske i cevaste skele, podupirača sa atestima, usluge rada građevinskim mašinama
                        </div>
                    </div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-xs-12 col-md-4 p-4">
                    <div className = "row">
                        <div className = "col-3 col-md-3 icons">
                            {iconFour}
                        </div>
                        <div className = "col-9 col-md-9">
                            Završni gradjevinski radovi i održavanje, popravka i održavanje elektro instalacija na objektima i “pametnim zgradama”
                        </div>
                    </div>
                </div>
                <div className = "col-xs-12 col-md-4 p-4">
                <div className = "row">
                        <div className = "col-3 col-md-3 icons">
                            {iconFive}
                        </div>
                        <div className = "col-9 col-md-9">
                            Pranje fasade i mašinsko čišćenje snega
                        </div>
                    </div>
                </div>
                <div className = "col-xs-12 col-md-4 p-4"><div className = "row">
                        <div className = "col-3 col-md-3 icons">
                            {iconSix}
                        </div>
                        <div className = "col-9 col-md-9">
                            Zamena rasvete razne vrste visinskih radova
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;