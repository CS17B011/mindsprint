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


//authentication middlewares
const AuthenticatedUser = passport.authenticate('jwt',{session:false});
const isLoggedIn = passport.authenticate('local',{session:false});

//registration route

// @route POST api/students
// @desc Post create a new student
// @ access Public
router.post('/register',authRoutes.register);



//login route
router.post('/login',isLoggedIn,authRoutes.login);


router.get('/logout',authRoutes.logout);
// @route GET api/students
// @desc Get all students
// @ access Public
console.log("AuthenticatedUser");
console.log(AuthenticatedUser);
router.get('/',AuthenticatedUser,(req,res) => {
  console.log("inside all students");
  console.log(req.headers);
	Student.find()
		.then(students => res.json(students))
		.catch(err => res.status(404).json({error:"Database Error: Data not received from database"}));
});



// @route DELETE api/students/id
// @desc Delete an existing student
// @ access Public
router.delete('/:id',(req,res) => {
  Student.findById(req.params.id)
      .then(student => Student.deleteOne(student).then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success:false}));
});

// @route PUT api/students
// @desc Dont know what to do
// @ access Public
router.put('/',(req,res) => {
  console.log("Nothing to do");
  res.json({msg:"Nothing to do"});
});


router.post('/forgotpassword',forgotPasswordRoutes.forgotPassword)

module.exports = router;

