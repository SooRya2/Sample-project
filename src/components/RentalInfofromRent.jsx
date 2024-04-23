import react,{useState} from 'react';
import { RentalService } from '../service/Rental.service';
import { useNavigate } from 'react-router-dom';
const RentalInfofromRent=()=>{
    const navigate=useNavigate();
    const [data,setdata]=useState([]);
    const [rental,setrental]=useState('');

    const fetchdata= async (e)=>{
        e.preventDefault();

        try{
            const rentalservice=RentalService();
            const rentaldata=await rentalservice.getbyrent(rental);
            setdata(rentaldata);
            console.log("fetched details",rentaldata);
        }
        catch(error)
        {
            console.log("Could not fetch",error);
        }
    }


    return (
        <div>
            <label>Enter the rent amount to check the property
            <input
                type="text"
                name="rent"
                onChange={(e)=>setrental(e.target.value)}/>
            </label>
            <button onClick={fetchdata}>Search</button>
            <button onClick={() => navigate(-1)}>Go back</button>
            <br/>
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

export default RentalInfofromRent;