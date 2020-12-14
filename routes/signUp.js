const Router=require("express");
const router=Router();
const bcrypt=require("bcrypt");
const round=10;

const {user,login}=require("../sequelize");
const { request1 } = require("express");

router.post("/",async (request,res)=>{
    const name=request.body.name;
    const age=request.body.age;
    const password=request.body.password;
    const email=request.body.email;

    if (name==" "||age==" "||password==" "||email==" "){
        res.status(400).json({message:"please enter name,age,email,password"});
        return
    }
    let User=await user.create({
        name:request.body.name,
        age:request.body.age,
        email:request.body.email,
    });
    User=User.dataValues;
   
    console.log(password);
    const pass= bcrypt.hash(password,10,(err,hash)=>{
        if (err){
            console.log("error is",err);
        }
        else{
            login.hashedPassword=hash;
            console.log("hashed",login.hashedPassword);
        }
 
    });
    // console.log("pass",pass);
    let Login1=await login.create({
       
        hashedPassword,
        userId:User.id,
    });
    
    console.log("User is",User);
    res.status(200).json({data:Login1});
    return
    console.log("2");
    res.end();
 
});

module.exports=router;