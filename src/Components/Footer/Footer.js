import React from 'react';
import './Footer.css';


const Footer = () => {

    return (

        <footer className="page-footer font-small bg-dark text-white">
            <div className = "container pt-3 text-center m-auto">
                <div className = "row text-center">
                    <div className = "col-6 text-left text-footer">
                        <p>Miloja Pavlovića 15a, 11000 Beograd, Voždovac</p>
                        <p>Telefon: <a href = "tel:+381112280288">+381 11 22 80 288</a></p>
                    </div>
                    <div className = "col-6 text-right footer-copyright text-muted">
                        <p>Porta Nova &copy; 2019 Copyright</p>
                        <p>All rights reserved.</p>
                    </div>
                </div>
            </div>

            {/* <div className="footer-copyright text-center pt-3 pb-5"></div> */}

        </footer>

    )
}

export default Footer;