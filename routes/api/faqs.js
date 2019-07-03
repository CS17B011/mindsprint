const express = require('express');
const router = express.Router();

const FAQ = require('../../models/FAQ.js');


//Route GET api/faqs
//Getting all FAQs
//Access Public
router.get('/', (req,res) => {
  FAQ.find()
    .then((questions) => res.json(questions))
});

//Route POST api/faqs
//Adding new FAQ
//Access Public(should be Private, Will added after validation)
router.post('/', (req,res) => {
  const newFAQ = FAQ({
    question: req.body.question,
    answer: req.body.answer ? req.body.answer : ""
  });
  newFAQ.save().then(ques => res.json(ques));
});


//Route UPDATE api/questions/id
//Update FAQ
//Access Public(should be Private, Will added after validation)
router.put('/:id', (req,res) => {
  FAQ.findByIdAndUpdate(req.params.id, {$set : req.body}, (err,ques) => {
    if(err)
    {
      res.status(400).json({ msg: `No member with id ${req.params.id}`});
    }
  });
  res.json(ques);
});


//Route DELETE api/questions/id
//Delete FAQ
//Access Public(should be Private, Will added after validation)
router.delete('/:id',(req,res) => {
	Item.findById(req.params.id)
		.then(item => FAQ.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success:false}));
});

module.exports = router
