package com.frankscarshop.backend.services;

import com.frankscarshop.backend.collections.Vehicle;

import java.util.List;

public interface CarsService {

    List<Vehicle> findAllCarsSortedByDate();

    List<Vehicle> findAll();

}
