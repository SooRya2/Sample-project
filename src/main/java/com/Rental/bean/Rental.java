package com.Rental.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Rental")
public class Rental {
	
	@Id
	private String id;
	private String propertyName;
	private String electricityServiceNo;
	private String rent;
	private String advance;
	
	public Rental()
	{
		
	}
	
	public Rental(String id, String propertyName, String electricityServiceNo, String rent, String advance) {
		super();
		this.id = id;
		this.propertyName = propertyName;
		this.electricityServiceNo = electricityServiceNo;
		this.rent = rent;
		this.advance = advance;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getPropertyName() {
		return propertyName;
	}


	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}


	public String getElectricityServiceNo() {
		return electricityServiceNo;
	}


	public void setElectricityServiceNo(String electricityServiceNo) {
		this.electricityServiceNo = electricityServiceNo;
	}


	public String getRent() {
		return rent;
	}


	public void setRent(String rent) {
		this.rent = rent;
	}


	public String getAdvance() {
		return advance;
	}


	public void setAdvance(String advance) {
		this.advance = advance;
	}
	
	
	
	

}
