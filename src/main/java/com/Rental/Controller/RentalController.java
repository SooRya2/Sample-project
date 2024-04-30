package com.Rental.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;
import com.Rental.Service.RentalService;
import com.Rental.bean.Rental;


@RestController
@RequestMapping("/Rental")
public class RentalController {
	
	
	private final RentalService rentser;
	 
	@Autowired
    public RentalController(RentalService rentser) {
        this.rentser = rentser;
    }
	

	
	@GetMapping("/{id}")
	public Rental getbySCNo(@PathVariable String id)
	{
		return rentser.find(id);
	}
	
	@GetMapping()
	public List<Rental> getall()
	{
		return rentser.getallprop();
	}
	
	@PostMapping("/post")
	public Rental postprop(@RequestBody Rental rent)
	{
		return rentser.addrent(rent);
	}
	
	@DeleteMapping("/delete/{userid}")
	public String delprop(@PathVariable String userid)
	{
		return rentser.deleterent(userid);
	}

	@PutMapping("/update")
	public Rental updateprop(@RequestBody Rental rental)
	{
		return rentser.updaterent(rental);
		
	}
	
	@GetMapping("/getbyrent/{rent}")
	public Rental getbyrent(@PathVariable String rent)
	{
		return rentser.findbyrent(rent);
	}
}
