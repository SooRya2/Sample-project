import React, { useEffect, useState } from 'react';
import { RentalService } from '../service/Rental.service';
import './RentalInfo.css';

const RentalInfo = () => {

    const [rental, setrental] = useState('');
    const [data, setdata] = useState([]);


    const fetchdata = async (e) => {
        try {
            const rentalservice = RentalService();
            const rentalData = await rentalservice.getrentbyid(rental)
            setdata(rentalData);
            console.log("Data fetched",rentalData);
        }
        catch (error) {
            console.log("Rental not fetched", error);
        }
    }


    return (
        <div>

            <label> Enter the Service No to View the property
                <input
                    type="text"
                    name="electricityServiceNo"
                    onChange={(e) => setrental(e.target.value)}
                />
            </label>
            <br/>
            <button type="submit" onClick={fetchdata}>Search property</button>
            <br/>
            <div>
               <div>{data.propertyName}</div>
               <div>{data.electricityServiceNo}</div>
               <div>{data.rent}</div>
               <div>{data.advance}</div>
            </div>

        </div>
    )
}

export default RentalInfo;