import React, { useContext } from 'react';
import logo1 from './cheese.jpg';
import logo2 from './loc.jpg';
import logo3 from './machine.jpg';
import logo4 from './morecheese.jpg';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image}
                        alt="" 
                    />
                </div>
            </div>
            <img style={{ width: 500, height: 600, display: 'flex',justifyContent: 'center' }} src={logo1} alt="" />
        </div>

    )
}

export default About
