import React, {Fragment} from 'react';
import RentHero from '../RentHero/RentHero';

import imgone from '../../img/renta/1.jpg';
import imgtwo from '../../img/renta/2.jpg';
import imgthree from '../../img/renta/3.jpg';
import imgfour from '../../img/renta/4.jpg';



const Rentiranje = () => {

    return (
        <Fragment>
        <RentHero />
        <div className = "container">
            
            <h1 className = "my-5 main-title">Iznajmljivanje građevinskih mašina</h1>

            <p>Još jedna od delatnosti kompanije Porta Nova je iznajmljivanje građevinskih mašina sa ili bez rukovaoca. U ponudi su valjak Bitelli 12 tona (guma-pegla), Kombinovana mašina ICB4CX, mini utovarivač model Gehl, kamion kiper zapremine 10m3 Mercedes 2640, vibro nabijač (ploča) i pokretna skela.
            Mašine iznajmljujemo po radnom satu, random danu ili po zahtevu klijenata.
            Posedujemo  sve neophodne sertifikate, znanja, veštine i iskustvo za brzo i kvalitetno obavljanje i najzahtevnijih montažerskih radova.</p>

            <div className = "row">
                <div className = "col-xs-12 col-md-6 pt-4">
                    <img className = "w-100" src = {imgone} alt = "rentiranje" />
                </div>

                <div className = "col-xs-12 col-md-6 pt-4">
                    <img className = "w-100" src = {imgtwo} alt = "rentiranje" />
                </div>
            </div>
            <div className = "row pb-5">
                <div className = "col-xs-12 col-md-6 pt-4">
                    <img className = "w-100" src = {imgthree} alt = "rentiranje" />
                </div>
                <div className = "col-xs-12 col-md-6 pt-4">
                    <img className = "w-100" src = {imgfour} alt = "rentiranje" />
                </div>
            </div>
 
        </div>
        </Fragment>
    )
}

export default Rentiranje;