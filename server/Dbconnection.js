var mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/employeeprojectdb");
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("Connection Successful!");
})

module.exports=db;