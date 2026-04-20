import React from 'react';
import { Helmet } from 'react-helmet';
import { Navbar, Footer, Landing, About, Testimonials, Contacts } from '../../components';
import { headerData } from '../../data/headerData';

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} | {headerData.tagline}</title>
                <meta name="description" content={headerData.description} />
            </Helmet>

            <Navbar />
            <Landing />
            <About />
            <Testimonials />
            <Contacts />
            <Footer />
        </div>
    );
}

export default Main;
