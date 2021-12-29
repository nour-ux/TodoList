const mongoose =require('mongoose')
const dbURI='mongodb://localhost:27017/ToDolistV;1'

mongoose.connect(dbURI);

//connection test
const db=mongoose.connection;

db.on("error",(err)=>{

    console.log("Error in MongoDB");
});

db.on("connected",(err)=>{

    console.log("MongoDB is connected..");
});