// Header.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="nav-links">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/login">Login</Link></li>
                    <li className="nav-item"><Link to="/adminpage">Adminpage</Link></li>
                    <li className="nav-item"><Link to="/assistant">Assistant</Link></li>
                    <li className="nav-item"><Link to="/contactform">Contact Us</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Header;
