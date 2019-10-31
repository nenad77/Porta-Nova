import React from 'react';
import rent from '../../img/rentiranje.jpg';
import './RentHero.css';


const RentHero = () => {

    return (
        <div className = "conteiner-fluid team-hero">
               <img className="w-100" src={rent} alt="Team" />
        </div>
    )
}

export default RentHero;