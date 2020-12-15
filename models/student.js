const Sequelize=require("sequelize");
const uuid = require('uuid');

module.exports=(Sequelize,dataTypes)=>{
    const student=Sequelize.define("students",{
        id: {
            type: dataTypes.UUID,
            defaultValue: dataTypes.UUIDV1,
            primaryKey: true,
            unique:true,
          },
        name:dataTypes.STRING,
        studentClass:dataTypes.STRING,
        age:dataTypes.STRING,
        admissionNo:{
            type:dataTypes.STRING,
            unique:true,
        }    
    });
    return student;
};