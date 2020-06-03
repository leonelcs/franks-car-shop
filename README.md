# Frank's Shop Car Challenge by Leonel

This is the challenge solution developed by myself for the challenge below:

[The challenge](coding-challenge.md)

#### This is not the final version

Before start, have in mind there is more to come.


Right now the app is dockerized only for backend and mongodb

to generate the artifact on your local docker repositoty use the script in the root folder.

``` 
./backend-docker-gen.sh
```

It might required change the permissions on your folder so you can quickly change it using:

```
chmod 555 ./backend-docker-gen.sh
```

then you go for docker folder and run:

```
cd docker
docker-compose up
```

This will make available a mongodb instance on the default port and a backend application on the port 8080

you can access a short the api documentation at:

http://localhost:8080/swagger-ui.html

#### running the frontend

you can go directly to the frontend folder and run

```
cd frontend
npm install
yarn start
```

#### how to open the application?

You can access the frontend in:

http://localhost:3000/

and the backend 