import React from 'react'
import './header.css'

function Header() {
  return (
    <header className="header">
        <nav className="nav-container">
            <a href="index.html" className="nav-logo">Ahmed Elbaz</a>
            <div className="nav_menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#home" className="nav_link">
                            Home
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#about" className="nav_link">
                            About
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#Projects" className="nav_link">
                            Projects
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#Experience" className="nav_link">
                            Experience
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#Contact" className="nav_link">
                            Contact
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times nav_close"></i>
            </div>
            <div className="nav_toggle">
            <i className="uil uil-bars"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header