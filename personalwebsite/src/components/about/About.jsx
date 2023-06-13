import React from 'react'
import './about.css'
import Me from '../../assets/Me.jpeg'
import CV from '../../assets/CV.pdf'

const About = () => {
  return (
    <section className="about container section" id="about">
        <h2 className="section__title">About Me</h2>
        <div className="about__container grid">
            <img src={Me} alt="" className="about__img" />
            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">I'm Ahmed Elbaz, Software engineering student at INPT (National Institute of Posts and Telecommunications). I have a passion for computer programming and information technology.</p>
                    <a download='CV.pdf' href={CV} className="btn">Download CV <i class="uil uil-file-download-alt"></i></a>
                </div>
                <div className="about__skills grid">
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">Web Development</h3>
                            <span className="skills__number ">70%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage development"></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">UI/UX Design</h3>
                            <span className="skills__number">60%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage ui__design"></span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__titles">
                            <h3 className="skills__name">JAVA Developpment</h3>
                            <span className="skills__number">50%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage java__dev"></span>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    </section>
  )
}

export default About