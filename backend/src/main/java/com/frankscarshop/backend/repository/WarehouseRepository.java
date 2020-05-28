package com.frankscarshop.backend.repository;

import com.frankscarshop.backend.collections.Warehouse;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WarehouseRepository extends ReactiveMongoRepository<Warehouse, Long> {
}
