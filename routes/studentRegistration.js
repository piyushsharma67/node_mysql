const Router=require("express");
const router=Router();
const {Op}=require("sequelize");
const {Student}=require("../sequelize");

router.post("/",async (req,res)=>{
    const user=req.body.user;

    if (user.admin===false){
        res.status(200).json({message:"not authorized"});
        return
    }

    const student=req.body.student;
  
    if (student===""){
        res.status(400).json({message:"please provide student data"});
    }

    const studentsToBeRegistered=[];
    const studentAlreadyRegistered=[];
    console.log("student data length",student.length);
    for (i=0;i<student.length;i++){
       const id=student[i].admissionNo;
       console.log("id",id);
        await Student.findOne({
            where:{
                admissionNo:id
            },
        }).then((result)=>{
           console.log(result);
            if (result==null){
              
                studentsToBeRegistered.push(student[i]);
            }
            else{
               
                studentAlreadyRegistered.push(student[i]);
            }
        }).catch((err)=>{
            console.log(err);
        });
        
    
    }
    console.log(studentsToBeRegistered);
    console.log(studentAlreadyRegistered);
    const register=await Student.bulkCreate(studentsToBeRegistered)
    .catch((err)=>{
        console.log("error occured");
    });

    res.status(200).json({"students_Registered":studentsToBeRegistered,"students_already_registered":studentAlreadyRegistered});
    return   

});

module.exports=router;