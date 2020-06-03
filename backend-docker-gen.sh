echo 'This script will run the build - please check if java, maven and docker is installed'

cd backend
mvn clean package dockerfile:build -P docker -Dmaven.test.skip=true
