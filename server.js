const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const passport=require('passport');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());
app.use(cors());
//Database URL
var dbUrl = require('./config/env').dbUrl;

//Connecting Database
mongoose.connect(dbUrl, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('Database is Connected...'))
    .catch((err) => console.log(err));

//API Routes
app.use('/api/questions', require('./routes/api/questions'));
app.use('/api/faqs', require('./routes/api/faqs'));
app.use('/api/students',require('./routes/api/students'));
app.use('/api/organizers',require('./routes/api/organizers'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));
