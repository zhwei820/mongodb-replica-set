
res = db.getSiblingDB('admin').createUser({
    user: 'root',
    pwd: 'l4D7EiDYPj',
    roles: [{ role: 'root', db: 'admin' }]
  })
  printjson(res)
  
  
  // res = db.getSiblingDB('testa').createUser({
  //   user: 'test1',
  //   pwd: 'testtest',
  //   roles: ['readWrite', 'userAdmin'],
  //   mechanisms : ['SCRAM-SHA-1'] 
  // })
  // printjson(res)
  