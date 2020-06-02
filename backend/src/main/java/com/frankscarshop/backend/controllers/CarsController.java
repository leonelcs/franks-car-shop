package com.frankscarshop.backend.controllers;

import com.frankscarshop.backend.collections.Vehicle;
import com.frankscarshop.backend.services.CarsService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CarsController {

    @NonNull
    private CarsService service;

    @GetMapping("/cars")
    public List<Vehicle> getAllVehicles() {
        return service.findAllCarsSortedByDate();
    }
}
