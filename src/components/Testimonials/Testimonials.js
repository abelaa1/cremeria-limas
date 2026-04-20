import React, { useState, useEffect, useRef } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import './Testimonials.css';

function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const intervalRef = useRef(null);
    const sectionRef = useRef(null);
    const total = testimonialsData.length;

    const go = (dir) => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setCurrent(c => (c + dir + total) % total);
            setAnimating(false);
        }, 250);
        resetInterval();
    };

    const resetInterval = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => go(1), 5000);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrent(c => (c + 1) % total);
        }, 5000);
        return () => clearInterval(intervalRef.current);
        // eslint-disable-next-line
    }, []);

    /* Reveal */
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.querySelectorAll('.reveal').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 120);
                    });
                    observer.unobserve(e.target);
                }
            }),
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    if (total === 0) return null;

    const t = testimonialsData[current];

    return (
        <section className="testimonials" ref={sectionRef} aria-labelledby="testimonials-heading">
            <div className="section-container">
                <div className="testimonials__header reveal">
                    <p className="section-label">Lo que dicen nuestros clientes</p>
                    <h2 id="testimonials-heading" className="testimonials__title">Reseñas</h2>
                </div>

                <div className="testimonials__card reveal" aria-live="polite" aria-label={`Reseña de ${t.name}`}>
                    <FaQuoteLeft className="testimonials__quote-icon" aria-hidden="true" />

                    {/* Stars */}
                    <div className="testimonials__stars" aria-label="5 estrellas">
                        {[...Array(5)].map((_, i) => <FaStar key={i} aria-hidden="true" />)}
                    </div>

                    <p className={`testimonials__text ${animating ? 'testimonials__text--fade' : ''}`}>
                        {t.text}
                    </p>

                    <div className="testimonials__author">
                        <div className="testimonials__avatar" aria-hidden="true">
                            {t.name.charAt(0)}
                        </div>
                        <div>
                            <p className="testimonials__name">{t.name}</p>
                            <p className="testimonials__role">{t.title}</p>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="testimonials__controls">
                    <button
                        className="testimonials__btn"
                        onClick={() => go(-1)}
                        aria-label="Reseña anterior"
                    >
                        <IoChevronBack />
                    </button>

                    {/* Dots */}
                    <div className="testimonials__dots" role="tablist" aria-label="Reseñas">
                        {testimonialsData.map((_, i) => (
                            <button
                                key={i}
                                className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                                onClick={() => { setCurrent(i); resetInterval(); }}
                                aria-label={`Ver reseña ${i + 1}`}
                                aria-selected={i === current}
                                role="tab"
                            />
                        ))}
                    </div>

                    <button
                        className="testimonials__btn"
                        onClick={() => go(1)}
                        aria-label="Siguiente reseña"
                    >
                        <IoChevronForward />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
