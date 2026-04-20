import React, { useEffect, useRef } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { headerData } from '../../data/headerData';
import cheeseImg from '../About/cheese.png';
import './Landing.css';

function Landing() {
    const leftRef  = useRef(null);
    const rightRef = useRef(null);

    /* Scroll-reveal on mount */
    useEffect(() => {
        const els = [leftRef.current, rightRef.current];
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    observer.unobserve(e.target);
                }
            }),
            { threshold: 0.15 }
        );
        els.forEach(el => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className="landing" aria-label="Sección principal">
            <div className="landing__grid">

                {/* ── Left: Text panel ── */}
                <div className="landing__text reveal" ref={leftRef}>
                    <p className="section-label landing__label">{headerData.tagline}</p>

                    <h1 className="landing__headline">
                        El Mejor<br />
                        <em>Sabor</em> de<br />
                        San José
                    </h1>

                    <p className="landing__body">{headerData.description}</p>

                    <div className="landing__actions">
                        <NavLink
                            to="/#contacto"
                            smooth
                            duration={600}
                            className="btn btn--primary"
                            aria-label="Ir a sección de contacto"
                        >
                            Contáctanos
                        </NavLink>
                        <NavLink
                            to="/#about"
                            smooth
                            duration={600}
                            className="btn btn--ghost"
                            aria-label="Conocer más sobre nosotros"
                        >
                            Nuestra historia →
                        </NavLink>
                    </div>

                    {/* Trust badges */}
                    <div className="landing__badges">
                        <span className="landing__badge">⭐ 5.0 Google</span>
                        <span className="landing__badge">🥛 100% Natural</span>
                        <span className="landing__badge">📅 Desde 2019</span>
                    </div>
                </div>

                {/* ── Right: Photo panel ── */}
                <div className="landing__photo reveal" ref={rightRef} aria-hidden="true">
                    <div className="landing__photo-frame">
                        <img
                            src={cheeseImg}
                            alt="Queso fresco artesanal Cremería Limas"
                            className="landing__photo-img"
                            loading="eager"
                        />
                        {/* Floating badge */}
                        <div className="landing__photo-badge">
                            <span className="landing__photo-badge-number">2019</span>
                            <span className="landing__photo-badge-label">Fundados</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Landing;
