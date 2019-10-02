import React from 'react';
import team from '../../img/team.jpg';
import './Team.css';


const Team = () => {

    return (
        <div className = "container mt-5 mb-5 pt-5">
            <h1 className = "mb-5 main-title">Upoznajte naš tim</h1>
            <h3 className = "pt-5 pb-5">Naše odlike su timski rad, kvalitet, odgovornost i posvećenost.</h3>
            <div className = "row">
                <div className = "col-12 col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={team} alt="Card cap" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Nikola Bajčetić, d.i.g.</h4>
                            <p className = "card-text">+381 60 5 777 056, nikola.bajcetic@portanova.rs</p>
                        </div>
                    </div>
                </div>
                <div className = "col-12 col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={team} alt="Card cap" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Mladen Selaković d.i.g.</h4>
                            <p className = "card-text">+381 60 5 777 096, mladen.selakovic@portanova.rs</p>
                        </div>
                    </div>
                </div>
                <div className = "col-12 col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={team} alt="Card cap" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Ivana Bajčetić</h4>
                            <p className = "card-text">+381 60 5 777 189, ivana.bajcetic@portanova.rs</p>
                        </div>
                    </div>
                </div>
                <div className = "col-12 col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={team} alt="Card cap" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Spasoje Matijević</h4>
                            <p className = "card-text">+381 60 5 777 062, spasoje.matijevic@portanova.rs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;