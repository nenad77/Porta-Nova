import React, {Fragment} from 'react';
import team from '../../img/spasojeTim.jpg';
import angelo from '../../img/angelo.png';
import darko from '../../img/darko.jpg';
import nenad from '../../img/nenad.jpg';
import zlatko from '../../img/zlatko.jpg';
import './TeamMec.css';



const TeamMec = () => {

    return (
        <Fragment>
        <div className = "container mt-5 mb-5 pt-5">
            <h1 className = "mb-5 main-title">Upoznajte naš tim</h1>
            <h3 className = "pt-5 pb-5 team-desc">Naše odlike su timski rad, kvalitet, odgovornost i posvećenost.</h3>
            <div className = "row">
                
                <div className = "col-12 col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={team} alt="Card cap" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Generalni direktor:</h4>
                            <h4 className="card-text">Spasoje Matijević</h4>
                            <p className = "card-text"><a href="tel:+381605777062">+381 60 5 777 062</a><a href="mailto:spasoje.matijevic@portanova.rs">spasoje.matijevic@portanova.rs.</a></p>
                        </div>
                    </div>
                </div>

                <div className = "col-12 col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={darko} alt="darko" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Referent uvoza i administracije:</h4>
                            <h4 className="card-text">Darko Stojanović </h4>
                            <p className = "card-text"><a href="tel:+381605777095">+381 60 5777 095</a></p>                     
                        </div>
                    </div>
                </div>

                <div className = "col-12 col-md-3">
                    <div className="card">
                    <img className="card-img-top" src={nenad} alt="nenad" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Stručni tehničar:</h4>
                            <h4 className="card-text">Nenad Novaković</h4>   
                            <p className = "card-text"><a href="tel:+381605777098">+381 60 5777 098</a></p>                         
                        </div>
                    </div>
                </div>
                
                <div className = "col-12 col-md-3">
                    <div className="card">
                    <img className="card-img-top" src={zlatko} alt="zlatko" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Stručni tehničar/električar:</h4>
                            <h4 className="card-text">Zlatko Arnaut</h4>  
                            <p className = "card-text"><a href="tel:+ 381605777285">+ 381 60 5777 285</a></p>        
                        </div>
                    </div>
                </div>

                <div className = "col-12 col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={angelo} alt="Card cap" />
                        <div className="card-body card-body-team">
                            <h4 className="card-text">Stručni saradnik:</h4>
                            <h4 className="card-text">Angelo Pio Carioni</h4>    
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </Fragment>
    )
}

export default TeamMec;