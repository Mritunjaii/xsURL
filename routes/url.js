const express=require('express');
const routes=express.Router();
const shortid=require('shortid');
const urlModel = require('../models/url.model');


routes.get('/',(req,res)=>{
    res.render('home');
    
})

routes.post('/xx',async(req,res)=>{
    const {ogURL}=req.body;
    const shortID=shortid.generate();
    
    if (!ogURL || typeof ogURL !== 'string') {
        return res.status(400).json({ 
            error: 'ogURL must be a valid string' 
        });
    }

    const urlExist=await urlModel.findOne({
        ogURL:ogURL
    })
    if(!urlExist){
        const newXSURL=await urlModel.create({
            ogURL:ogURL,
            xsURL:shortID
        })
        console.log(req.url)// /xx
        // res.json({
        //     newXSURL,
        //     message:" created"
        // })
        console.log(newXSURL);
        const baseURL = `${req.protocol}://${req.get('host')}/`;
        const shortenedURL = `${baseURL}${newXSURL.xsURL}`;
        // res.json({
        //     YourURL:shortenedURL,
        //     message:" created"
        // })
        res.render('copyURL',{
            YourURL:shortenedURL
        })
    }else{
        const baseURL = `${req.protocol}://${req.get('host')}/`;
        const shortenedURL = `${baseURL}${urlExist.xsURL}`;
        // res.json({
        //     YourURL:shortenedURL,
        //     message:"prev created"
        // })
        res.render('copyURL',{
            YourURL:shortenedURL
        })
    }
})



routes.get('/:id',async(req,res)=>{
    const reURL=await urlModel.findOne({
        xsURL:req.params.id
    })
    if (!reURL) {
        return res.status(404).render('broken404');
    }
    res.redirect(reURL.ogURL);
})


module.exports=routes;