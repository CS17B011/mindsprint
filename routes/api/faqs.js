const express = require('express');
const router = express.Router();

const FAQ = require('../../models/FAQ.js');

router.get('/', (req,res) => {
  FAQ.find()
      .then((questions) => res.json(questions))
});

router.post('/', (req,res) => {
  const newFAQ = FAQ({
    question: req.body.question,
    password: req.body.password
  });
  newFAQ.save().then(ques => res.json(ques));
});

router.post('/:id', (req,res) => {

  FAQ.updateOne({"_id": req.params.id},
      {$set: {"answer": req.body.answer}})
      .then(answer => res.json(answer));
});

router.delete('/:id',(req,res) => {
	Item.findById(req.params.id)
		.then(item => FAQ.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success:false}));
});

module.exports = router
