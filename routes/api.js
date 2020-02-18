const express = require('express');
const router= express.Router();//for handling routes
const donorModel = require('../database/donorsModel');
const path = require('path');


//route for searching donors
router.get('/donors',(req,res)=>{
    donorModel.find(req.query,(err,donor)=>{
        res.send(donor);
    });
});

//router for adding donors in the db
router.post('/donors',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,'../public','home.html'));
    donorModel.create(req.body).then(donor=>{
        console.log('data sent');
    }).catch(next);
})


module.exports = router;