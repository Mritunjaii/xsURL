const express=require('express');
const connectToDb=require('./config/db')
const dotenv=require('dotenv')
const app=express();
const urlRoutes=require('./routes/url')

dotenv.config();
connectToDb();

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/',urlRoutes)

// app.get('/',(req,res)=>{
//     res.send('राम  राम');
// })

app.listen(3000,()=>{
    console.log("Sever started at port 3000");
})