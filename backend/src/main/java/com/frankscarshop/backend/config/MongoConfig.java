package com.frankscarshop.backend.config;

import java.util.ArrayList;
import java.util.List;

import com.frankscarshop.backend.listeners.WarehouseCascadeSaveMongoEventListener;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import com.mongodb.client.MongoClient;


@Configuration
@EnableMongoRepositories(basePackages = "com.frankscarshop.backend.repository")
public class MongoConfig extends AbstractMongoClientConfiguration {

    private final List<Converter<?, ?>> converters = new ArrayList<Converter<?, ?>>();

    @Override
    protected String getDatabaseName() {
        return "franksdatabase";
    }

    public @Bean MongoClient mongoClient() {
        return MongoClients.create("mongodb://localhost:27017");
    }

    @Bean
    public WarehouseCascadeSaveMongoEventListener warehouseCascadeSaveMongoEventListener() {
        return new WarehouseCascadeSaveMongoEventListener();
    }

}

