import React from 'react';
import NavMec from '../Components/Nav/NavMec'
import Footer from '../Components/Footer/Footer';
import Zastupnistvo from '../Components/Zastupnistvo/Zastupnistvo';

const ZastupnistvoPage = () => {
    return (
        <div className="App">
            <NavMec />
            <Zastupnistvo />
            <Footer />
        </div>
    )
}

export default ZastupnistvoPage;