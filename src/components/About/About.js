import React, { useContext } from 'react';
import logo1 from './cheese.jpg';
import logo2 from './loc.jpg';
import logo3 from './machine.jpg';
import logo4 from './morecheese.jpg';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import ImageSlider from "./SlideShow";


function About() {
    const slides = [
        { url: logo1, title: "beach" },
        { url: logo2, title: "boat" },
        { url: logo3, title: "forest" },
        { url: logo4, title: "italy" },
      ];
      const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };

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
                <div></div>
                <div style={containerStyles}>
                    <ImageSlider slides={slides} />
                </div>
        </div>

    )
}

export default About
