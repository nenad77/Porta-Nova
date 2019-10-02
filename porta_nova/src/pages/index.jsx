import React from 'react';
import Nav from '../Components/Nav/Nav'
import Carousel from '../Components/Carousel/Carousel';
import Services from '../Components/Services/Services';
import References from '../Components/References/References';
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';
import Map from '../Components/Map/Map';


const MainPage = () => {
    return (
        <div className="App">
            <Nav />
            <Carousel />
            <About />
            <References />
            <Services />
            <Map />
            <Footer />
        </div>
    )
}

export default MainPage;