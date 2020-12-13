const Sequelize=require("sequelize");

module.exports=(sequelize,Datatype)=>{
    return sequelize.define("Login",{
        id:{
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        hashedPassword:Datatype.STRING,
        userId:Datatype.UUID,

    });
};