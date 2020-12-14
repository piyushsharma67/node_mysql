const Sequelize=require("sequelize");

module.exports=(sequelize,Datatype)=>{
    return sequelize.define("Login",{
        id:{
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        hashedPassword:Datatype.TEXT,
        userId:Datatype.UUID,

    });
};