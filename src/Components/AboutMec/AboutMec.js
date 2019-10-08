import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './AboutMec.css';



const iconOne = <FontAwesomeIcon icon={faAngleDoubleRight} />

const AboutMec = () => {

    return (
        <div className = "container services-padding">
            
            <div className = "row">
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-4 p-4">
                    <div className = "row">
                        <div className = "col-2 col-md-3 icons-mec">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Odgovornost i posvećenost naših zaposlenih omogućava nam zdravo poslovno okruženje i zadovoljne Klijente. 
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-4 p-4">
                    <div className = "row">
                        <div className = "col-2 col-md-3 icons-mec">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Trudimo se da prepoznamo trendove iz oblasti kojima se bavimo. Inovativnost, fleksibilnost, pouzdanost su osobine kojima težimo.
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-4 p-4">
                    <div className = "row">
                        <div className = "col-2 col-md-3 icons-mec">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Naše odlike su timski rad, komunikacija, saradnja, kvalitet. Sve ono što nas čini pouzdanim partnerom.
                        </div>
                    </div>
                </div>
            </div>
            <div className = "row">
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-4 p-4">
                    <div className = "row">
                        <div className = "col-2 col-md-3 icons-mec">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Aktivno učestvujemo u pronalaženju najboljih tehničko - ekonomskih rešenja za naše Klijente, kako tokom izgradnje, tako i tokom eksploatacije Objekata.
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-4 p-4">
                <div className = "row">
                        <div className = "col-2 col-md-3 icons-mec">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Bezbednost zaposlenih na prvom mestu. Stalna edukacija zaposlenih, uz primenu svih propisanih mera bezbednosti i zaštite na radu.
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" className = "col-xs-12 col-md-4 p-4">
                    <div className = "row">
                        <div className = "col-2 col-md-3 icons-mec">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Poštujemo ugovorene rokove. Zadovoljan Klijent je najbolja preporuka.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMec;