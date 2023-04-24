import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/homee/Homee';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default App;
