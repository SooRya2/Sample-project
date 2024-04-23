import React, { useState, useEffect } from 'react';
import { RentalService } from '../service/Rental.service';

export const RentalDashboard = () => {

    const [dashboard, setdashboard] = useState([]);

    const fetchdata = async () => {
        try {
            const rentalservice = RentalService();
            setdashboard(await rentalservice.getallrentals());
        }
        catch (error) {
            alert("Failed to fetch rentals");
        }
    }

    useEffect(() => {
        fetchdata();
    }, []);

        
    return (
        <div>
            <ul>
            {dashboard.map((rental) => (
                <li key={rental.id}>
                    <div>Property Name: {rental.propertyName}</div>
                    <div>Electricity Service No: {rental.electricityServiceNo}</div>
                    <div>Rent: {rental.rent}</div>
                    <div>Advance: {rental.advance}</div>

                </li>
           
            ))}
             </ul>
        </div>
    )
}
            export default RentalDashboard;