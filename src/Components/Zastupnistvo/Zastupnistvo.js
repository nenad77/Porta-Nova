import React, {Fragment} from 'react';
import './Zastupnistvo.css';
import TeamHero from '../TeamHero/TeamHero';

import brofind from '../../img/dealers/brofind.png';
import cm from '../../img/dealers/cm.png';
import felm from '../../img/dealers/felm.png';
import fluimac from '../../img/dealers/fluimac.png';
import neuFilter from '../../img/dealers/neu-filter.png';
import sirca from '../../img/dealers/sirca.png';
import tge from '../../img/dealers/tge.png';
import thermoTrade from '../../img/dealers/thermo-trade.png';
import trasmetal from '../../img/dealers/trasmetal.png';



const Zastupnistvo = () => {

    return (
        <Fragment>
            <TeamHero />
            <div className = "container container-dealers">
                
                    <h1 className = "my-5 main-title">Uvoz i zastupanje </h1>

                    <p>Pored održavanja vršimo nabavku, isporuku i montažu rezervnih delova za industrijska postrojenja pre svega iz Italije i  Nemačke kao i ostatka evrope. 
                    Porta Nova je zvanični zastupnik nemačke firme Neufilter Gronau za Srbiju,Rumuniju,Crnu Goru, Makedoniju, Hrvatsku i Bosnu i Hercegovinu. 
                    Kompanije partneri čiju robu uvozimo, distribuiramo i servisiramo su Trasmetal, CM Automazione, Brofind, Sirca International, Felm, Fluimac, TGEVentilatori, Thermotrade.
                    Pored navedenog bavimo se izradom i ugradnjom različitih tipova čeličnih konstrukcija. 
                    Takođe vršimo usluge konsaltinga i celokupne organizacione i administrativne podrške  italijanskim kompanijama koje započinju poslovanje u Srbiji i regionu ili povremeno rade na određenim projektima.</p>
                
                <div className = "mb-4">
                    <div className="card-deck">
                        <div className="card">
                            <img src= {neuFilter} className="card-img-top w-75 text-center p-3" alt="Neu filter logo" />
                            <div className="card-body">
                                <h5 className="card-title">Neu Filter</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted text-uppercase"><a href = "https://www.neufilter.de/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src= {cm} className="card-img-top w-75 text-center p-3" alt="CM logo" />
                            <div className="card-body">
                                <h5 className="card-title">CM Automazione</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted text-uppercase"><a href = "http://cmautomazione.it/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src= {brofind} className="card-img-top w-75 text-center p-3" alt="Brofind logo" />
                            <div className="card-body">
                                <h5 className="card-title">Brofind</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted text-uppercase"><a href = "http://www.brofind.it/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "mb-4">
                    <div className="card-deck">
                        <div className="card">
                            <img src= {felm} className="card-img-top w-75 text-center p-3" alt="Felm logo" />
                            <div className="card-body">
                                <h5 className="card-title">Felm</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted text-uppercase"><a href = "http://www.felm.it/en/home-2/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src= {fluimac} className="card-img-top w-75 text-center p-3" alt="Fluimac logo" />
                            <div className="card-body">
                                <h5 className="card-title">Fluimac</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted text-uppercase"><a href = "https://www.fluimac.com/it" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src= {sirca} className="card-img-top w-75 text-center p-3" alt="Sirca logo" />
                            <div className="card-body">
                                <h5 className="card-title">Sirca</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted text-uppercase"><a href = "https://www.sircainternational.com/sircainternational/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "mb-4 pb-5">
                    <div className="card-deck">
                        <div className="card">
                            <img src= {tge} className="card-img-top w-75 text-center p-3" alt="T.G.E. logo" />
                            <div className="card-body">
                                <h5 className="card-title">T.G.E. Ventilatori</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted text-uppercase"><a href = "http://www.tgeventilatori.com/?lang=en" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src= {thermoTrade} className="card-img-top w-75 text-center p-3" alt="Thermo-Trade logo" />
                            <div className="card-body">
                                <h5 className="card-title">Thermo Trade S.R.L.</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted text-uppercase"><a href = "http://www.thermotrade.it/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img src= {trasmetal} className="card-img-top w-75 text-center p-3" alt="Trasmetal logo" />
                            <div className="card-body">
                                <h5 className="card-title">Trasmetal</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted text-uppercase"><a href = "https://en.trasmetal.net/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Zastupnistvo;