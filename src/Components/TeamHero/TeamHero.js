import React from 'react';
import teamOne from '../../img/tim.jpg';
import './TeamHero.css';


const TeamHero = () => {

    return (
        <div className = "conteiner-fluid team-hero">
               <img className="w-100" src={teamOne} alt="Team" />
        </div>
    )
}

export default TeamHero;