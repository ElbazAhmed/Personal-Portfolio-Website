import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/homee/Homee';
import About from './components/about/About';


function App() {
  return (
    <div>
      <Sidebar />
      <Home />
      <About />
    </div>
  );
}

export default App;
