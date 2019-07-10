const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const passport=require('passport');
const passportService = require('./routes/services/passport');
const authRoutes = require('./routes/controllers/Authentication');
const googleSecret = require('./config/google-secret');

//telling app to use as middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());
app.use(cors());


//Database URL
var dbUrl = require('./config/env').dbUrl;

//telling passport to use strategies
passport.use('googleToken',passportService.googlePlusLogin);
passport.use('facebookToken',passportService.facebookLogin);
//custom middleware
const errorHandling = function(err,req,res,next){
    if (req.autherror){
        return res.status(404).json({error:req.autherror,token:null,emailId:req.emailId});
    }
    return next();
}


const passportGoogle = passport.authenticate('googleToken',{session:false,failWithError:true});
const passportFacebook = passport.authenticate('facebookToken',{session:false,failWithError:true});


//creating a fresh accessToken
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

//Connecting Database
mongoose.connect(dbUrl, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('Database is Connected...'))
    .catch((err) => console.log(err));

//API Routes
app.use('/api/questions', require('./routes/api/questions'));
app.use('/api/faqs', require('./routes/api/faqs'));
app.use('/api/students',require('./routes/api/students'));
app.use('/api/organizers',require('./routes/api/organizers'));

app.post('/oauth/google',passportGoogle,errorHandling,authRoutes.googleOAuth);
app.post('/oauth/facebook',passportFacebook,errorHandling,authRoutes.facebookOAuth);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));