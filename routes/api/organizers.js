const express = require('express');
const router = express.Router();
const Organizer = require('../../models/Organizer');

// @route GET api/organizers
// @desc Get all organizers
// @ access Public
router.get('/',(req,res) => {
	Organizer.find()
		.then(organizers => res.json(organizers))
		.catch(err => res.status(404).json({msg:"Database Error: Data not received from database"}));
});

// @route POST api/organizers
// @desc Post create a new organizer
// @ access Public
router.post('/', (req,res) => {
  Organizer.findOne({organizerId: req.body.organizerId})
      .then(user => {
        if(user) return res.status(400).json({msg: 'User already exist'});});
  newOrganizer = Organizer({
    organizerId: req.body.organizerId, //Need to check whether it is valid
    name: req.body.name,
    password: req.body.password,
    address: req.body.address,
    contactNo: req.body.contactNo
    //NoOfStudentEnrolled is defaultly assigned to 0(Need to change this according to your logic)
  });
  newOrganizer.save()
      .then((organizer) => res.json(organizer))
      .catch((err) => res.status(400).json({msg:"couldn't insert got an error" + err}));
});

// @route DELETE api/organizers/id
// @desc Delete an existing organizer
// @ access Public
router.delete('/:id', (req,res) => {
  Organizer.findById(req.params.id)
      .then(organizer => Organizer.deleteOne(organizer).then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success:false}));
});

// @route PUT api/organizers
// @desc Dont know what to do
// @ access Public
router.put('/',(req,res) => {
  console.log("Nothing to do");
  res.json({msg:"Nothing to do"});
});

module.exports = router;
