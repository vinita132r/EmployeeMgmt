var mongoose=require("mongoose");

var LikeSchema=mongoose.Schema({
    userid: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"users"
    },
    guestid: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"users"
    },
    likestatus: {
        type:String,
        default:"pending",
        enum:["pending","accepted","rejected"]
    }

})

const Like=mongoose.model("likes",LikeSchema)

module.exports=Like;