import Login from "../Components/Login";
import Signup from "../Components/Signup";
import './styles/Header.css';
import React, { useState } from 'react';

const Header = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSignupOpen, setSignupOpen] = useState(false);
  
    const openLoginForm = () => {
      setSignupOpen(false);
      setLoginOpen(true);
    };
  
    const openSignupForm = () => {
      setLoginOpen(false);
      setSignupOpen(true);
    };
  
    const closeForm = () => {
      setLoginOpen(false);
      setSignupOpen(false);
    };
    const handleButtonClick = () => {
      window.location.href = 'http://localhost:3001/';
    };
    return (
        <header className="header">
            <div className="logo">Pc Configurator</div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/products">Products</a></li>
                </ul>
                
            </nav>
            <div className="auth-buttons">
                {/* <button className="login-btn" onClick={openLoginForm}>Login</button>
                {isLoginOpen && <Login closeForm={closeForm} />}
                <button className="signup-btn" onClick={openSignupForm}>Signup</button>
                {isSignupOpen && <Signup closeForm={closeForm} />} */}
                  <button className="adminPanel" onClick={handleButtonClick}> Admin Panel </button>
            </div>
        </header>
    );
};

export default Header;