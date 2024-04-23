import React, { useState } from 'react';
import './RentalChoice.css';
import RentalInfo from './RentalInfo';
import { Link } from 'react-router-dom';

const rentalchoice = () => {

    return (
        <div>
            <h2>Choose your choice: </h2>
            <br/>
            <br/>
            <div style={{ display: 'flex' }}>
                <button style={{ marginRight: '10px' } }><Link to="/Service">Search Rental using Service Number</Link></button>
                <button><Link to="/Rent">Search Rental using rent</Link></button>
            </div>
        </div>
    )

}

export default rentalchoice;