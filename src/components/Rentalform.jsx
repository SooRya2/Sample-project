
import React, { useState,useEffect } from 'react';
import './Rentalform.css';
import {RentalService} from '../service/Rental.service';
import Navbar from './Navbar';

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

    const updatehandler=async (e)=>{
        e.preventDefault();
        const rentalservice=RentalService();

        try{
            await rentalservice.updaterental(newProperty);
            console.log("updated details",newProperty);
            alert("Rental Updated");
        }
        catch(error)
        {
            console.log("Details not fetched",error)
            alert("Rental not updated");
        }
    }

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
                <button type="button" onClick={updatehandler}>Update Property</button>
            </form>

            <Navbar/>
        </div>
        
    );
}

export default Rentalform;