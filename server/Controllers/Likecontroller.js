
const Like=require("../Models/Likeschema");

const savelikeuser=async(req,res)=>{
    console.log(req.body)
    
    // const savelikeid=new Like({
    //     userid:req.body.userid,
    //     guestid:req.body.guestid
    // })

    const{userid,guestid}=req.body

   let a= await Like.findOne({userid,guestid})
   if(!a){
    a = new Like({userid,guestid})
    await a.save()
    .then((result)=>{
        res.status(200).json({
            message:"You liked the user",
            data:result
        })
    })
    .catch((error)=>{
        res.status(500).json({
            message:error
        })
    })
   }else{
      
   }
}


const findliker=async(req,res)=>{
    // const guestid=req.body.id;

    await Like.find({}).populate("userid guestid")
    .then((result)=>{
        res.status(200).json({
            data:result
        })
    })
    .catch((error)=>{
        res.status(500).json({
            message:error
        })
    })

}



module.exports={savelikeuser,findliker}