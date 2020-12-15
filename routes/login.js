const Router=require("express");
const router=Router();
const bcrypt=require("bcryptjs");
const round=10;
const {Op}=require("sequelize");
const {user,login}=require("../sequelize");
const jwt=require('jsonwebtoken');

router.get("/",async (req,res)=>{
   
    const password=req.body.password;
    const email=req.body.email;
    console.log(typeof email);
    console.log("email",email);

    if (password===""|| email===""){
        res.status(400).json({message:"please enter email,password"});
        return
    }

    result=await user.findOne({
        where:{
            email:{
                [Op.eq]:email,
            }
        },
    }).then((result)=>{
        // res=res.dataValues;
        if (result){
            return result.dataValues;
        }
    }).catch((err)=>{
        res.status(400).json({data:"incorrect credentials"});
        return
    });
    console.log(result);
    data=await login.findOne({
        where:{
                userId:{
                    [Op.eq]:result.id,
            },
        }
        }).then((data)=>{
                return data.dataValues;
        }).catch((err)=>{
            console.log("2");
                res.status(400).json({data:"incorrect credentials"});
                return
   });
  
    bcrypt.compare(password,data.hashedPassword,(err,pass)=>{
        if (pass){
            const token=jwt.sign({              
                    id:result.id,
                    admin:true
                },
                "secret",
                {
                    expiresIn:"4h"
                }
            
            );
            res.status(200).json({"message":"success","token":token});
            return                              
        }else{
            console.log("2");
            res.status(400).json({data:"incorrect credentials"});
            return
        }
    });

});

module.exports=router;
           