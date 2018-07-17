const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')


//userModel Schema
const User = require('../models/user');

//connecting to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
mongoose.connection.on('connected',()=>console.log('Connected To Database'));
mongoose.connection.on('error',(err)=>console.log('DAtabse Connection Error'));
mongoose.connection.on('disconnected',()=>console.log('Database Disconnected'));


router.get('/',(request,response)=>{
    response.send("API Running")
})


function verifyToken(req,res,next){
    if (!req.headers.authorization){
        return res.status(401).send("Unauthorized Request");
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token == 'null'){
        return res.status(401).send("Unauthorized Request");
    }
    let payload = jwt.verify(token,'k0qsjsxeow');
    if(!payload){
        return res.status(401).send("Unauthorized Request");
    }
    req.userId = payload.subject;
    next();
}


//registration api
router.post('/register',(req,res)=>{
    let userData = req.body;
    let user = new User(userData);
    user.save((error,registeredUser)=>{
        if (error){
            console.log("Error",error);
        }
        else{
            let payload = { subject : registeredUser._id }
            let token = jwt.sign(payload,'k0qsjsxeow')
            res.status(200).send({token});
        }
    });
});


//login api
router.post('/login',(req,res)=>{
    let userData = req.body;
    User.findOne({email:userData.email},(error,user)=>{
        if(error){
            console.log(error);
        }
        else {
            if(!user){
                res.status(401).send("Invalid Email Id");
            }
            else if(user.password !== userData.password){
                res.status(401).send("Wrong Password");
            }
            else if(user.password == userData.password){
                let payload = { subject : user._id }
                let token = jwt.sign(payload,'k0qsjsxeow')
                res.status(200).send({token});
            }
        }
    });
});


//general and special api's
router.get('/all_properties',(req,res)=>{
    let data=[
        { name:'kinley',phone:'9478333381',price:'4500',locality:'law gate',city:'jalandhar',state:'punjab'},
        { name:'nokia',phone:'9478321381',price:'5000',locality:'law gate',city:'jalandhar',state:'punjab'},
        { name:'cola',phone:'924223381',price:'2500',locality:'chaheru',city:'phagwara',state:'punjab'},
        { name:'Aasiyaana',phone:'7478333381',price:'3000',locality:'law gate',city:'jalandhar',state:'punjab'},
        { name:'Rawat Villa',phone:'1478333381',price:'1500',locality:'chaheru',city:'phagwara',state:'punjab'},
        { name:'Galaxy Apartment',phone:'2478333381',price:'8500',locality:'atwal',city:'phagwara',state:'punjab'},
        { name:'Oyo rooms',phone:'9478333381',price:'8000',locality:'law gate',city:'jalandhar',state:'punjab'},
        { name:'Ziffy homes',phone:'0478333381',price:'5000',locality:'new bi line',city:'amritsar',state:'punjab'},
        { name:'wasera homes',phone:'4478333381',price:'10000',locality:'law gate',city:'jalandhar',state:'punjab'},
        { name:'Pepsi',phone:'6478333381',price:'5600',locality:'chaheru',city:'phagwara',state:'punjab'},
        { name:'cold drink',phone:'9478333381',price:'4100',locality:'law gate',city:'jalandhar',state:'punjab'},
      ];
    res.json(data);
});

router.get('/my_property',verifyToken,(req,res)=>{
    let events = [1,2,3,4,5,6,2,1,3,4,1,3,5,3,1,2,3,4,1,3,1,4,5];
    res.json(events.map(o=>o*10));
})


 //to export router
module.exports = router;







