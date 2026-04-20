import React, { useState, useEffect } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { headerData } from '../../data/headerData';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    /* Close menu on route change / outside click */
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* Prevent body scroll when mobile menu is open */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
            <div className="navbar__inner">
                {/* Logo */}
                <NavLink to="/" onClick={closeMenu} className="navbar__logo" aria-label="Cremería Limas - Inicio">
                    <img src={headerData.image} alt="Cremería Limas logo" width="90" height="auto" />
                </NavLink>

                {/* Desktop nav links */}
                <nav className="navbar__links" aria-label="Navegación principal">
                    <NavLink to="/#about"    smooth duration={600} className="navbar__link" onClick={closeMenu}>Nosotros</NavLink>
                    <NavLink to="/#galeria"  smooth duration={600} className="navbar__link" onClick={closeMenu}>Galería</NavLink>
                    <NavLink to="/#contacto" smooth duration={600} className="navbar__link navbar__link--cta" onClick={closeMenu}>Contacto</NavLink>
                </nav>

                {/* Hamburger (mobile only) */}
                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile drawer */}
            <div
                id="mobile-nav"
                className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}
                aria-hidden={!menuOpen}
            >
                <nav aria-label="Navegación móvil">
                    <NavLink to="/"          smooth duration={600} className="navbar__drawer-link" onClick={closeMenu}>Inicio</NavLink>
                    <NavLink to="/#about"    smooth duration={600} className="navbar__drawer-link" onClick={closeMenu}>Nosotros</NavLink>
                    <NavLink to="/#galeria"  smooth duration={600} className="navbar__drawer-link" onClick={closeMenu}>Galería</NavLink>
                    <NavLink to="/#contacto" smooth duration={600} className="navbar__drawer-link navbar__drawer-link--cta" onClick={closeMenu}>Contacto</NavLink>
                </nav>
            </div>

            {/* Backdrop */}
            {menuOpen && (
                <div className="navbar__backdrop" onClick={closeMenu} aria-hidden="true" />
            )}
        </header>
    );
}

export default Navbar;
