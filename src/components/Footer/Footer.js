import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { headerData } from '../../data/headerData';
import { contactsData } from '../../data/contactsData';
import { IoLogoWhatsapp } from 'react-icons/io';
import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" role="contentinfo">
            <div className="section-container">
                <div className="footer__inner">

                    {/* Brand */}
                    <div className="footer__brand">
                        <NavLink to="/" aria-label="Cremería Limas - Inicio">
                            <img
                                src={headerData.image}
                                alt="Cremería Limas logo"
                                className="footer__logo"
                                width="80"
                            />
                        </NavLink>
                        <p className="footer__tagline">{headerData.tagline}</p>
                        <p className="footer__address">{contactsData.address}</p>
                    </div>

                    {/* Links */}
                    <nav className="footer__nav" aria-label="Navegación del pie de página">
                        <NavLink to="/"          smooth duration={600} className="footer__link">Inicio</NavLink>
                        <NavLink to="/#about"    smooth duration={600} className="footer__link">Nosotros</NavLink>
                        <NavLink to="/#galeria"  smooth duration={600} className="footer__link">Galería</NavLink>
                        <NavLink to="/#contacto" smooth duration={600} className="footer__link">Contacto</NavLink>
                    </nav>

                    {/* Contact */}
                    <div className="footer__contact">
                        <p className="footer__contact-label">¿Tienes preguntas?</p>
                        <a href={`tel:${contactsData.phoneRaw}`} className="footer__phone" aria-label={`Llamar al ${contactsData.phone}`}>
                            {contactsData.phone}
                        </a>
                        <a
                            href={contactsData.whatsapp}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="footer__whatsapp"
                            aria-label="Contactar por WhatsApp"
                        >
                            <IoLogoWhatsapp aria-hidden="true" />
                            WhatsApp
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer__bottom">
                    <p>© {year} Cremería Limas. Todos los derechos reservados.</p>
                    <p className="footer__bottom-tagline">San José de Gracia, Michoacán 🇲🇽</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
