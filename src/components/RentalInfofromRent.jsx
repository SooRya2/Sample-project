import react,{useState} from 'react';
import { RentalService } from '../service/Rental.service';

const RentalInfofromRent=()=>{

    const [data,setdata]=useState([]);
    const [rental,setrental]=useState('');

    const fetchdata= async (e)=>{
        e.preventDefault();

        try{
            const rentalservice=RentalService();
            setdata(rentalservice.getbyrent(rental));
            console.log("fetched details",data);
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
                type="number"
                value="rent"
                onChange={(e)=>setrental(e.target.value)}/>
            </label>
            <button onClick={fetchdata}>Search</button>
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