#!/bin/sh
echo ************************************
echo Starting the replica Set
echo ************************************

docker exec mongo-rscfg-1 mongo mongoSetup.js

sleep 20 | echo Sleeping 20

primary=`docker exec mongo-rscfg-1 mongo admin --quiet --eval "db.isMaster()['primary']"`

docker exec mongo-rscfg-1 mongo dbSetup.js
docker exec mongo-rscfg-2 mongo dbSetup.js
