package com.frankscarshop.backend.collections;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Getter
@Setter
@ToString
public class Cars {

    private String location;

    private List<Vehicle> vehicles;
}
