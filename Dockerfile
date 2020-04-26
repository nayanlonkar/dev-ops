# pull latest mysql image
FROM ubuntu

# maintainer
LABEL MAINTAINER="Nayan"

RUN apt-get update && apt-get upgrade -y
RUN apt-get install mysql-server git nodejs npm -y
RUN git clone https://github.com/nayanlonkar/dev-ops
RUN mysql -u < dev-ops/myApp/script.sql

EXPOSE 8080/tcp
