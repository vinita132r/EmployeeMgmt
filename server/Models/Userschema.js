<<<<<<< HEAD:server/Models/Userschema.js
var mongoose=require("mongoose");

var UserSchema=mongoose.Schema({
    empname: {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    empid: {
        type:Number,
        required:true
    },
    typeofemp: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    image: {
        type:Object,
        required:true,
        default:null
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const User=mongoose.model('users',UserSchema);

=======
var mongoose=require("mongoose");

var UserSchema=mongoose.Schema({
    empname: {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    empid: {
        type:Number,
        required:true
    },
    typeofemp: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    image: {
        type:Object,
        required:true,
        default:null
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const User=mongoose.model('users',UserSchema);

>>>>>>> 61ec3471 (second commit):EmployeeDetails Database/Models/Userschema.js
module.exports=User;