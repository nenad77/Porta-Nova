import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './About.css';


const iconOne = <FontAwesomeIcon icon={faAngleDoubleRight} />

const About = () => {

    return (
        <div className = "container services-padding">
            <div className = "row">
                <div className = "col-md-12 text-center">
                    <div className = "w-75 m-auto">
                        <h1 className = "mb-4 main-title">Mi smo Porta nova</h1>
                        <p className = "mb-4">Kompanija koja sinergijom naših inženjera i montažera nudi usluge montaže i održavanja po sistemu konačnog rešenja. Mobilni smo na teritoriji cele Srbije, a u slučaju potrebe i u inostranstvu. U najkraćem mogućem roku izlazimo na teren, kako zbog intervencija kod održavanja, tako i radi sagledavanja novog posla i slanja ponude. Zaposleni u kompaniji Porta Nova d.o.o poseduju sve neophodne sertifikate za poslove za koje su specijalizovani, kao i oprema sa kojom radimo. Suočavamo se sa našim poslom sa maksimalnom profesionalnošću, ciljajući uvek bez improvizacije četiri osnovna motiva u poslu organizacija, ozbiljnost, poverenje, kvalitet</p>
                    </div>
                    <div className = "divider"></div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-xs-12 col-md-4 p-4">
                    <div className = "row">
                        <div className = "col-2 col-md-3 icons">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Odgovornost i posvećenost naših zaposlenih omogućava nam zdravo poslovno okruženje i zadovoljne Klijente. 
                        </div>
                    </div>
                </div>
                <div className = "col-xs-12 col-md-4 p-4">
                    <div className = "row">
                        <div className = "col-2 col-md-3 icons">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Trudimo se da prepoznamo trendove iz oblasti kojima se bavimo. Inovativnost, fleksibilnost, pouzdanost su osobine kojima težimo.
                        </div>
                    </div>
                </div>
                <div className = "col-xs-12 col-md-4 p-4">
                    <div className = "row">
                        <div className = "col-2 col-md-3 icons">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Naše odlike su timski rad, komunikacija, saradnja, kvalitet. Sve ono što nas čini pouzdanim partnerom.
                        </div>
                    </div>
                </div>
            </div>
            <div className = "row">
                <div className = "col-xs-12 col-md-4 p-4">
                    <div className = "row">
                        <div className = "col-2 col-md-3 icons">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Aktivno učestvujemo u pronalaženju najboljih tehničko - ekonomskih rešenja za naše Klijente, kako tokom izgradnje, tako i tokom eksploatacije Objekata.
                        </div>
                    </div>
                </div>
                <div className = "col-xs-12 col-md-4 p-4">
                <div className = "row">
                        <div className = "col-2 col-md-3 icons">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Bezbednost zaposlenih na prvom mestu. Stalna edukacija zaposlenih, uz primenu svih propisanih mera bezbednosti i zaštite na radu.
                        </div>
                    </div>
                </div>
                <div className = "col-xs-12 col-md-4 p-4"><div className = "row">
                        <div className = "col-2 col-md-3 icons">
                            {iconOne}
                        </div>
                        <div className = "col-9 col-md-9">
                            Poštujemo ugovorene rokove. Zadovoljan Klijent je najbolja preporuka.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className = "divider"></div> */}
            <h2 className = "text-center main-title">Mi radimo sa strašću!</h2>
        </div>
    )
}

export default About;