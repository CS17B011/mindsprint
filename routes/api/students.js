const express = require('express');
const router = express.Router();
const User = require('../../models/Student');
const authRoutes = require('../controllers/Authentication');
const passport = require('passport');
const allLoginStrategies = require('../services/passport');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//telling passport to use allLoginStrategies
passport.use(allLoginStrategies.jwtLogin);
passport.use(allLoginStrategies.localLogin);

//authentication middlewares
const AuthenticatedUser = passport.authenticate('jwt',{session:false});
const isLoggedIn = passport.authenticate('local',{session:false});

//registration route

// @route POST api/students/register
// @desc Post create a new student
// @ access Public
router.post('/register',authRoutes.register);



//login route
router.post('/login',isLoggedIn,authRoutes.login);



// @route GET api/students
// @desc Get all students
// @ access Public
router.get('/',(req,res) => {
	User.find()
		.then(students => res.json(students))
		.catch(err => res.status(404).json({msg:"Database Error: Data not received from database"}));
});



// @route DELETE api/students/id
// @desc Delete an existing student
// @ access Public
router.delete('/:id', (req,res) => {
  User.findById(req.params.id)
      .then(student => User.deleteOne(student).then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success:false}));
});

// @route PUT api/students
// @desc Dont know what to do
// @ access Public
router.put('/',(req,res) => {
  console.log("Nothing to do");
  res.json({msg:"Nothing to do"});
});

module.exports = router;
