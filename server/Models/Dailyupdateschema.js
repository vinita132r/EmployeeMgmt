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

module.exports=dailyUpdate;