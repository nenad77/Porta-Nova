import React, {Fragment} from 'react';
import RentHero from '../RentHero/RentHero';

import imgone from '../../img/renta/1.jpg';
import imgtwo from '../../img/renta/2.jpg';
import imgthree from '../../img/renta/3.jpg';
import imgfour from '../../img/renta/4.jpg';



const Rentiranje = () => {

    return (
        <Fragment>
        <RentHero />
        <div className = "container">
            
            <h1 className = "my-5 main-title">Rentiranje mašina</h1>

            <p>Throughput offline this discussion and what are the expectations how much bandwidth do you have eat our own dog food blue sky and baseline the procedure and samepage your department. Anti-pattern upsell can you send me an invite? nor quick-win or tribal knowledge quick-win and re-inventing the wheel. Dog and pony show post launch can we take this offline, nor shotgun approach we need more paper. What the high performance keywords thought shower, for product market fit first-order optimal strategies so build on a culture of contribution and inclusion. Fast track pipeline.</p>

            <div className = "row">
                <div className = "col-xs-12 col-md-6 pt-4">
                    <img className = "w-100" src = {imgone} alt = "rentiranje" />
                </div>

                <div className = "col-xs-12 col-md-6 pt-4">
                    <img className = "w-100" src = {imgtwo} alt = "rentiranje" />
                </div>
            </div>
            <div className = "row pb-5">
                <div className = "col-xs-12 col-md-6 pt-4">
                    <img className = "w-100" src = {imgthree} alt = "rentiranje" />
                </div>
                <div className = "col-xs-12 col-md-6 pt-4">
                    <img className = "w-100" src = {imgfour} alt = "rentiranje" />
                </div>
            </div>
 
        </div>
        </Fragment>
    )
}

export default Rentiranje;