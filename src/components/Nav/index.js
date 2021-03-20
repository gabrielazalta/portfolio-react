import React, { useState } from 'react';
import Home from '../Home';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function NavTabs(props) {
  const tabs = ['Home', 'About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Nav() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;

      case 'About':
        return <About />;

      case 'Portfolio':
        return <Portfolio />;

      case 'Contact':
        return <Contact />;

      case 'Resume':
        return <Resume />;

      default:
        return <Home />;
    }
  };

  return (
    <div className="collapse navbar-collapse justify-content-end p-2 mx-4" id="navbarNavAltMarkup">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="navbar-nav">
        <div className="nav-link mx-3">{renderPage()}</div>
      </div>
    </div>
  );
}

export default Nav;
