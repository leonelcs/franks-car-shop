package com.frankscarshop.backend.repository;

import com.frankscarshop.backend.collections.Vehicle;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface VehiclesRepository extends MongoRepository<Vehicle, Long> {

}
