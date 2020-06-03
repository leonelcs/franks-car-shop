package com.frankscarshop.backend.controllers;

import com.frankscarshop.backend.collections.Vehicle;
import com.frankscarshop.backend.services.CarsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*")
public class CarsController {

    @NonNull
    private CarsService service;

    @GetMapping("/cars")
    public List<Vehicle> getAllVehicles(
            @ApiParam(required = false, allowableValues = "warehouse, locationName, yearModel, price, dateAdded")
            @Nullable
            @RequestParam String field,
            @ApiParam(required = false, defaultValue = "ASC")
            @Nullable
            @RequestParam String direction) {

        if (field == null) {
            return service.findAll();
        } else {
            if (Vehicle.getAllSortableFields().contains(field)) {
                Sort.Direction dir;
                if (direction != null && direction.toLowerCase().equals("desc")) {
                    dir = Sort.Direction.DESC;
                } else {
                    dir = Sort.Direction.ASC;
                }
                return service.findAllCarsSortedByField(dir, field);
            } else {
                log.warn("field used to sort is not valid, the system will return the standard fetch");
                return service.findAll();
            }
        }
    }
}
