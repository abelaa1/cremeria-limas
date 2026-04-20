import React, { useState, useEffect } from 'react';
import { IoArrowUpSharp } from 'react-icons/io5';
import './BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Volver al inicio"
            tabIndex={visible ? 0 : -1}
        >
            <IoArrowUpSharp aria-hidden="true" />
        </button>
    );
}

export default BackToTop;
