# pull latest mysql image
FROM ubuntu

# maintainer
LABEL MAINTAINER="Nayan"

RUN apt-get update && apt-get upgrade -y
RUN apt-get install mysql-server git curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install nodejs -y
RUN git clone https://github.com/nayanlonkar/dev-ops
RUN cd /dev-ops/myApp
RUN npm install

EXPOSE 8080/tcp

