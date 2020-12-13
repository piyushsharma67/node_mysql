const express=require("express");
const app=express();
const bcrypt=require("bcrypt");
const round=10;


const {user,login}=require("../sequelize");
const { request } = require("express");




app.post("/signup",async (req,res)=>{

    const name=request.body.name;
    const age=request.body.age;
    const email=request.body.email;
    const password=request.body.password;

    if (name==""||age==""||password==""||email=="" ){
        res.sendStatus(400).json({message:"please enter name,age,email,password"});
    }

    let User=await user.create({
        name:name,
        age:age,
        email:email,
    })
    User=User.dataValue;

    const pass= bcrypt.hash(password,10,(err,hash)=>{
        if (err){
            console.log("error occured");
        }
        else{
            return hash;
        }
        
    });
   
    const login=await login.create({
       
        password:pass,
        userId:User.id,
    });



    res.sendStatus(200).json(User);
});


module.export=app;