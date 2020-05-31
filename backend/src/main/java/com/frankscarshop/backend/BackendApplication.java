package com.frankscarshop.backend;


import com.frankscarshop.backend.collections.Warehouse;
import com.frankscarshop.backend.repository.VehiclesRepository;
import com.frankscarshop.backend.repository.WarehouseRepository;
import com.google.gson.Gson;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.net.URL;
import java.util.Arrays;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	@NonNull
	WarehouseRepository warehouseRepository;

	@NonNull
	VehiclesRepository vehiclesRepository;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		//check if already initialized
		long entities = warehouseRepository.count();

		if (entities == 0) {
			log.info("consuming sample-data.json to populate database");
			FileReader reader = getFileFromResources("sample-data.json");

			Gson gson = new Gson();
			Warehouse[] warehouses = gson.fromJson(reader, Warehouse[].class);

			List<Warehouse> listOfWarehouse = Arrays.asList(warehouses);
			//insert all cars in the collection
			Arrays.asList(warehouses)
					.stream()
					.forEach(wh -> warehouseRepository.insert(wh));
			log.info("mongoDB got populated");
		} else {
			log.info("MongoDB is already populated");
		}
	}

	/** get file from classpath, resources folder */
	private FileReader getFileFromResources(String fileName) {

		ClassLoader classLoader = getClass().getClassLoader();

		URL resource = classLoader.getResource(fileName);
		if (resource == null) {
			throw new IllegalArgumentException("file is not found!");
		} else {
			try {
				return new FileReader(resource.getFile());
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			}
		}
		return null;
	}
}
