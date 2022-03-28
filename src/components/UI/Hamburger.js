import React, { useState } from 'react';

function Hamburger(props) {
    return (
        <div className="burger-container" onClick={props.toggleMenu}>
            <div className={'menu-btn ' + (props.isMenuOpen ? 'open' : '')}>
                <div className="menu-btn__burger"></div>
            </div>
            <h1 className={'menu-text ' + (props.isMenuOpen ? 'open' : '')}>
                תפריט
            </h1>
        </div>
    );
}

export default Hamburger;
