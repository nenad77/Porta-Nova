import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import entryPage from '../../img/entry-page.jpg';
import './EntryPage.css';


const EntryPage = () => {

    return (

        <div className = "container-fluid p-0">
            <div className = "entry-image d-flex align-items-center justify-content-center text-center" style={{backgroundImage: `url(${entryPage})`}}>
                <div className = "container entry-page">
                    <img className = "logo-entry" src = { Logo } alt = "logo" />
                    <div className = "row">
                        <div className = "col-6 text-right">
                            <Link className = "btn btn-warning entry-link px-4 py-3 mt-5" to = "/indexHydro" target="_parent">Hidrotehnika</Link>
                        </div>
                        <div className = "col-6 text-left">
                            <Link className = "btn btn-warning entry-link px-4 py-3 mt-5" to = "/indexMec" target="_parent">Mašinstvo</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EntryPage;