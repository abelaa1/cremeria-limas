import React, { useEffect, useRef } from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
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
        <section className="contacts" id="contacto" ref={sectionRef} aria-labelledby="contacts-heading">
            <div className="section-container">

                <div className="contacts__header reveal">
                    <p className="section-label">Habla con nosotros</p>
                    <h2 id="contacts-heading" className="contacts__title">¡Contáctenos!</h2>
                    <p className="contacts__subtitle">
                        Estamos listos para atenderte. Llámanos o escríbenos por WhatsApp.
                    </p>
                </div>

                {/* Primary phone CTA — prominent on mobile */}
                <div className="contacts__primary reveal">
                    <a
                        href={`tel:${contactsData.phoneRaw}`}
                        className="contacts__phone-btn"
                        aria-label={`Llamar al ${contactsData.phone}`}
                    >
                        <FiPhone aria-hidden="true" />
                        <span>{contactsData.phone}</span>
                    </a>

                    <a
                        href={contactsData.whatsapp}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="contacts__whatsapp-btn"
                        aria-label="Enviar mensaje por WhatsApp"
                    >
                        <IoLogoWhatsapp aria-hidden="true" />
                        <span>Escríbenos en WhatsApp</span>
                    </a>
                </div>

                {/* Secondary details */}
                <div className="contacts__details reveal">
                    <a
                        href={`mailto:${contactsData.email}`}
                        className="contacts__detail"
                        aria-label={`Correo electrónico: ${contactsData.email}`}
                    >
                        <div className="contacts__detail-icon" aria-hidden="true">
                            <FiMail />
                        </div>
                        <div className="contacts__detail-text">
                            <span className="contacts__detail-label">Correo electrónico</span>
                            <span className="contacts__detail-value">{contactsData.email}</span>
                        </div>
                    </a>

                    <a
                        href={contactsData.mapsLink}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="contacts__detail"
                        aria-label={`Dirección: ${contactsData.address}`}
                    >
                        <div className="contacts__detail-icon" aria-hidden="true">
                            <FiMapPin />
                        </div>
                        <div className="contacts__detail-text">
                            <span className="contacts__detail-label">Dirección</span>
                            <span className="contacts__detail-value">{contactsData.address}</span>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Contacts;
