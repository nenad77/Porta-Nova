import React from 'react';
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const iconOne = <FontAwesomeIcon icon={faTools} />

const UnderConstruction = () => {
    return (
        <div className="App">
            <Nav />
            <div className = "text-center under-construction">
                <div className = "under-construction-content">
                    <div className = "under-icon">{iconOne}</div>
                    <h1 className = "main-title">Under construction</h1>
                </div>
            </div> 
            <Footer />
        </div>
    )
}

export default UnderConstruction;