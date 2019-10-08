import React from 'react';
import './ReferencesMec.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import ReferenceSliderMec from '../ReferenceSliderMec/ReferenceSliderMec';

const iconOne = <FontAwesomeIcon icon={faWaveSquare} />

const References = () => {

    return (
        <div className = "container-fluid">
            <div className = "row">
                <div className = "col-xs-12 col-md-4">
                    <div className = "row">
                        <ReferenceSliderMec />
                    </div>
                </div>
                <div className = "col-xs-12 col-md-8 references-background">
                    <div className = "row">
                        <div className = "col-md-6 p-5">
                            <ul className = "p-0">
                                <li>
                                    <div className = "row">
                                        <div className = "col-md-1">
                                            {iconOne}
                                        </div>
                                        <div className = "col-md-11">
                                            <h5 className="text-white">Tržni centar RODA, Požarevac</h5>
                                            <p>Montaža aluminijumske i staklene fasade.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className = "row">
                                        <div className = "col-md-1">
                                            {iconOne}
                                        </div>
                                        <div className = "col-md-11">
                                        <h5 className="text-white">Tržni centar Univerexport Beograd, Voždovac</h5>
                                            <p>Montaža bravarije.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className = "row">
                                        <div className = "col-md-1">
                                            {iconOne}
                                        </div>
                                        <div className = "col-md-11">
                                        <h5 className="text-white">Stambeni objekat u Mačvanskoj ulici u Beogradu</h5>
                                            <p>Ugradnja aluminijumske stolarije.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className = "row">
                                        <div className = "col-md-1">
                                            {iconOne}
                                        </div>
                                        <div className = "col-md-11">
                                        <h5 className="text-white">Objekat Mil Group u Obrenovcu</h5>
                                            <p>Montaža krovnih panela i izrada metalne kostrukcije.</p>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className = "col-md-6 p-5">
                            <ul className = "p-0">
                                <li>
                                    <div className = "row">
                                        <div className = "col-md-1">
                                            {iconOne}
                                        </div>
                                        <div className = "col-md-11">
                                        <h5 className="text-white">Splav-restoran na Novom Beogradu</h5>
                                            <p>Izrada metalne kostrukcije i postavljanje splava na mesto.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className = "row">
                                        <div className = "col-md-1">
                                            {iconOne}
                                        </div>
                                        <div className = "col-md-11">
                                        <h5 className="text-white">Replika Terazija na Novom Beogradu</h5>
                                            <p>Montaža skele na objektu.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className = "row">
                                        <div className = "col-md-1">
                                            {iconOne}
                                        </div>
                                        <div className = "col-md-11">
                                        <h5 className="text-white">Objekat u Kosjeriću</h5>
                                            <p>Montaža skele na objektu.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className = "row">
                                        <div className = "col-md-1">
                                            {iconOne}
                                        </div>
                                        <div className = "col-md-11">
                                            <h5 className="text-white">Rampa</h5>
                                                <p>Montaža rampe na objektu.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className = "row">
                                        <div className = "col-md-1">
                                            {iconOne}
                                        </div>
                                        <div className = "col-md-11">
                                            <h5 className="text-white">Platforma</h5>
                                            <p>Izrada platforme na objektu.</p>
                                        </div>
                                    </div>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default References;