package com.frankscarshop.backend.services;

import com.frankscarshop.backend.collections.Vehicle;
import com.frankscarshop.backend.repository.VehiclesRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CarsServiceImpl implements CarsService {

    @NonNull
    private VehiclesRepository repository;

    @NonNull
    private MongoTemplate template;

    @Override
    public List<Vehicle> findAllCarsSortedByDate() {
        Query query = new Query();
        query.with(Sort.by(Sort.Direction.ASC, "dateAdded"));
        return template.find(query, Vehicle.class);
    }

    public List<Vehicle> findAll() {
        return repository.findAll();
    }
}
