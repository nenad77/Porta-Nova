import React from 'react';


const ZastupnistvoSlider = () => {

    return (
        <div className = "container">
            <div className = "row blog">
            <div className="col-md-12">
                    <div id="blogCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#blogCarousel" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-3">
                                        <a href="/">
                                            <img src="http://placehold.it/250x250" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="/">
                                            <img src="http://placehold.it/250x250" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="/">
                                            <img src="http://placehold.it/250x250" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="/">
                                            <img src="http://placehold.it/250x250" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-3">
                                        <a href="/">
                                            <img src="http://placehold.it/250x250" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="/">
                                            <img src="http://placehold.it/250x250" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="/">
                                            <img src="http://placehold.it/250x250" alt="" />
                                        </a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="/">
                                            <img src="http://placehold.it/250x250" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ZastupnistvoSlider;