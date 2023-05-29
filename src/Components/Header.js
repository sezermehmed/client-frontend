import Login from "../Components/Login";
import Signup from "../Components/Signup";
import './styles/Header.css';
import React, { useState } from 'react';

const Header = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSignupOpen, setSignupOpen] = useState(false);
  
    const openLoginForm = () => {
      setLoginOpen(true);
    };
  
    const openSignupForm = () => {
      setSignupOpen(true);
    };
  
    const closeForm = () => {
      setLoginOpen(false);
      setSignupOpen(false);
    };
    return (
        <header className="header">
      <div className="logo">My Website</div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
      <button className="login-btn" onClick={openLoginForm} >Login<Login /> </button>
        <button className="signup-btn" onClick={openSignupForm}>Signup<Signup /></button>
    
      </div>
    </header>
    );
  };

export default Header;