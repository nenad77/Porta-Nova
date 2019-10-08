import React from 'react';
import '../About/About.css';

const AboutText = () => {

    return (
        <div className = "row">
            <div className = "col-md-12 text-center">
                <div className = "w-75 m-auto">
                    <h1 className = "mb-4 main-title">Mi smo Porta nova</h1>
                    <p className = "mb-4">Kompanija koja sinergijom naših inženjera i montažera nudi usluge montaže i održavanja po sistemu konačnog rešenja. Mobilni smo na teritoriji cele Srbije, a u slučaju potrebe i u inostranstvu. U najkraćem mogućem roku izlazimo na teren, kako zbog intervencija kod održavanja, tako i radi sagledavanja novog posla i slanja ponude. Zaposleni u kompaniji Porta Nova d.o.o poseduju sve neophodne sertifikate za poslove za koje su specijalizovani, kao i oprema sa kojom radimo. Suočavamo se sa našim poslom sa maksimalnom profesionalnošću, ciljajući uvek bez improvizacije četiri osnovna motiva u poslu organizacija, ozbiljnost, poverenje, kvalitet.</p>
                </div>
                <div className = "divider"></div>
            </div>
        </div>
    )
}

export default AboutText;