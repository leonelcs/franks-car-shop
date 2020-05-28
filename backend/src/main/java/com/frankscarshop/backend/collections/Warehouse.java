package com.frankscarshop.backend.collections;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "warehouses")
@Getter
@Setter
@ToString
public class Warehouse {

    @Id
    private Long _id;
    private String name;
    private Location location;
    private Cars cars;

}