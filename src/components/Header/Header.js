import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} />
            <nav>
                <a href='\Shop'>Shop</a>
                <a href='\order'>Order Review</a>
                <a href='\Inventory'>Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;