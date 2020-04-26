service mysql start && \
mysql -u root < /dev-ops/script_1.sql && \ 
mysql -u nayan < /dev-ops/script_2.sql  && \
cd /dev-ops/myApp && npm i &&  node server.js
