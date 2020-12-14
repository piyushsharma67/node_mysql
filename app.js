const express=require("express");
const bodyParser=require("body-parser");
const signup=require("./routes/signUp");
const login=require("./routes/login");




const app=express();
app.use(bodyParser.json());

app.use("/signup",signup);
app.use("/login",login);


const port=2000;
app.listen(port,()=>{
    console.log(`running on port ${port}`);
})

