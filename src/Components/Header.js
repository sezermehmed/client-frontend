import './styles/Header.css';
import React from 'react';
import About from "./About";


const Header = () => {

    const handleButtonClick = () => {
        window.location.href = 'http://localhost:3001/';
    };
    return (
        <header className="header">
            <div className="logo">Pc Configurator</div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about" onClick={About}>About</a></li>
                    <li><a href="/products">Products</a></li>
                </ul>
            </nav>
            <div className="auth-buttons">
                <button className="adminPanel" onClick={handleButtonClick}> Admin Panel</button>
            </div>
        </header>
    );
};

export default Header;