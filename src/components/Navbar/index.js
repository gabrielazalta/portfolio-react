import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{backgroundColor: "#f9ccac"}}>
        <h1 className="header-title px-2 mx-2">gabriela zalta</h1>
        <div className="collapse navbar-collapse justify-content-end p-2 mx-4" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link mx-3" href="/about">about me<span className="sr-only"></span></a>
                <a className="nav-link mx-3" href="/projects">projects</a>
                <a className="nav-link mx-3" href="/contact">contact</a>
                <a className="nav-link mx-3" href="/resume">resume</a>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;