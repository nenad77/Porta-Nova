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
                <div className = "col-xs-12 col-md-8 references-background d-flex justify-content-center align-items-center">
                    <div className = "reference-content p-5">
                        <h2 className = "reference-title text-uppercase text-white">Reference</h2>
                        <div className = "row">
                            <div className = "col-md-6">
                                <ul className = "p-0">
                                    <li>
                                        <div className = "row">
                                            <div className = "col-md-1">
                                                {iconOne}
                                            </div>
                                            <div className = "col-md-11">
                                                <h5 className="text-white m-0">Robert Bosch doo</h5>
                                                <p>Tekuće održavanje sistema za farbanje, preseljenje linija za proizovodnju, isporuka delova i opreme.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "row">
                                            <div className = "col-md-1">
                                                {iconOne}
                                            </div>
                                            <div className = "col-md-11">
                                                <h5 className="text-white m-0">ZF Serbia doo</h5>
                                                <p>Montaža sistema za tretman vode i isporuka rezernih delova.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "row">
                                            <div className = "col-md-1">
                                                {iconOne}
                                            </div>
                                            <div className = "col-md-11">
                                                <h5 className="text-white m-0">Petruzalek doo</h5>
                                                <p>Puštanje u rad i servisiranje mašina za pakovanje.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "row">
                                            <div className = "col-md-1">
                                                {iconOne}
                                            </div>
                                            <div className = "col-md-11">
                                                <h5 className="text-white m-0">IS Industrial Systems doo (Gunja - Hrvatska)</h5>
                                                <p>Montaža transportera i sistema za farbanja.</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className = "col-md-6">
                                <ul className = "p-0">
                                    <li>
                                        <div className = "row">
                                            <div className = "col-md-1">
                                                {iconOne}
                                            </div>
                                            <div className = "col-md-11">
                                                <h5 className="text-white m-0">SMEG (Guastalla - Italija)</h5>
                                                <p>Montaža unutrašnjeg transportnog sistema (pokretnih traka).</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "row">
                                            <div className = "col-md-1">
                                                {iconOne}
                                            </div>
                                            <div className = "col-md-11">
                                                <h5 className="text-white m-0">Proma Automotive  (Pozzilli - Italija)</h5>
                                                <p>Montaža unutrašnjeg transportnog sistema.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "row">
                                            <div className = "col-md-1">
                                                {iconOne}
                                            </div>
                                            <div className = "col-md-11">
                                                <h5 className="text-white m-0"> Honda Italia (Atessa - Italija)</h5>
                                                <p>Montaža unutrašnjeg transportnog sistema.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "row">
                                            <div className = "col-md-1">
                                                {iconOne}
                                            </div>
                                            <div className = "col-md-11">
                                                <h5 className="text-white m-0">OMR Automotive (Rezzato - Italija)</h5>
                                                <p>Modifikacija komore za pranje delova za automobile.</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className = "row">
                                            <div className = "col-md-1">
                                                {iconOne}
                                            </div>
                                            <div className = "col-md-11">
                                                <h5 className="text-white m-0">Tecnofirma S.p.A. (Monza - Italija)</h5>
                                                <p>Montaža sistema za farbanje i komora za pranje delova u autoindustriji.</p>
                                            </div>
                                        </div>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default References;