import React, {Fragment} from 'react';
import teamOne from '../../img/ivanaTim.jpg';
import teamTwo from '../../img/mladenTim.jpg';
import teamThree from '../../img/nikolaTim.jpg';
import './Team.css';


const Team = () => {

    return (
        <Fragment>
        <div className = "container mt-5 mb-5 pt-5">
            <h1 className = "mb-5 main-title">Upoznajte naš tim</h1>
            <h3 className = "pt-5 pb-5 team-desc">Naše odlike su timski rad, kvalitet, odgovornost i posvećenost.</h3>
            <div className = "row">
                <div className = "col-12 col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={teamThree} alt="Card cap" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Tehnički direktor:</h4>
                            <h4 className="card-text">Nikola Bajčetić <span>d.i.g.</span></h4>
                            <p className = "card-text"><a href="tel:+381 60 5 777 056">+381 60 5 777 056</a><a href="mailto:nikola.bajcetic@portanova.rs">nikola.bajcetic@portanova.rs</a></p>
                        </div>
                    </div>
                </div>
                <div className = "col-12 col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={teamTwo} alt="Card cap" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Šef operative:</h4>
                            <h4 className="card-text">Mladen Selaković <span>d.i.g.</span></h4>
                            <p className = "card-text"><a href="tel:+381 60 5 777 096">+381 60 5 777 096</a><a href="mailto:mladen.selakovic@portanova.rs">mladen.selakovic@portanova.rs</a></p>
                        </div>
                    </div>
                </div>
                <div className = "col-12 col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={teamOne} alt="Card cap" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Šef pripreme:</h4>
                            <h4 className="card-text">Ivana Bajčetić</h4>
                            <p className = "card-text"><a href="tel:+381 60 5 777 189">+381 60 5 777 189</a><a href="mailto:ivana.bajcetic@portanova.rs">ivana.bajcetic@portanova.rs</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Team;