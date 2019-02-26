# MongoDB replica set

Simple MongoDB replica set docker compose file.

In order to use Transaction function in MongoDB, you need a set of a replicated databases named MongoDB replica set.

This project makes it easy to build a MongoDB replica set circumstances by using docker container.




```

# mongo localhost:40000
> use admin
> db.runCommand({ addshard: 'rs0/localhost:27020,localhost:27021'})
> db.runCommand({ addshard: 'rs1/localhost:27030,localhost:27031'})
> db.runCommand({ enablesharding: 'test'})
> db.runCommand({ shardcollection: 'test.user', key: {name: 1}})

```