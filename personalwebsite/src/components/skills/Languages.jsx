import React from 'react'

const Proskills = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Languages</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__dataa">
                <i class="uil uil-html5"></i>
                <div>
                    <h3 className="skills__name">HTML</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class="uil uil-css3-simple"></i>
                <div>
                    <h3 className="skills__name">CSS</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class='bx bxl-javascript' ></i>
                <div>
                    <h3 className="skills__name">JavaScript</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class='bx bxl-python' ></i>
                <div>
                    <h3 className="skills__name">Python</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class='bx bxl-java' ></i>
                <div>
                    <h3 className="skills__name">Java</h3>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Proskills