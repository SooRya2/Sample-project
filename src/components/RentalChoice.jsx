import React, { useState } from 'react';
import './RentalChoice.css';


const rentalchoice = () => {

    return (
        <div>
            <h2>Choose your choice: </h2>
            <br/>
            <br/>
            <div style={{ display: 'flex' }}>
                <button style={{ marginRight: '10px' }}>Search Rental using Service Number</button>
                <button>Search Rental using rent</button>
            </div>
        </div>
    )

}

export default rentalchoice;