const express  = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/patientsignup',(req,res)=>{
    res.render('patientsignup');
});
router.get('/doctorsignup',(req,res)=>{
    res.render('doctorsignup');
});
router.get('/login',(req,res)=>{
    res.render('login');
});

module.exports = router;