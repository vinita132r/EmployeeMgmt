<<<<<<< HEAD:server/Models/Updatenotifyschema.js
var mongoose = require("mongoose");

var UpdatenotifySchema = mongoose.Schema({
    employeeid: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"users"
    },
    message: {
        type: String,
        required:true
    },
    read: {
        type: Boolean,
        default: false
    },
    createdat: {
        type:Date,
        default:Date.now
    }

})

const notifyUpdates = mongoose.model("notifyupdates",UpdatenotifySchema)

=======
var mongoose = require("mongoose");

var UpdatenotifySchema = mongoose.Schema({
    employeeid: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"users"
    },
    message: {
        type: String,
        required:true
    },
    read: {
        type: Boolean,
        default: false
    },
    createdat: {
        type:Date,
        default:Date.now
    }

})

const notifyUpdates = mongoose.model("notifyupdates",UpdatenotifySchema)

>>>>>>> 61ec3471 (second commit):EmployeeDetails Database/Models/Updatenotifyschema.js
module.exports=notifyUpdates;