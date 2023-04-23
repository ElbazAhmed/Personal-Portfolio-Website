import React from 'react';
import './home.css';
import Me from '../../assets/Me.jpg';
import scrollDown from './scrollDown';
import HeaderSocial from './HeaderSocial';

const Home = () => {
  return (
    <section className="home container" id="home">
        <div className="intro">
            <div className="home__img"></div>
            <h1 className="home__name">Ahmed Elbaz</h1>
            <span className="home__education">I'm a Software Engineering Student</span>
            <HeaderSocial/>
            <a href="#contact" className="btn">Contact Me<i class="uil uil-message "></i></a>
            <scrollDown/>
        </div>
    </section>
  )
}

export default Home