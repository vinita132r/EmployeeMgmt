var express=require("express");
var usercontroller=require("./Controllers/Usercontroller");
var likecontroller=require("./Controllers/Likecontroller");
const dailyupdate = require("./Controllers/Dailyupdatecontroller");


var route=express.Router();

route.post('/reguser',usercontroller.upload2,usercontroller.saveuser);
route.post('/viewuser/:pid',usercontroller.viewuser);
route.post('/findalluser',usercontroller.findalluser);
route.post('/deleteuser/:pid',usercontroller.deleteuser);
route.post('/updateuser/:pid',usercontroller.upload2,usercontroller.updateuser);
route.post('/loguser',usercontroller.loginvalidateuser,);
route.post('/actuser/:pid',usercontroller.actuser,);

route.post('/likeuser',likecontroller.savelikeuser,);
route.post('/findliker',likecontroller.findliker,);

route.post('/savedailyupdate/:pid',dailyupdate.savedailyupdate,);
route.post('/getallupdates/',dailyupdate.getallupdates,);
route.post('/verifyupdate/:pid',dailyupdate.verifyupdate,);
route.post('/getusernotifications/',dailyupdate.getusernotifications,);






module.exports=route;