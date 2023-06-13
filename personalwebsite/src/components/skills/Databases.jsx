import React from 'react'
import mongo from '../../assets/logos/mongo.svg'
import mysql from '../../assets/logos/mysql.svg'


const Databases = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Databases</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__dataa">
                <i class="uil"><img src={mongo} alt="mongo" /></i>
                <div>
                    <h3 className="skills__name">MongoDB</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class="uil"><img src={mysql} alt="mysql" /></i>
                <div>
                    <h3 className="skills__name">MySql</h3>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Databases