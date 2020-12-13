const Sequelize = require("sequelize");

module.export=(sequelize,Datatype)=>{
    const user=sequelize.define("User",{
        id:{
            type:Datatype.UUID,
            unique:true,
            primaryKey:true,
            autoIncrement:true,

        },
        name:Datatype.String(255),
        age:Datatype.String,
        email:{
            type:Datatype.String,
            unique:true,
        },

    });
   return user;
};

