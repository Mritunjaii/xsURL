const mongoose=require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.MONGO_URL.replace('<PASSWORD>',process.env.DB_PASSWORD)).then(()=>{
        console.log("Connected to db");
    })
}

module.exports=connectToDb;
