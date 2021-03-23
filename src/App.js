import React, {useState} from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch(currentPage) {
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />
    }
  }

  return (
    <div >
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}></Navbar>
      <main>
        {renderPage(currentPage)}
      </main>
       <Footer />
    </div>
  );
}

export default App;
