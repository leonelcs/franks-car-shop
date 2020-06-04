# Frank's Shop Car Challenge by Leonel

This is the challenge solution developed by myself for the challenge below:

[The challenge](coding-challenge.md)

#### There is a lot to do to make it better

[Technical Debt](tech-debt.md)

It is almost there, I have made some tweaks to make the visual and the features more nice.

In this moment we have all the 3 phases done, there is a debt list that I will comment on the presentation.

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

you can also run the tests in the backend by using

```
./run-tests-backend.sh
```

That will start a mongo container to allow java run the unit tests

#### running the frontend

you can go directly to the frontend folder and run

```
cd frontend
npm install
yarn start
```

You can also run the tests using:

```
npm test
```

#### how to open the application?

You can access the frontend in:

http://localhost:3000/

and the backend 