const Sequelize=require("sequelize");
const userModel= require("./models/user");
const loginModel=require("./models/loginCredentials");

const sequelize=new Sequelize("testdata","root","123456789",{
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

const user=userModel(sequelize,Sequelize);
const login=loginModel(sequelize,Sequelize);

user.hasOne(login,{foreignKey:"userId"});
login.belongsTo(user,{foreignKey:"userId"});

sequelize.sync()
.then(()=>{
    console.log("database synced to server");
});

module.export={
    user,
    login
};

