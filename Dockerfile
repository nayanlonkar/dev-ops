# pull latest mysql image
FROM ubuntu

# maintainer
LABEL MAINTAINER="Nayan"

WORKDIR /dev-ops/myApp
COPY ./myApp /dev-ops/myApp/

RUN apt-get update
RUN apt-get install mysql-server git curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install nodejs -y
RUN cd /dev-ops/myApp &&  npm install 

EXPOSE 8080/tcp

