echo 'This script will run the build - please check if java, maven and docker is installed'

cd docker
docker-compose -f dc-backend-test.yml up -d


cd ../backend
mvn clean package -P local
