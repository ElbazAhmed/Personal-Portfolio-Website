import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Projects from './components/Projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
