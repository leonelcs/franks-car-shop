package com.frankscarshop.backend.collections;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;

@Getter
@Setter
@ToString
@Document
public class Vehicle {

    @Id
    private Double _id;

    private String make;

    private String model;

    @Field("year_model")
    private String yearModel;

    private Double price;

    private Boolean licensed;

    @Field("date_added")
    private LocalDate dateAdded;
}
