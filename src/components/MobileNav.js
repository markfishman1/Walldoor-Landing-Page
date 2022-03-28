import React from 'react';
import ReactDOM from 'react-dom';
function Screen(props) {
    return (
        <div
            className={'screen ' + (props.isMenuOpen ? 'open' : '')}
            onClick={props.closeMenu}
        ></div>
    );
}
function MobileNavOverlay(props) {
    return (
        <div className={'mobile-navigaion ' + (props.isMenuOpen ? 'open' : '')}>
            <section className="mobile-navigaion__list">
                <a href="#info" className="mobile-navigaion__list__item-1">
                    אודות
                </a>
                <a href="#carousel" className="mobile-navigaion__list__item-2">
                    גלריה
                </a>
                <a href="#book" className="mobile-navigaion__list__item-3">
                    מיקום
                </a>
                <div className="mobile-navigaion__list__btn">
                    <a href="#contact">צרו קשר</a>
                </div>
            </section>
        </div>
    );
}
const portalEl = document.getElementById('overlays');

function MobileNav(props) {
    return (
        <>
            {ReactDOM.createPortal(
                <Screen
                    closeMenu={props.closeMenu}
                    isMenuOpen={props.isMenuOpen}
                ></Screen>,
                portalEl
            )}
            {ReactDOM.createPortal(
                <MobileNavOverlay
                    isMenuOpen={props.isMenuOpen}
                ></MobileNavOverlay>,
                portalEl
            )}
        </>
    );
}

export default MobileNav;
