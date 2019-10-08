import React from 'react';

const date = new Date();

const FooterMac = () => {

    return (

        <footer className="page-footer font-small bg-dark text-white">
            <div className = "container pt-3 text-center m-auto">
                <div className = "row text-center">
                    <div className = "col-6 text-left text-footer">
                        <p>Miloja Pavlovića 15a, 11000 Beograd, Voždovac</p>
                        <p>Telefon: <a href = "tel:+381112664999">+381 11 26 64 999</a></p>
                    </div>
                    <div className = "col-6 text-right footer-copyright text-muted">
                        <p>Porta Nova &copy; {date.getFullYear()} Copyright</p>
                        <p>All rights reserved.</p>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default FooterMac;