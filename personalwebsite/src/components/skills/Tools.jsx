import React from 'react'

const Tools = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Tools</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__dataa">
                <i class='bx bxl-figma' ></i>
                <div>
                    <h3 className="skills__name">Figma</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class="uil uil-award"></i>
                <div>
                    <h3 className="skills__name">Postman</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class='bx bxl-git' ></i>
                <div>
                    <h3 className="skills__name">Git</h3>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tools