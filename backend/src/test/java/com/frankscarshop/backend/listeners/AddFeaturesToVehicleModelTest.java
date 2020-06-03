package com.frankscarshop.backend.listeners;



import com.frankscarshop.backend.collections.Location;
import com.frankscarshop.backend.collections.Vehicle;
import com.frankscarshop.backend.collections.Warehouse;
import com.frankscarshop.backend.utils.AddFeaturesToVehicleModel;
import com.frankscarshop.backend.utils.FileLoader;
import com.google.gson.Gson;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.FileReader;


public class AddFeaturesToVehicleModelTest {

    static Warehouse[] warehouses;

    /*
    Information of the first vehicle
    "       _id": 1,
            "make": "Volkswagen",
            "model": "Jetta III",
            "year_model": 1995,
            "price": 12947.52,
            "licensed": true,
            "date_added": "2018-09-18"
     */

    @BeforeAll
    static void loadJson() {
        FileReader reader = FileLoader.getFileFromResources("sample-data.json");
        Gson gson = new Gson();
        warehouses = gson.fromJson(reader, Warehouse[].class);
    }

    @Test
    void decorateVehicleTest() {
        Vehicle sampleVehicle = warehouses[0].getCars().getVehicles().get(0);

        Vehicle actual = AddFeaturesToVehicleModel.decorateVehicle(sampleVehicle, warehouses[0]);
        Vehicle expect = createExpected(sampleVehicle);
        assertEquals(actual.getWarehouse(), expect.getWarehouse());
        assertEquals(actual.getLocationName(), expect.getLocationName());
    }

    /*
    id=5ed7732daacfe71629f46382, slug=Volkswagen-Jetta-III-1995-lastFive, make=Volkswagen, model=Jetta III, warehouse=Warehouse A, locationName=West wing, location=Location(latitude=47.13111, longitude=-61.54801), yearModel=1995, price=12947.52, licensed=true, dateAdded=Tue Sep 18 00:00:00 CEST 2018)
     */
    private Vehicle createExpected(Vehicle base) {
        Gson gson = new Gson();
        Vehicle output = gson.fromJson(gson.toJson(base), Vehicle.class);

        output.setWarehouse("Warehouse A");
        output.setLocationName("West wing");
        Location location = new Location();
        location.setLatitude(47.13111);
        location.setLongitude(-61.54801);
        output.setLocation(location);

        return output;
    }


}
