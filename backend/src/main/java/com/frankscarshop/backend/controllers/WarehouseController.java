package com.frankscarshop.backend.controllers;

import com.frankscarshop.backend.collections.Warehouse;
import com.frankscarshop.backend.repository.WarehouseRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class WarehouseController {

    @NonNull
    private WarehouseRepository repository;

    @GetMapping("/warehouses")
    public List<Warehouse> getAllWarehouses() {

        return repository.findAll();

    }

}
