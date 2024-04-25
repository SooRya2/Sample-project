
import React, { useState, useEffect } from 'react';
import { RentalService } from '../service/Rental.service';
import { useNavigate } from 'react-router-dom';
import './RentalDashboard.css'; // Import CSS file

export const RentalDashboard = () => {
  const navigate = useNavigate();
  const [dashboard, setdashboard] = useState([]);

  const fetchdata = async () => {
    try {
      const rentalservice = RentalService();
      setdashboard(await rentalservice.getallrentals());
    } catch (error) {
      alert('Failed to fetch rentals');
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="dashboard-container">
      <ul>
        {dashboard.map((rental) => (
          <li key={rental.id} className="rental-item">
            <div>Property Name: {rental.propertyName}</div>
            <div>Electricity Service No: {rental.electricityServiceNo}</div>
            <div>Rent: {rental.rent}</div>
            <div>Advance: {rental.advance}</div>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};
export default RentalDashboard;
