package com.frankscarshop.backend.listeners;

import com.frankscarshop.backend.collections.Warehouse;
import com.frankscarshop.backend.repository.VehiclesRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;

public class CascadeSaveMongoEventListener extends AbstractMongoEventListener<Object> {

    @Autowired
    VehiclesRepository vehiclesRepository;

    @Override
    public void onBeforeConvert(BeforeConvertEvent<Object> event) {

        //The _id field is a required field of the parent document, and is typically not necessary or present in embedded documents
        //However, I want the embedded documents to have an id, so I'm catching the event and adding ids before the Vehicles are saved with the Warehouse
        Object source = event.getSource();
        if ((source instanceof Warehouse) ) {
            ((Warehouse) source).getCars().getVehicles().forEach(vehicle -> {
                vehicle.setId(new ObjectId().toString());
                vehiclesRepository.save(vehicle);
            });
        }
    }
}

