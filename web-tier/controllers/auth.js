const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});

exports.doctorsignup=(req,res)=>{
const{doctor_first_name,doctor_last_name,doctor_email,doctor_phone_number,doctor_password,
    doctor_confirm_password,doctor_address,doctor_address_2,doctor_city,doctor_state,
    doctor_zip,doctor_id,doctor_available_from,doctor_available_to}=req.body;

     db.query('SELECT email FROM users WHERE email = ?',[doctor_email],async(error,result)=>{
         if(error){
             console.log(error);
         }
         if(result.length>0){
             return res.render('doctorsignup',{
                 message:'That email is already in use'
             });
         } else if(doctor_password !== doctor_confirm_password){
            return res.render('doctorsignup',{
                message:'Passwords do not match'
            });    
        }
        let usertype="doctor"
        let hashedpassword = await bcrypt.hash(doctor_password,8);
        db.query('INSERT INTO users SET ? ',{name:doctor_first_name,email:doctor_email,password:hashedpassword,usertype:usertype })
        // .then(()=>{
        //     db.query("SELECT userid FROM users WHERE email=doctor_email", (err,resl)=>{
        //         console.log(resl);
        //     });
        // })
        // db.query("SELECT userid FROM users WHERE email=doctor_email",async (err,resl)=>{
        // let userid=resl;
        // await db.query('INSERT INTO users SET ? ',{fname:doctor_first_name,lname:doctor_last_name,
        //     email:doctor_email,password:hashedpassword,userid:userid,phonenumber:doctor_phone_number,
        //     address1:doctor_address,address2:doctor_address_2,city:doctor_city,state:doctor_state,zip:doctor_zip,
        //     upin:doctor_id,availablefrom:doctor_available_from,availableto:doctor_available_to})           
        // });
        res.render('login',{
            message:'Registered Successful and you can Login'
        });
     })

    //console.
   console.log(req.body);
   console.log(req.body.first_name);
   
   //res.render('login');
    //We have to do Login page render inside post
    //res.render('index');
}
exports.patientsignup=(req,res)=>{
    const{patient_first_name,patient_last_name,patient_email,patient_phone_number,patient_password,
        patient_confirm_password}=req.body;
    //console.
   console.log(req.body);
   console.log(req.body.first_name);

   res.render('login');
    //We have to do Login page render inside post
    //res.render('index');
}