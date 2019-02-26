#!/bin/bash

docker-compose exec rs01a sh -c "mongo --port 27017 < /scripts/init-rs01.js"

sleep 10

docker exec rs01a mongo /scripts/db_setup.js
docker exec rs01b mongo /scripts/db_setup.js
