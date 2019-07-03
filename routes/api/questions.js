const express = require('express');
const router = express.Router();

const Query = require('../../models/Query.js');

router.get('/', (req,res) => {
  Query.find()
      //.filter({answer:{$ne:""}})
      .then((questions) => res.json(questions))
});

router.post('/', (req,res) => {
  const newQuery = Query({
    question: req.body.question,
    email: req.body.email
  });
  newQuery.save().then(ques => res.json(ques));
});

router.post('/:id', (req,res) => {

  Query.updateOne({"_id": req.params.id},
      {$set: {"answer": req.body.answer}})
      .then(answer => res.json(answer));
});

router.delete('/:id',(req,res) => {
	Item.findById(req.params.id)
		.then(item => Query.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success:false}));
});

module.exports = router
