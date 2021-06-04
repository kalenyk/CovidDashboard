import React from 'react';
import Logo from '../../assets/images/logo.svg';

const Header = () => (
    <header>
        <img src={Logo} alt="Logo" className="logo" />

        <div className="avatar-wrap">
            <div className="avatar">PK</div>
            <span>Pavel Kalenyk</span>
        </div>
    </header>
);

export default Header;