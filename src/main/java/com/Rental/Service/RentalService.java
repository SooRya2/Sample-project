package com.Rental.Service;

import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Rental.bean.Rental;
import com.Rental.repo.RentalRepo;

@Service
public class RentalService {
	
	@Autowired
	private RentalRepo renrepo;
	
	public List<Rental> getallprop()
	{
		return renrepo.findAll();
	}
	
	public Rental getrent(String id)
	{
		Optional<Rental> rent=renrepo.findById(id);
		if(rent.isPresent())
			return rent.get();
		return null;
	}
	
	public Rental addrent(Rental rental)
	{
		return renrepo.save(rental);
	}
	
	public String deleterent(String id)
	
	{
		renrepo.deleteById(id);
		return "Rental Deleted";
	}
	
	public Rental updaterent(Rental rental)
	{
		
		Rental existingRental = renrepo.findByAdvance(rental.getAdvance())
	            .orElseThrow(() -> new RuntimeException("Rental not found with advance: " + rental.getAdvance()));

	        existingRental.setElectricityServiceNo(rental.getElectricityServiceNo());
	        existingRental.setRent(rental.getRent());
	        existingRental.setPropertyName(rental.getPropertyName());
		
	        return renrepo.save(existingRental);
	}
	
	public Rental find(String electricityServiceNo)	{
		return renrepo.findByElectricityServiceNo(electricityServiceNo);
	}
	
	public Rental findbyrent(String rent)
	{
		return renrepo.findByRent(rent);
	}
	
	

}
