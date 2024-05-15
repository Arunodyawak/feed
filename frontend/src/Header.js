import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import './Header.css'; // Import the CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">IVORY Dental Care</Link>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/appointments">Appointments</Link>
                    </li>
                    <li>
                        <Link to="/patients">Patients</Link>
                    </li>
                    <li>
                        <Link to="/payments">Payments</Link>
                    </li>
                    <li>
                        <Link to="/">Feedback</Link>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
