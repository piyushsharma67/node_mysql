const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    try{
        const raw_Token=req.headers.authorization;
        const token=raw_Token.split(" ")[1];
        
        const decoded=jwt.verify(token,"secret");
        console.log(decoded);
        
        if (decoded.admin==true){
            req.body.user=decoded;
            console.log(req.body.student);
            next();
        }else{
            res.status(401).json({
                "message":"Unauthorized"
            });
        }
     
    }catch(error){
        res.json({
            "message":"Invalid Credentials"
        });
    }
}