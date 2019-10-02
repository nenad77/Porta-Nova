import React from 'react';
import Logo from '../../img/logo.png';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><img className = "logo" src = { Logo } alt = "logo" /></a>

            <button className="navbar-toggler collapsed border-0 outline-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>				
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav text-center text-uppercase">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="/">References</a>
                    </li>
                    <li className="nav-item">
                        <Link className = "nav-link" to = "/team">Team</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Language</a>
                    </li>
                    <li className="nav-item">
                        <Link className = "btn btn-warning" to = "/underConstruction" role = "button">Under</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;