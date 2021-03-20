import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
