package com.frankscarshop.backend.collections;

import com.google.gson.annotations.SerializedName;
import lombok.Setter;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "warehouses")
@Getter
@Setter
@ToString
public class Warehouse {

    @Id
    @Field("_id")
    private String id;

    private String name;

    private Location location;

    private Cars cars;

}