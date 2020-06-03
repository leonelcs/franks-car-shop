package com.frankscarshop.backend.utils;

import com.frankscarshop.backend.BackendApplication;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.net.URL;

public class FileLoader {

    /**
     *
     * @param fileName - the name of the file to be loaded
     * @return
     */
    public static FileReader getFileFromResources(String fileName) {

        ClassLoader classLoader = BackendApplication.class.getClassLoader();

        URL resource = classLoader.getResource(fileName);
        if (resource == null) {
            throw new IllegalArgumentException("file is not found!");
        } else {
            try {
                return new FileReader(resource.getFile());
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
        }
        return null;
    }
}
