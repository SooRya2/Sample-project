import React, { useState } from 'react';
import { RentalService } from '../service/Rental.service';
import './RentalInfo.css';
import { useNavigate } from 'react-router-dom';

const RentalInfo = () => {
    const navigate = useNavigate();
    const [rental, setRental] = useState('');
    const [data, setData] = useState({});

    const fetchdata = async () => {
        try {
            const rentalservice = RentalService();
            const rentalData = await rentalservice.getrentbyid(rental);
            setData(rentalData);
            console.log("Data fetched", rentalData);
        }
        catch (error) {
            console.log("Rental not fetched", error);
        }
    }

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="container">
            <label> Enter the Service No to View the property
                <input
                    type="text"
                    name="electricityServiceNo"
                    onChange={(e) => setRental(e.target.value)}
                />
            </label>
            <br />
            <button type="submit" onClick={fetchdata}>Search property</button>
            <button onClick={handleGoBack}>Go back</button>
            <br />
            <div className="property-details">
                <div>Property Name: ={data.propertyName}</div>
                <div>Electricity Service No: {data.electricityServiceNo}</div>
                <div>Rent: {data.rent}</div>
                <div>Advance: {data.advance}</div>
            </div>
        </div>
    )
}

export default RentalInfo;
