package com.frankscarshop.backend.collections;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@ToString
public class Location {

    @SerializedName(value="lat")
    @Field("lat")
    private Double latitude;

    @SerializedName(value="long")
    @Field("long")
    private Double longitude;
}
