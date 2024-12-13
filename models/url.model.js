const mongoose=require('mongoose');

const UrlSchema=new mongoose.Schema({
    ogURL:{
        type:String,
        required:true,
        unique:true
    },
    xsURL:{
        type:String,
        required:true
    },
});

const urlModel=mongoose.model('url',UrlSchema);

module.exports=urlModel;
