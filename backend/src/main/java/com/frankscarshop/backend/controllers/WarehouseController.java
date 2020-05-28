package com.frankscarshop.backend.controllers;

import com.frankscarshop.backend.collections.Warehouse;
import com.frankscarshop.backend.repository.WarehouseRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class WarehouseController {

    @NonNull
    private WarehouseRepository repository;

    @GetMapping("/warehouses")
    public Flux<Warehouse> getAllWarehouses() {

        return repository.findAll();

    }

}
