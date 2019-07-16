const express = require('express');
const router = express.Router();
const Student = require('../../models/Student');
const authRoutes = require('../controllers/Authentication');
const passportService = require('../services/passport');
const passport = require('passport');
const forgotPasswordRoutes=require('../controllers/forgotPassword');
//telling passport to use these strategies
passport.use(passportService.jwtLogin);
passport.use(passportService.localLogin);


//custom middleware
const errorHandling = function(err,req,res,next){
    if (req.autherror){
        return res.status(200).json({error:req.autherror,token:null,access_token:req.body.access_token,emailId:req.autherror.emailId});
    }
    return next();
}

//authentication middlewares
// const AuthenticatedUser = passport.authenticate('jwt',{session:false});
// const isLoggedIn = passport.authenticate('local',{session:false});

//registration route
router.post('/register',authRoutes.register);
//login route
router.post('/login',passport.authenticate('local',{session:false,failWithError:true}),errorHandling,authRoutes.login);
//logout route
router.get('/logout',authRoutes.logout);



// router.post('/verifyEmail',mailVerificationRoutes.emailVerification);

// router.get('/getVerificationResult/:secretToken',authRoutes.getVerificationResult);


// get all Users
router.get('/',(req,res) => {
  console.log("inside all students");
  console.log(req.headers);
	Student.find()
		.then(students => res.json(students))
		.catch(err => res.status(404).json({error:"Database Error: Data not received from database"}));
});

router.post('/forgotpassword',forgotPasswordRoutes.forgotPassword)

module.exports = router;