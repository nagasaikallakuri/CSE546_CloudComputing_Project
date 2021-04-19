const express  = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/doctorsignup',authController.doctorsignup)
  
router.post('/patientsignup',authController.patientsignup)





module.exports = router;