import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Whatwedo from '../Whatwedo';
import Clients from '../Clients';
import Team from '../Team';
import Footer from '../Footer';
import Contact from '../Contact';

function Home () {
    return (
        <>
            <HeroSection />
            <Whatwedo />
            <Clients />
            <Team />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;