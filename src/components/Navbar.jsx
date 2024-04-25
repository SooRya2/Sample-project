import React from 'react';
import { Navigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

import './Rentalform.css';

const Navbar = () => {
    return (
        <nav className="navbar nav-menu">
            <div className="navbar-container h-14 bg-0a192f">
                <Link to='/dashboard' className="navbar-logo">
                    <span className="small-text">View Exisiting Properties</span>
                </Link>
                <Link to='/Service' className='navbar-logo' >
                    <span className='small-text'>Search properties using SNO</span>
                </Link>
                <Link to='/Rent' className='navbar-logo' >
                    <span className='small-text'>Search properties using Rent</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;