# pull latest mysql image
FROM node

# maintainer
LABEL MAINTAINER="Nayan"

RUN apt-get update && apt-get upgrade -y
RUN apt-get install mysql-server -y
RUN mkdir myApp && cd myApp
RUN npm init -y
RUN npm install --save express
RUN npm install --save mysql


EXPOSE 8080/tcp
