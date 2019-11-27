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
import petruzalek from '../../img/dealers/logo-petruzalek-rs.png';



const Zastupnistvo = () => {

    return (
        <Fragment>
            <TeamHero />
            <div className = "container container-dealers pb-5">
                
                    <h1 className = "my-5 main-title">Uvoz i zastupanje </h1>

                    <p className = "mb-5">Pored održavanja vršimo nabavku, isporuku i montažu rezervnih delova za industrijska postrojenja pre svega iz Italije i Nemačke kao i ostatka evrope. Porta Nova je zvanični zastupnik nemačke firme Neufilter Gronau za Srbiju, Rumuniju, Crnu Goru, Makedoniju, Hrvatsku i Bosnu i Hercegovinu. Kompanije partneri čiju robu uvozimo, distribuiramo i servisiramo su Trasmetal, CM Automazione, Brofind, Sirca International, Felm, Fluimac, TGEVentilatori, Thermotrade. Pored navedenog bavimo se izradom i ugradnjom različitih tipova čeličnih konstrukcija. Takođe vršimo usluge konsaltinga i celokupne organizacione i administrativne podrške  italijanskim kompanijama koje započinju poslovanje u Srbiji i regionu ili povremeno rade na određenim projektima.</p>
                
                <div className = "my-2">
                    <div className="row">
                        <div className = "col-md-4">
                            <div className = "card">
                                <img src= {neuFilter} className="card-img-top w-75 text-center p-3" alt="Neu filter logo" />
                                <div className="card-body">
                                    <h5 className="card-title">Neu Filter</h5>
                                    <p className="card-text">NeuFilter je na tržištu je od 2002. godine i specijalizovao se za vazdušne filtere koje imaju složenu industrijsku primenu. Naši filteri su se dobro dokazali u automobilskoj, farmaceutskoj industriji, industriji nameštaja u tehnologiji klimatizacije i ventilacije, u proizvodnji instrumenata i u mnogim drugim industrijama.</p>
                                    <p className="card-text"><small className="text-muted text-uppercase"><a href = "https://www.neufilter.de/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className = "card">
                                <img src= {cm} className="card-img-top w-75 text-center p-3" alt="CM logo" />
                                <div className="card-body">
                                    <h5 className="card-title">CM Automazione</h5>
                                    <p className="card-text">Se bavi projektovanjem, proizvodnjom ,montažom kao i održavanjem unutrašnjih pokretnih fabričkih linija, nadzemnih i podnih konvejera, nudeći monoredne, dvoredne i ručne transportne trake. Ponuda i delatnost kompanije CM Automazione obuhvata sve od projektovanja, roizvodnje, montaže do održavanja, servisiranja i nabavke rezervnih delova.</p>
                                    <p className="card-text"><small className="text-muted text-uppercase"><a href = "http://cmautomazione.it/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className = "card">
                                <img src= {brofind} className="card-img-top w-75 text-center p-3" alt="Brofind logo" />
                                <div className="card-body">
                                    <h5 className="card-title">Brofind</h5>
                                    <p className="card-text">Više od 20 godina se bavi kontrolom industrijskog zagađenja, nudeći široku paletu tehnologija za pročišćavanje vazduha širokom spektru industrija, sa posebnom pažnjom na probleme emisije gasova koje sadrže isparljiva organska jedinjenja (VOC). Servisno odeljenje je specijalizovano za personalizovanu pomoć u aktivnostima koje se kreću od kontrole na daljinu radnih uslova do rutinskog kvara i održavanja strojenja.</p>
                                    <p className="card-text"><small className="text-muted text-uppercase"><a href = "http://www.brofind.it/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "my-2">
                    <div className="row">
                        <div className="col-md-4">
                            <div className = "card">
                                <img src= {felm} className="card-img-top w-75 text-center p-3" alt="Felm logo" />
                                <div className="card-body">
                                    <h5 className="card-title">Felm</h5>
                                    <p className="card-text">FELM posluje u sektoru elektromotora od 1960. godine i ima veliko iskustvo na tržištu električnih mašina. Projektovanje i izrada elektro motora je glavna delatnost kompanije.Zahvaljujući stručnosti svog osoblja, može garantovati tehničku podršku koja će udovoljiti najsofisticiranijim tehničkim zahtevima, prilikom instalacija, kao i kod održavanja.</p>
                                    <p className="card-text"><small className="text-muted text-uppercase"><a href = "http://www.felm.it/en/home-2/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className = "card">
                                <img src= {fluimac} className="card-img-top w-75 text-center p-3" alt="Fluimac logo" />
                                <div className="card-body">
                                    <h5 className="card-title">Fluimac</h5>
                                    <p className="card-text">Fluimac je italijanski proizvođač pneumatskih pumpi i opreme. Glavni proizvod kompanije Fluimac su  pneumatske pumpe sa dvostrukom membranom. Deo asortimana su i peristaltičke pumpe, centrifugalne pumpe sa magnetnim pogonom, mikseri,bubanj pumpe,amortizeri, elektromehaničke pumpe za doziranje kao i kompletan asorti,man pratećih delova i opreme.</p>
                                    <p className="card-text"><small className="text-muted text-uppercase"><a href = "https://www.fluimac.com/it" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className = "card">
                                <img src= {sirca} className="card-img-top w-75 text-center p-3" alt="Sirca logo" />
                                <div className="card-body">
                                    <h5 className="card-title">Sirca</h5>
                                    <p className="card-text">Sirca International SpA  je italijanski proizvođač kompletnih sistema za automatizaciju i pneumatsku regulaciju. Glavni proizvodi kompanije Sirca su rotirajuci pneumatski cetvorostruki aktuatori, zatim proizvodnja i prodaja leptir ventila sa gumenim sedistima, dvostrukih ekscentričnih leptir ventila, kugličnih i povratnih ventila. Deo proizvodnje su i dodaci za aktiviranje, kontrolu i regulaciju ventila. Najnoviji proizvod kompanije Sirca su trostrukI ekscentriči leptir ventili sa metalnim sedištem.</p>
                                    <p className="card-text"><small className="text-muted text-uppercase"><a href = "https://www.sircainternational.com/sircainternational/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "my-2">
                    <div className="row">
                        <div className="col-md-4">
                            <div className = "card">
                                <img src= {tge} className="card-img-top w-75 text-center p-3" alt="T.G.E. logo" />
                                <div className="card-body">
                                    <h5 className="card-title">T.G.E. Ventilatori</h5>
                                    <p className="card-text">T.G.E VENTILATORI srl je specijalizovana za proizvodnju industrijskih centrifugalnih ventilatora i kompresorakapi pratece opreme. Glavne delatnosti su dizajniranje i proizvodnja teških centrifugalnih i aksijalnih ventilatora, tehnička podrška i rešavanje problema, služba za korisnike na licu mesta sa visoko kvalifikovanim osobljem sa najsavremenijim instrumentima i opremom.</p>
                                    <p className="card-text"><small className="text-muted text-uppercase"><a href = "http://www.tgeventilatori.com/?lang=en" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className = "card">
                                <img src= {thermoTrade} className="card-img-top w-75 text-center p-3" alt="Thermo-Trade logo" />
                                <div className="card-body">
                                    <h5 className="card-title">Thermo Trade S.R.L.</h5>
                                    <p className="card-text">Kompanija se bavi proizvodnjom rashladnih tornjeva, uređaja za pročišćavanje vazduha, u sektoru zaštite životne sredine i fokusirana je na termoformisane plastične proizvode (PVC, PP, PS, ABS, PVC ABS, PET), kao što su sredstva za punjenje, paketi za uklanjanje ulja,jastučići za vlaženje, itd. </p>
                                    <p className="card-text"><small className="text-muted text-uppercase"><a href = "http://www.thermotrade.it/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className = "card">
                                <img src= {trasmetal} className="card-img-top w-75 text-center p-3" alt="Trasmetal logo" />
                                <div className="card-body">
                                    <h5 className="card-title">Trasmetal</h5>
                                    <p className="card-text">Osnovan 1953. godine i sada je među liderima u industriji, Trasmetal je izradio hiljade postrojenja za pred-obradu, premazivanje, sušenje i glaziranje širom sveta. Delatnost Trasmetala u oblasti završne obrade kreće se od postrojenja za farbanje potapanjem do elektroforeze i autoforeze koja se može završiti nanošenjem tečnih ili praškastih boja, prskanih diskovima OFB (patent Trasmetala) ili puškama.</p>
                                    <p className="card-text"><small className="text-muted text-uppercase"><a href = "https://en.trasmetal.net/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "my-2">
                    <div className="row">
                        <div className="col-md-4">
                            <div className = "card">
                                <img src= {petruzalek} className="card-img-top w-75 text-center p-3" alt="Petruzalek logo" />
                                <div className="card-body">
                                    <h5 className="card-title">Petruzalek d.o.o.</h5>
                                    <p className="card-text">Petruzalek je kompanija koja posluje sa tehnologijama za pakovanje. Nudimo širok asortiman mašina i materijala za pakovanje, redovan servis i održavanje u svim zemljama.</p>
                                    <p className="card-text"><small className="text-muted text-uppercase"><a href = "http://www.petruzalek.rs/" target = "_blank" rel="noopener noreferrer">Link do proizvođača</a></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Zastupnistvo;