const { models } = require('mongoose');
var User = require('../Models/Userschema');

const multer=require('multer');
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "./upload");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
const upload2 = multer({ storage: storage }).single("file");




const saveuser= async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    let image = req.file;

    const u=new User({
        empname:req.body.empname,
        age:req.body.age,
        empid:req.body.empid,
        typeofemp:req.body.typeofemp,
        email:req.body.email,
        password: req.body.password,
        image:req.file
    })

    const user1= await u.save()

    .then((result)=>{
        res.status(200).json({
            message:"Success"
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:"Warning"
        })
    })
}

const viewuser= async(req,res)=>{
    const id=req.params.pid;

    try{
        const data=await User.findById({"_id":id})
        res.status(200).json({
            result:data
        })
    }
    catch{
        res.status(500).json({
            message:"User Not Found"
        })
    }
}   
    
const findalluser= (req,res)=>{
    User.find({})
    .then((result)=>{
        res.status(200).json({
            data:result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:err
        })
    })
}

const deleteuser = async(req,res)=>{
    const id=req.params.pid;
    await User.findByIdAndDelete({"_id":id})
    .then((result)=>{
        res.status(200).json({
            data:result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:err
        })
    })

}

const updateuser= async(req,res)=>{
    const id=req.params.pid;
    await User.findByIdAndUpdate({"_id":id},{"empname":empname},{"age":age},{"empid":empid},{"typeofemp":typeofemp},{"email":email},{"password":password},{new:true})
    .then((result)=>{
        res.status(200).json({
            data:"successfully updated"
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:err
        })
    })
}

const loginvalidateuser=async(req,res)=>{
    console.log(req.body);
    const {email,password}=req.body;

    await User.findOne({email:email})
    .then((result)=>{
        console.log(result)
        if(!result){
            res.status(404).json({
                message:"User not found"
            })
        }else if(result.email!=email){
            res.status(500).json({
                message:"Wrong username or email"
            })
        }else if(result.password!=password){
            res.status(500).json({
                message:"Wrong password"
            })
        }else{
            res.status(200).json({
                message:"Login successfull",
                data:result
            })
        }
    })
    .catch((error)=>{
        message:error
    })

    
        
    
    

    // if(logemail!="email"){
    //     res.status(500).json({
    //         message:"Wrong username"
    //     })
    // }else if(logpassword!="password"){
    //     res.status(500).json({
    //         message:"Wrong password"
    //     })
    // }else{
    //     res.status(200).json({
    //         message:"Login success"
    //     })
    // }
}


const actuser=async(req,res)=>{
    const id=req.params.pid
    await User.findByIdAndUpdate({"_id":id},{$set: {isActive:!req.body.isActive}},{new:true})
    .then((result)=>{
            res.status(200).json({
                isActive:!result.isActive
            })
    })
    .catch((error)=>{
        res.status(500).json({
            message:error
        })
    })
}


module.exports={saveuser,viewuser,findalluser,deleteuser,updateuser,upload2,loginvalidateuser,actuser};
