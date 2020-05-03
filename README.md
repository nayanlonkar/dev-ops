# DOS

Backend :- NodeJS + ExpressJs
Database :- mysql



To build the container, use the following command,

	$ docker build -t crud_image .

To run the container use,

	$ docker run -it -p 8080:8080 crud_image /bin/bash

where crud_image is name of the image I created. One can use another name.

This command will run the container and prompt to the container’s bash

	root@<container_id>:/# 

Now start the mysql service using following command
	
	root@<container_id>:/#  /etc/init.d/mysql start

Run the following script.

	root@<container_id>:/# mysql <  /dev-ops/script.sql

Now, run the server using
	
	root@<container_id>:  cd /dev-ops/myApp
	root@<container_id>:/dev-ops/myApp# node server.js

API’s calls -

Get All
	URL – http://localhost:8080/user

Get By Id or Get One
	URL – http://localhost:8080/user/:id

Post
	URL – http://localhost:8080/user

Put / Update
	URL – http://localhost:8080/user/:id

Delete
	URL – http://localhost:8080/user/:id




	
