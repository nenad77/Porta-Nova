import React from 'react';
import Logo from '../../img/logo.png';
import './Nav.css';
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" id = "navbar-porta">
            <a className="navbar-brand" href="/"><img className = "logo" src = { Logo } alt = "logo" /></a>

            <button className="navbar-toggler collapsed border-0 outline-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>				
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav text-center text-uppercase">
                    <li className="nav-item">
                        <NavLink  className="nav-link" to="/indexHydro">Početna<span className="sr-only">(current)</span></NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="/indexHydro#references">Reference</a>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName = "active" className = "nav-link" to = "/team">Naš tim</NavLink>
                    </li>
                    <li className="nav-item">
                        <Link className = "btn btn-warning nav-link-button" to = "/indexMec" role = "button" target="_parent">Mašinstvo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;