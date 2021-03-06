package com.frankscarshop.backend.repository;

import com.frankscarshop.backend.collections.Warehouse;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WarehouseRepository extends MongoRepository<Warehouse, Long> {
}
