package com.frankscarshop.backend.repository;

import com.frankscarshop.backend.collections.Vehicle;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface VehiclesRepository extends ReactiveMongoRepository<Vehicle, Long> {
}
