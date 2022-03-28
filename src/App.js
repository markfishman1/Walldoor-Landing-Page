import AppHeader from './components/AppHeader.js';
import Gallery from './components/Gallery.js';
import Info from './components/Info.js';
import Carousel from './components/Carousel.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';
import MobileNav from './components/MobileNav.js';
import { useState, useEffect } from 'react';

function App() {
    const [isMenuOpen, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu((prevMenu) => !prevMenu);
        console.log('menu');
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, []);
    return (
        <>
            <AppHeader toggleMenu={handleMenu} isMenuOpen={isMenuOpen} />
            {windowWidth < 660 && (
                <MobileNav
                    isMenuOpen={isMenuOpen}
                    closeMenu={handleMenu}
                ></MobileNav>
            )}
            <Gallery></Gallery>
            <Info></Info>
            <Carousel windowWidth={windowWidth} />
            <Form></Form>
            <Footer></Footer>
        </>
    );
}

export default App;
