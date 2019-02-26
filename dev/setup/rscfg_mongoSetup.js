cfg = {
  _id: 'rscfg',
  members: [
    { _id: 0, host: 'mongo-rscfg-1:27017' },
    { _id: 1, host: 'mongo-rscfg-2:27017' },
    { _id: 2, host: 'mongo-rscfg-3:27017'},
  ]
};
printjson(rs.initiate(cfg))

printjson(db.isMaster())

// cfg.protocolVersion = 1;
// rs.reconfig(cfg, { force: true });
