import React from 'react';
import '../AboutMec/AboutMec.css';
import tras from '../../img/certificate/trasmetalCert.jpg';
import cmauto from '../../img/certificate/cmautomazione.jpg';

const AboutText = () => {

    return (
        <div className = "row">
            <div className = "col-md-12 text-center">
                <div className = "w-75 m-auto">
                    <h1 className = "mb-4 main-title-mec">Mi smo Porta nova</h1>
                    <p className = "textMain">Kompanija Porta Nova se već 6 godina bavi industrijskom montažom,instalacijom  i održavanjem unutrašnjih transportnih sistema.
                    Planirano održavanje unutrašnjih transportnih sistema jedna je od najvažnijih aktivnosti koje treba sprovesti nakon puštanja u pogon  kako bi se obezbedio pravilan rad uz maksimalnu efikasnost, kao i sigurnost proizvoda i osoblja uključenih u njegovu upotrebu.
                    Stručni sertifikati kompanija</p>
                    <button type="button" className="btn btn-primary buttonPrim" data-toggle="modal" data-target="#exampleModalCenter">
                     Trasmetal 
                     </button>
                            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title titleCert" id="exampleModalLongTitle">Trasmetal sertifikat</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img className="certificate" src={tras} alt="Trasmetal certificate" />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary closeButton" data-dismiss="modal">Zatvori</button>
                                   
                                </div>
                                </div>
                            </div>
                            </div>
                     <p className = "textMain"> i </p>
                     <button type="button" className="btn btn-primary buttonPrim" data-toggle="modal" data-target="#exampleModalCenterOne">
                     CM Automazione 
                     </button>
                            <div className="modal fade" id="exampleModalCenterOne" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">CM Automazione </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                <img className="certificate" src={cmauto} alt="Trasmetal certificate" />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary closeButton" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>

                     <p className = "textMain">su dokaz da je naš  tim kvalifikovan za izvođenje najsloženijih oblika industrijskih  instalacija, održavanja, modernizacije i kontrole industrijskih postrojenja, kao i pomeranja, preseljenja i povezivanja fabričkih linija. Sinergijom naših inženjera i montažera nudimo usluge montaže i održavanja po sistemu konačnog rešenja. Mobilni smo na teritoriji cele Srbije, a u slučaju potrebe i u inostranstvu. U najkraćem mogućem roku izlazimo na teren, kako zbog intervencija kod održavanja, tako i radi sagledavanja novog posla i slanja ponude. Zaposleni u kompaniji Porta Nova d.o.o poseduju sve neophodne sertifikate za poslove za koje su specijalizovani, kao i oprema sa kojom radimo. Suočavamo se sa našim poslom sa maksimalnom profesionalnošću, ciljajući uvek bez improvizacije četiri osnovna motiva u poslu organizacija, ozbiljnost, poverenje, kvalitet.</p>
                </div>
                <div className = "divider"></div>
            </div>
        </div>
    )
}

export default AboutText;