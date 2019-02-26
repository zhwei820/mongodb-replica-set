rs.initiate(
   {
      _id: "rs01",
      version: 1,
      members: [
         { _id: 0, host : "rs01a:27017" },
         { _id: 1, host : "rs01b:27017" },
         { _id: 2, host : "rs01c:27017", arbiterOnly: true },

      ]
   }
)
