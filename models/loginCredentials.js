const Sequelize=require("sequelize");

module.export=(sequelize,Datatype)=>{
    return sequelize.define("User",{
        
        hashedPassword:Datatype.STRING,
        userId:Datatype.UUID,
    });
};