package com.frankscarshop.backend.listeners;

import com.frankscarshop.backend.collections.Warehouse;
import com.frankscarshop.backend.repository.VehiclesRepository;
import com.frankscarshop.backend.utils.AddFeaturesToVehicleModel;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;

public class WarehouseCascadeSaveMongoEventListener extends AbstractMongoEventListener<Object> {

    @Autowired
    VehiclesRepository vehiclesRepository;

    @Override
    public void onBeforeConvert(BeforeConvertEvent<Object> event) {

        //The _id field is a required field of the parent document, and is typically not necessary or present in embedded documents
        //However, I want the embedded documents to have an id, so I'm catching the event and adding ids before the Vehicles are saved with the Warehouse
        Object source = event.getSource();
        if ((source instanceof Warehouse) ) {
            Warehouse warehouse = ((Warehouse) source);
            warehouse.getCars().getVehicles().forEach(vehicle -> {
                AddFeaturesToVehicleModel.decorateVehicle(vehicle, warehouse);
                vehiclesRepository.save(vehicle);
            });
        }
    }
}

