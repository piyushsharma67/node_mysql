const express=require("express");
const bodyParser=require("body-parser");
const signup=require("./routes/signUp");
const login=require("./routes/login");
const checkAuth=require("./middleware/checkAdmin")
const studentRegister=require("./routes/studentRegistration");




const app=express();
app.use(bodyParser.json());

app.use("/signup",signup);
app.use("/login",login);
app.use('/student/register',checkAuth,studentRegister);


const port=2000;
app.listen(port,()=>{
    console.log(`running on port ${port}`);
})

