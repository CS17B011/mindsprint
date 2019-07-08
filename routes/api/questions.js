const express = require('express');
const router = express.Router();
var ObjectID = require('mongodb').ObjectID;

const Query = require('../../models/Query.js');

//Route GET api/questions
//Getting all Asked Questions
//Access Public
router.get('/', (req,res) => {
  Query.find( )
      .sort({ date: -1 })
      .then((questions) => res.json(questions))
});

//Route POST api/questions
//Adding new Question
//Access Public(Should be User Specific,will be added after validation)
router.post('/', (req,res) => {
  const newQuery = Query({
    question: req.body.question,
    email: req.body.email
  });
  newQuery.save().then(ques => res.json(ques));
});

//Route PUT api/questions/id
//Updating new Question
//Access Public(Should be Private)
router.put('/:id', (req,res) => {

  Query.updateOne({"_id": req.params.id},
      {$set: {"answer": req.body.answer , "date" : Date.now()}})
      .then(answer => res.json(answer))
      .catch(err => res.status(400).json({"msg" : "Bad Request!!"}));
});

//Route DELETE api/questions/id
//Delete Question
//Access Public(Should be User Specific,will be added after validation)
router.delete('/:id',(req,res) => {
	Query.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success:false}));
});

module.exports = router;
