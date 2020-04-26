# pull latest mysql image
FROM ubuntu

# maintainer
LABEL MAINTAINER="Nayan"

RUN apt-get update && apt-get upgrade -y
RUN apt-get install mysql-server git curl -y
RUN git clone https://github.com/nayanlonkar/dev-ops

EXPOSE 8080/tcp
