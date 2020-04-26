# pull latest mysql image
FROM node

# maintainer
LABEL MAINTAINER="Nayan"

RUN apt-get update && apt-get upgrade -y
RUN apt-get install mysql-server git -y
RUN git clone https://github.com/nayanlonkar/dev-ops
RUN cd myApp && npm install 


EXPOSE 8080/tcp
