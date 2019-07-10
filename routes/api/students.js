const express = require('express');
const router = express.Router();
const Student = require('../../models/Student');
const authRoutes = require('../controllers/Authentication');
const passportService = require('../services/passport');
const passport = require('passport');
const forgotPasswordRoutes=require('../controllers/forgotPassword');
const mailVerificationRoutes = require('../../misc/mailer');
//telling passport to use these strategies
passport.use(passportService.jwtLogin);
passport.use(passportService.localLogin);


//custom middleware
const errorHandling = function(err,req,res,next){
    if (req.autherror){
        return res.status(404).json({error:req.autherror});
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



router.post('/verifyEmail',mailVerificationRoutes.emailVerification);

router.get('/getVerificationResult/:secretToken',async function(req,res){
    const user=await Student.findOne({secretToken:req.params.secretToken});
    try{
        if (!user){
            res.status(422).json({error:"Invalid token"});
        }
        user.active = true;
        user.secretToken = "";
        await user.save();
        res.status(200).json({success:"Email has been verified successfully"});
    }catch(err){
        res.status(404).json({error:err.message});
    }
})

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