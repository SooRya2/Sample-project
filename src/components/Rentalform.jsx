
import React, { useState,useEffect } from 'react';
import './Rentalform.css';
import {RentalService} from '../service/Rental.service';


function Rentalform() {

    const [properties, setProperties] = useState([]);
    const [newProperty, setNewProperty] = useState({
        'propertyName': '',
        'electricityServiceNo': '',
        'rent': '',
        'advance': ''

    });

    const changehandler = async (e) => {
        e.preventDefault();
        const rentalservice=RentalService();
        
        try{
            await rentalservice.addrental(newProperty);
            console.log("Rental registration successfull",newProperty);
            alert("Rental registered!");
        }
        catch(error)
        {
            console.error("Rental registration failed",error);
            alert("Rental not registered!");
        }
        setNewProperty({
            'propertyName': '',
            'electricityServiceNo': '',
            'rent': '',
            'advance': ''
        });
    };


    const inputhandler = (e) => {
        const { name, value } = e.target;
        setNewProperty({ ...newProperty, [name]: value });
    };

    return (
        <div>
            <h2>Rentals Management</h2>
            <br />
            <br />
            <br />
            <form onSubmit={changehandler}>
                <label>Property name
                    <input
                        type="text"
                        name="propertyName"
                        value={newProperty.propertyName}
                        onChange={inputhandler}
                    />
                </label>
                <br />
                <label>Electricity Service no
                    <input
                        type="text"
                        name="electricityServiceNo"
                        value={newProperty.electricityServiceNo}
                        onChange={inputhandler}
                    />
                </label>
                <br />
                <label>Rent
                    <input
                        type="number"
                        name="rent"
                        value={newProperty.rent}
                        onChange={inputhandler}
                    />
                </label>
                <br />
                <label>Advance paid
                    <input
                        type="number"
                        name="advance"
                        value={newProperty.advance}
                        onChange={inputhandler}
                    />
                </label>
              
                <button type="submit">Add Property</button>
            </form>
            {/* <h3>Existing Properties</h3>
            <ul>
                {properties.map((property, index) => (
                    <li key={index}>            
                        <strong>Name:</strong> {property.name},{''}
                        <strong>Electricity Service No:</strong> {property.electricityServiceNo},{''}
                        <strong>Rent Amount:</strong> {property.rent},{''}
                        <strong>Advance Amount:</strong> {property.advance},{''}
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default Rentalform;