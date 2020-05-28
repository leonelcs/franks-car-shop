package com.frankscarshop.backend.collections;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@ToString
public class Location {

    @Field("lat")
    private Double latitude;

    @Field("long")
    private Double longitude;
}
