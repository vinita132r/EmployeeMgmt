var express=require("express");
var usercontroller=require("./Controllers/Usercontroller");
var likecontroller=require("./Controllers/Likecontroller");


var route=express.Router();

route.post('/reguser',usercontroller.upload2,usercontroller.saveuser);
route.post('/viewuser/:pid',usercontroller.viewuser);
route.post('/findalluser',usercontroller.findalluser);
route.post('/deleteuser/:pid',usercontroller.deleteuser);
route.post('/updateuser/:pid',usercontroller.updateuser);
route.post('/loguser',usercontroller.loginvalidateuser,);
route.post('/actuser/:pid',usercontroller.actuser,);

route.post('/likeuser',likecontroller.savelikeuser,);
route.post('/findliker',likecontroller.findliker,);


module.exports=route;