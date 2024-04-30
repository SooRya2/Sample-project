package com.Rental.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.Rental.bean.Rental;
import java.util.Optional;
import java.util.List;


@Repository
public interface RentalRepo extends MongoRepository<Rental, String> {
   Rental findByElectricityServiceNo(String electricityServiceNo);
   Rental findByRent(String rent);
   Optional<Rental> findByAdvance(String advance);
}