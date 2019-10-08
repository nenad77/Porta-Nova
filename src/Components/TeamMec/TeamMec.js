import React, {Fragment} from 'react';
import team from '../../img/spasojeTim.jpg';
import './TeamMec.css';
import TeamHero from '../TeamHero/TeamHero';


const TeamMec = () => {

    return (
        <Fragment>
        <TeamHero />
        <div className = "container mt-5 mb-5 pt-5">
            <h1 className = "mb-5 main-title">Upoznajte naš tim</h1>
            <h3 className = "pt-5 pb-5 team-desc">Naše odlike su timski rad, kvalitet, odgovornost i posvećenost.</h3>
            <div className = "row">
                
                <div className = "col-12 col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={team} alt="Card cap" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Spasoje Matijević</h4>
                            <p className = "card-text"><a href="tel:+381 60 5 777 056">+381 60 5 777 062</a><a href="mailto:spasoje.matijevic@portanova.rs">spasoje.matijevic@portanova.rs.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default TeamMec;