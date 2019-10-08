import React from 'react';
import Iframe from 'react-iframe';


const Map = () => {

    return (

        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.339419712734!2d20.473702915749353!3d44.75349208860303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a710580655a39%3A0x4dc8b9964e1bcce0!2z0JzQuNC70L7RmNCwINCf0LDQstC70L7QstC40ZvQsCAxNWEsINCR0LXQvtCz0YDQsNC0IDExMDAw!5e0!3m2!1ssr!2srs!4v1569938722394!5m2!1ssr!2srs"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        frameBorder="0"/>

    )
}

export default Map;