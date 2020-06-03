package com.frankscarshop.backend.services;

import com.frankscarshop.backend.collections.Vehicle;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface CarsService {

    /**
     * Find the cars sorted by the informed field
     * @param direction - ASC or DESC
     * @param field - The attributes
     * @return
     */
    List<Vehicle> findAllCarsSortedByField(Sort.Direction direction, String field);

    List<Vehicle> findAll();

}
