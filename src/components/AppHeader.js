import React, { useEffect, useState } from 'react';
import Hamburger from './UI/Hamburger';

function AppHeader(props) {
    // const body = document.body,
    //     html = document.documentElement;
    // var height = Math.max(
    //     body.scrollHeight,
    //     body.offsetHeight,
    //     html.clientHeight,
    //     html.scrollHeight,
    //     html.offsetHeight
    // );
    const [windowHeight, setWindowHeight] = useState(0);
    let offsetHeight;
    let faded = '';
    if ((windowHeight > 700 && windowHeight < 2100) || windowHeight > 2750) {
        faded = 'faded';
    }
    function handleScroll() {
        offsetHeight = window.scrollY;
        setWindowHeight((prevState) => {
            return offsetHeight;
        });
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className="header">
            <Hamburger
                toggleMenu={props.toggleMenu}
                isMenuOpen={props.isMenuOpen}
            ></Hamburger>
            <div className={'header-navbar ' + faded}>
                <nav className="header-navbar__links">
                    <a href="#book">צור קשר</a>
                    <a href="#info">אודות</a>
                </nav>
                <div className="logo">
                    <img src="imgs/Walldoor_Facebook_Logo.png" alt="logo" />
                </div>
                <nav className="header-navbar__links">
                    <a href="#carousel">גלריה</a>
                    <a href="#book">מיקום</a>
                </nav>
            </div>
            <div className="header-text">
                <p className="header-text__p1">איכות, בטיחות וסטייל</p>
                <p className="header-text__p2">
                    וולדור | Walldoor היא חברת דלתות פנים אשר לקוחותיה הם בסדר
                    ראש העדיפויות,אנו מתמחים בייבוא דלתות איכותיות בסטנדרט גבוה.
                    נשמח לראותכם !{' '}
                </p>
            </div>
        </header>
    );
}
export default AppHeader;
