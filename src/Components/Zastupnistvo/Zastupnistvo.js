import React from 'react';
import './Zastupnistvo.css';
import ZastupnistvoSlider from '../ZastupnistvoSlider/ZastupnistvoSlider';



const Zastupnistvo = () => {

    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-4 background-zastupnistvo" >
                {/* <img className="w-100" src={slikaLogoa} alt="logo image" /> */}
                </div>
                <div className = "col-8">
                <p>alesuada turpis, at molestie felis mi vulputate dolor. Aliquam vulputate in nibh quis porta. Nulla dui sem, elementum quis elit vel, laoreet aliquam enim. Nulla eu metus massa. Mauris dapibus massa a rhoncus posuere. Donec ac nunc sapien. Etiam at interdum felis. Integer consequat condimentum orci, a dapibus nunc lacinia sed. Praesent hendrerit placerat volutpat. Etiam porta pellentesque justo, vitae interdum mauris. Maecenas facilisis ex ut fringilla tincidunt. Suspendisse finibus faucibus dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

                Nunc tincidunt suscipit tortor. Quisque consequat ultricies lacus. Vestibulum aliquet odio ex, in laoreet felis tincidunt et. Phasellus mi tortor, rhoncus sed nibh ut, iaculis aliquet sem. Cras vitae magna convallis, tempus augue eget, euismod turpis. Aliquam vitae turpis viverra, placerat dui a, pharetra libero. Integer id porta elit, at posuere lectus. Proin non lorem in odio gravida posuere. Fusce eget odio laoreet, molestie felis vel, luctus tortor.

                Curabitur aliquet feugiat lorem, ac convallis sapien venenatis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend arcu purus, id luctus metus cursus a. In id velit id quam faucibus maximus non vitae est. In sit amet eleifend nisi. Cras dignissim in orci in rutrum. Donec rhoncus sapien non scelerisque convallis. Vestibulum at convallis orci, ut suscipit purus. Integer posuere nulla sit amet ultrices egestas. Cras odio lectus, varius eu quam et, pellentesque aliquam quam. Vivamus et maximus ante. Etiam id elit vel lectus fermentum aliquet. Nam a nisl quis est mollis interdum.

                Cras malesuada dignissim ex at auctor. Ut convallis erat eu tortor convallis laoreet. Donec interdum tempor nisl sed mattis. Curabitur id quam massa. Ut ultricies, nisi eget congue fermentum, leo urna faucibus quam, vel aliquet mi risus quis velit. Morbi tristique felis in gravida sodales. Morbi ornare magna at blandit tincidunt. Nullam auctor varius ante, sed volutpat ipsum posuere venenatis. Phasellus ac magna feugiat, aliquam sapien eget, pulvinar massa. Aenean eget sem metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultrices, odio vel aliquam mattis, erat quam efficitur est, eu maximus turpis leo quis arcu. Nulla suscipit elit ut mauris malesuada tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique, est et varius bibendum, magna est vehicula nisi, vel porttitor lorem ligula in arcu.

                Cras tristique libero sed leo bibendum, ac vulputate magna dapibus. Mauris eget mauris non nisl finibus pellentesque et ut nibh. Vivamus blandit blandit mi, sit amet auctor felis tempor vel. Mauris enim felis, interdum ut nulla a, lacinia condimentum mauris. Nulla mattis gravida ligula, id facilisis nisl elementum nec. Aenean odio elit, lobortis vitae malesuada quis, aliquet nec nisl. Vivamus rhoncus lobortis interdum. Quisque non sapien at nulla ornare consectetur.</p>  
                </div>
            </div>
            <div className = "row">
                <ZastupnistvoSlider />
            </div>
        </div>

    )
}

export default Zastupnistvo;