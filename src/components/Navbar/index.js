import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{backgroundColor: "#f9ccac"}}>
        <a className="navbar-brand px-2 mx-2"><h1>gabriela zalta</h1></a>
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