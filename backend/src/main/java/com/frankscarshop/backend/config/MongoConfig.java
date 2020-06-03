package com.frankscarshop.backend.config;

import java.util.ArrayList;
import java.util.List;

import com.frankscarshop.backend.listeners.WarehouseCascadeSaveMongoEventListener;
import com.mongodb.client.MongoClients;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import com.mongodb.client.MongoClient;


@Slf4j
@Configuration
@EnableMongoRepositories(basePackages = "com.frankscarshop.backend.repository")
public class MongoConfig extends AbstractMongoClientConfiguration {

    @Value("${spring.data.mongodb.database}")
    private String database;

    @Value("${spring.data.mongodb.host}")
    private String host;

    @Value("${spring.data.mongodb.port}")
    private String port;

    private final String PREFIX = "mongodb://";

    private final List<Converter<?, ?>> converters = new ArrayList<Converter<?, ?>>();

    @Override
    protected String getDatabaseName() {
        return database;
    }

    public @Bean MongoClient mongoClient() {
        return MongoClients.create(PREFIX + host + ":" + port);
    }

    @Bean
    public WarehouseCascadeSaveMongoEventListener warehouseCascadeSaveMongoEventListener() {
        return new WarehouseCascadeSaveMongoEventListener();
    }

}

