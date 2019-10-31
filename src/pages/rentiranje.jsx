import React from 'react';
import NavMec from '../Components/Nav/NavMec'
import Footer from '../Components/Footer/Footer';
import Rentiranje from '../Components/Rentiranje/Rentiranje';

const RentiranjePage = () => {
    return (
        <div className="App">
            <NavMec />
            <Rentiranje />
            <Footer />
        </div>
    )
}

export default RentiranjePage;