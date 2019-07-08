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
    answer: req.body.answer
  });
  newFAQ.save().then(ques => res.json(ques))
                .catch((err)=>{
                  res.json({"error":"something went wrong"})
                });
});


//Route UPDATE api/faqs/id
//Update FAQ
//Access Public(should be Private, Will added after validation)
router.put('/:id', (req,res) => {
  FAQ.updateOne({"_id": req.params.id},
      {$set: {"answer": req.body.answer}})
      .then(answer => res.json(answer))
      .catch(err => res.status(400).json({"error" : "Bad Request!!"}));
});


//Route DELETE api/faqs/id
//Delete FAQ
//Access Public(should be Private, Will added after validation)
router.delete('/:id',(req,res) => {
	FAQ.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success:false}));
});

module.exports = router;
