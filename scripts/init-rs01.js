rs.initiate(
   {
      _id: "rs01",
      version: 1,
      members: [
         { _id: 0, host : "basehost:27117" },
         { _id: 1, host : "basehost:27118" },
         { _id: 2, host : "basehost:27119", arbiterOnly: true },

      ]
   }
)


// rs.initiate(
//    {
//       _id: "rs01",
//       version: 1,
//       members: [
//          { _id: 0, host : "rs01a:27017" },
//          { _id: 1, host : "rs01b:27017" },
//          { _id: 2, host : "rs01c:27017", arbiterOnly: true },

//       ]
//    }
// )
