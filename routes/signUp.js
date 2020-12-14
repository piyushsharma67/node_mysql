const Router=require("express");
const router=Router();
const bcrypt=require("bcryptjs");
const round=10;

const {user,login}=require("../sequelize");
// const { request1 } = require("express");

router.post("/",async (req,res)=>{
    const name1=req.body.name;
    const age1=req.body.age;
    const password1=req.body.password;
    const email1=req.body.email;
    console.log("email",email1);

    if (name1===""|| age1===""|| password1===""|| email1===""){
        res.status(400).json({message:"please enter name,age,email,password"});
        return
    }

    result=await user.findOne({
        where:{
            email:req.body.email,
        },
    });

    result=result.dataValues;
    console.log(result);
    if (result.length===1){
        res.status(400).json({
            "message":"user already exists"
        })
    }

    let User=await user.create({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
    });
    User=User.dataValues;
  
    const pass= bcrypt.hashSync(password1,10);
 
    let Login1=await login.create({
       
        hashedPassword:pass,
        userId:User.id,
    });
    
    res.status(200).json({data:User});
    return
   
});

module.exports=router;