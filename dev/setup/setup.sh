#!/bin/sh
echo ************************************
echo Starting the replica Set
echo ************************************

sleep 5 | echo Sleeping 5

mongo mongodb://mongo-rs0-1:27017 mongoSetup.js

sleep 10 | echo Sleeping 10

mongo --host `mongo mongo-rs0-1:27017 --quiet --eval "db.isMaster()['primary']"` dbSetup.js