import React, { useState } from 'react'
import './projects.css'
import Menu from './Menu'

const Projects = () => {
    const[items, setItems]=useState(Menu);
  return (
    <section className="work container section" id='work'>
        <h2 className="section__title">Projects</h2>
        <div className="work__filters">
            <span className="work__item">All</span>
            <span className="work__item">Web Development</span>
            <span className="work__item">UX/UI Design</span>
            <span className="work__item">Programing</span>
        </div>
        <div className="work__container grid">
            {items.map((ele)=>{
                const{id,image,title,category}=ele;
                return(
                    <div className="work__card" key={id}>
                        <div className="work__thumbnail">
                            <img src={image} alt="" className="work__img" />
                            <div className="work__mask"></div>
                        </div>
                        <span className="work__category">{category}</span>
                        <h3 className="work__title">{title}</h3>
                        <a href="#" className="work__button"></a>
                        <i class='bx bx-link-external'></i>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Projects