use admin;

db.auth("fire","fire123")

rs.initiate(
    {
       _id: "rs0",
       version: 1,
       members: [
          { _id: 0, host : "localhost:27017" },
       ]
    }
  );

db.auth("fire","fire123")  
rs.add("localhost:27018")
exit




