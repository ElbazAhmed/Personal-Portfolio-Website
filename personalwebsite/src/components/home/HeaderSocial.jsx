import React from 'react'

const HeaderSocial = () => {
  return (
    <div className="home__socails flex">
        <a href="https://github.com/ElbazAhmed" className="home__social-link" target="_blank">
        <i class="uil uil-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ahmed-elbaz-1b2b0620a/" className="home__social-link" target="_blank">
        <i class="uil uil-linkedin"></i>
        </a>
        <a href="#" className="home__social-link" target="_blank">
        <i class="uil uil-twitter"></i>
        </a>
        <a href="#" className="home__social-link" target="_blank">
        <i class='bx bxl-stack-overflow'></i>
        </a>
    </div>
  )
}

export default HeaderSocial