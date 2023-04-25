import React, { useState } from 'react';
import './sidebar.css'


const Sidebar = () => {
    const[toggle, showMenu]=useState(false);
  return (
    <>
    <aside className={toggle ? "aside show-menu" :"aside"}>
        <a href="index.html" className="nav__logo">AE.</a>
        <nav className="nav">
            <div className="nav_menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                        <i class="uil uil-home"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                        <i class="uil uil-user-check"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#projects" className="nav__link">
                        <i class="uil uil-bag-alt"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#experience" className="nav__link">
                        <i class="uil uil-graduation-cap"></i>
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                        <i class="uil uil-comment"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="nav__footer">
            <span className="copyright">&copy; 2023 - 2024.</span>
        </div>

    </aside>
    <div className={toggle ? "nav__toggle nav__toggle-open" :"nav__toggle"} onClick={()=>showMenu(!toggle)}>
        <i class="uil uil-bars"></i>
    </div>
    </>
  )
}

export default Sidebar