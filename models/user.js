const Sequelize = require("sequelize");

module.exports=(sequelize,Datatype)=>{
    const user=sequelize.define("User",{
        id:{
            type:Datatype.UUID,
            defaultValue: Datatype.UUIDV1,
            unique:true,
            primaryKey:true,
            //autoIncrement:true,

        },
        name:Datatype.STRING,
        age:Datatype.STRING,
        email:{
            type:Datatype.STRING,
            unique:true,
        },

    });
   return user;
};

