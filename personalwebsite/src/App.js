import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/homee/Homee';
import About from './components/about/About';
import Services from './components/services/Services';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services />
      </main>
    </>
  );
}

export default App;
