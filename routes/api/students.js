const express = require('express');
const router = express.Router();
const Student = require('../../models/Student');

// @route GET api/students
// @desc Get all students
// @ access Public
router.get('/',(req,res) => {
	Student.find()
		.then(students => res.json(students))
		.catch(err => res.status(404).json({msg:"Database Error: Data not received from database"}));
});

// @route POST api/students
// @desc Post create a new student
// @ access Public
router.post('/', (req,res) => {
  Student.findOne({emailId: req.body.emailId})
      .then(user => {
        if(user) return res.status(400).json({msg: 'User already exist'});});
  newStudent = Student({
    fullName: req.body.fullName,
    class: req.body.class,
    schoolName: req.body.schoolName,
    district: req.body.district,
    state: req.body.state,
    phoneNo: req.body.phoneNo,
    emailId: req.body.emailId,
    password: req.body.password,
    organizerId: req.body.organizerId ? req.body.organizerId : ""
  });
  newStudent.save()
      .then((student) => res.json(student))
      .catch((err) => res.status(400).json({msg:"couldn't insert got an error" + err}));
});

// @route DELETE api/students/id
// @desc Delete an existing student
// @ access Public
router.delete('/:id', (req,res) => {
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

module.exports = router;
