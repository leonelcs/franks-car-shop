package com.frankscarshop.backend.utils;

import com.frankscarshop.backend.collections.Vehicle;
import com.frankscarshop.backend.collections.Warehouse;
import com.google.gson.Gson;
import org.bson.types.ObjectId;

public class AddFeaturesToVehicleModel {

    /**
     * This method insert new attributes on vehicle to diminish the number of calls from the frontend
     * @param input - Vehicle instance, as catch in the warehouse object
     * @param parent - the warehouse parent
     * @return copy of vehicle to avoid side-effects
     */
    public static Vehicle decorateVehicle(Vehicle input, Warehouse parent) {
        //deep copy of vehicle
        Gson gson = new Gson();
        Vehicle output = gson.fromJson(gson.toJson(input), Vehicle.class);
        String id = new ObjectId().toString();
        output.setId(id);

        String fiveLast = id.substring(id.length()-5, id.length());
        String make = output.getMake().replace(' ', '-');
        String model = output.getModel().replace(' ', '-');
        String slug = String.format("%s-%s-%s-%s",make,model,output.getYearModel(),fiveLast);
        output.setSlug(slug);
        output.setLocation(parent.getLocation());
        output.setLocationName(parent.getCars().getLocation());
        output.setWarehouse(parent.getName());
        return output;

    }
}
