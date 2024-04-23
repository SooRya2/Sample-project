import React, {  useState } from 'react';
import { RentalService } from '../service/Rental.service';
import './RentalInfo.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RentalInfo = () => {
    const navigate = useNavigate();
    const [rental, setrental] = useState('');
    const [data, setdata] = useState([]);


    const fetchdata = async (e) => {
        try {
            const rentalservice = RentalService();
            const rentalData = await rentalservice.getrentbyid(rental)
            setdata(rentalData);
            console.log("Data fetched", rentalData);
        }
        catch (error) {
            console.log("Rental not fetched", error);
        }
    }


        const handleGoBack = () => {
            const history = useHistory();
            history.goBack(); 
        };
    

    return (
        <div>

            <label> Enter the Service No to View the property
                <input
                    type="text"
                    name="electricityServiceNo"
                    onChange={(e) => setrental(e.target.value)}
                />
            </label>
            <br />
            <button type="submit" onClick={fetchdata}>Search property</button>
            <button onClick={() => navigate(-1)}>Go back</button>
            <br />
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