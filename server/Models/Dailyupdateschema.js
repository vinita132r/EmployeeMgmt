<<<<<<< HEAD:server/Models/Dailyupdateschema.js
var mongoose = require("mongoose");

var DailyUpdateSchema = mongoose.Schema({
    updatedate: {
        type:Date,
        required:true
    },
    dailyupdate: {
        type:String,
        required:true
    },
    employeeid: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"users"
    },
    verifiedate: {
        type:Date,
        default:null
    },
    status: {
        type: String,
        enum: ["pending", "verified"],
        default: "pending"
    }

})

const dailyUpdate = mongoose.model("dailyupdates",DailyUpdateSchema)

=======
var mongoose = require("mongoose");

var DailyUpdateSchema = mongoose.Schema({
    updatedate: {
        type:Date,
        required:true
    },
    dailyupdate: {
        type:String,
        required:true
    },
    employeeid: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"users"
    },
    verifiedate: {
        type:Date,
        default:null
    },
    status: {
        type: String,
        enum: ["pending", "verified"],
        default: "pending"
    }

})

const dailyUpdate = mongoose.model("dailyupdates",DailyUpdateSchema)

>>>>>>> 61ec3471 (second commit):EmployeeDetails Database/Models/Dailyupdateschema.js
module.exports=dailyUpdate;