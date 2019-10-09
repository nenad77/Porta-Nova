import React from 'react';
import NavMec from '../Components/Nav/NavMec'
import CarouselMec from '../Components/CarouselMec/CarouselMec';
import ServicesMec from '../Components/ServicesMec/ServicesMec';
import ReferencesMec from '../Components/ReferencesMec/ReferencesMec';
import FooterMec from '../Components/FooterMec/FooterMec';
import AboutMec from '../Components/AboutMec/AboutMec';
import Map from '../Components/Map/Map';



const MainPageMec = () => {
    return (
        <div className="App">
            <NavMec />
            <CarouselMec />
            <ServicesMec />
            <ReferencesMec />
            <AboutMec />
            <Map />
            <FooterMec />
        </div>
    )
}

export default MainPageMec;