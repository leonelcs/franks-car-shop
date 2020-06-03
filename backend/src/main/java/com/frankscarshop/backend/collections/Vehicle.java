package com.frankscarshop.backend.collections;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.annotations.SerializedName;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@ToString
@Document(collection="vehicles")
public class Vehicle {

    @Id
    @Field("_id")
    private String id;

    private String slug;

    private String make;

    private String model;

    private String warehouse;

    private String locationName;

    private Location location;

    @SerializedName(value="year_model")
    @Field("year_model")
    private String yearModel;

    private Double price;

    private Boolean licensed;

    @Field("date_added")
    @SerializedName(value="date_added")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateAdded;

    public static List<String> getAllSortableFields() {
        List<String> output = new ArrayList<>();
        output.add("warehouse");
        output.add("locationName");
        output.add("yearModel");
        output.add("price");
        output.add("dateAdded");
        return output;
    }
}
