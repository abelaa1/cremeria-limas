import React, { useEffect, useRef } from 'react';
import { aboutData } from '../../data/aboutData';
import cheeseImg from './cheese.png';
import moreCheeseImg from './morecheese.jpg';
import machineImg from './machine.jpg';
import locImg from './loc.jpg';
import './About.css';

function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.querySelectorAll('.reveal').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 100);
                    });
                    observer.unobserve(e.target);
                }
            }),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about" id="about" ref={sectionRef} aria-labelledby="about-heading">
            <div className="section-container">

                {/* Header */}
                <div className="about__header reveal">
                    <p className="section-label">Nuestra historia</p>
                    <h2 id="about-heading" className="about__title">
                        Hecho con Amor,<br />
                        <em>Desde 2019</em>
                    </h2>
                </div>

                {/* Story + primary image */}
                <div className="about__body">
                    <div className="about__text reveal">
                        <p className="about__paragraph">{aboutData.description1}</p>
                        <p className="about__paragraph">{aboutData.description2}</p>

                        {/* Stat pills */}
                        <div className="about__stats">
                            <div className="about__stat">
                                <span className="about__stat-num">5+</span>
                                <span className="about__stat-label">Años de experiencia</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-num">100%</span>
                                <span className="about__stat-label">Productos naturales</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-num">⭐ 5.0</span>
                                <span className="about__stat-label">Calificación Google</span>
                            </div>
                        </div>
                    </div>

                    <div className="about__main-img reveal">
                        <img src={locImg} alt="Local de Cremería Limas en San José de Gracia" />
                        <div className="about__img-caption">San José de Gracia, Michoacán</div>
                    </div>
                </div>

                {/* Photo Grid */}
                <div className="about__grid reveal" id="galeria" aria-label="Galería de imágenes">
                    <div className="about__grid-item about__grid-item--tall">
                        <img src={moreCheeseImg} alt="Quesos madurados en estantes de madera" loading="lazy" />
                        <div className="about__grid-overlay">Cámara de maduración</div>
                    </div>
                    <div className="about__grid-item">
                        <img src={cheeseImg} alt="Queso fresco recién cortado en mesa de acero" loading="lazy" />
                        <div className="about__grid-overlay">Queso fresco</div>
                    </div>
                    <div className="about__grid-item">
                        <img src={machineImg} alt="Máquina de Cremería Limas" loading="lazy" />
                        <div className="about__grid-overlay">Nuestro equipo</div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
