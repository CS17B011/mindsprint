const jwt = require('jwt-simple');
const secret = require('../../config/local-secret');
const Student = require('../../models/Student');
const bcrypt = require('bcrypt-nodejs');
const randomString = require('randomstring');
//token gets created
//this below function will be called whenever
//a user is created in database
//after creation of user,token will
//be give to user so that he/she can make
//authenticated requests


const TokenForUser = (user)=>{

    const startDate = new Date().getTime();
    console.log('startDate is',startDate);
    console.log('user is',user);
    //sub here means subject(subject+SECRET_KEY gives token)
    return jwt.encode({sub:user._id,iat:startDate},secret.SECRET_KEY);
}


//logic for registering
exports.register = function(req,res,next){
    // console.log('req.body is');
    // console.log(req.body);
    const fullName = req.body.fullName,
    Class = req.body.Class,
    schoolId = req.body.schoolId,
    phoneNo = req.body.phoneNo,
    emailId = req.body.emailId,
    password = req.body.password

    //i am assuming that we will use required attribute in all
    //input(wherever required) tags in html so that form will not be submitted unless
    //all required fields are filled


    //first we will find User by email in our records
    //we will find user using just email id (as it is unique)

    Student.findOne({'emailId':emailId},async function(err,currentUser){
        if (err){
            return next(err,false);
        }
        //if user with same email id already exists
        //then return error
        if (currentUser){
            return res.status(422).json({"error":"email-Id is already in use"});
        }
        //else create new user and then assign token to
        //him so that he can make authenticated requests
        var newUser = new Student({
            registerType:"local",
            fullName:fullName,
            Class:Class,
            schoolId: schoolId,
            phoneNo:phoneNo,
            password:password,
            emailId:emailId
        });

        //using bcrypt library to encode password
        await bcrypt.genSalt(12,async function(err,salt){
            if (err){
              return next(err);
            }
            await bcrypt.hash(password,salt,null,function(err,hash){
              if (err){
                return next(err);
              }
              newUser.password = hash;
            });
          });

          newUser.secretToken = randomString.generate();


        //saving of new user's data
        await newUser.save()
        .then(()=>{
            var x = TokenForUser(newUser);
            req.headers.authorization = x
            console.log('inside register the req.headers looks like');
            console.log(req.headers);
            res.status(200).json({token:x});
        })
        .catch((err)=>{
            Student.remove({emailId:emailId});
            res.status(400).json({error:err.message});
        })

    });


}


//logic for login

exports.login = function(req,res,next){
    //user is already authenticated using isLogged in middleware
    //now we have to pass user with token so that they can make
    //authenticated requests
    var x =TokenForUser(req.user);
    console.log("inside login");
    console.log(req.headers);
    req.headers.authorization=x;
    console.log("after adding token");
    console.log(req.headers);
    res.status(200).json({token:x});
}

exports.logout =  function(req,res,next){
    console.log("inside logout");
    try{
        req.logout();
        res.status(200).json({"msg":"Successfully logged out"});
    }
    catch(err){
        res.status(404).json({"error":err.message});
    }

}


exports.googleOAuth = function(req,res,next){
    //give token to user after authenticating by google
    //to make authenticated requests in future
    console.log('req.user is',req.user);
    res.status(200).json({token:TokenForUser(req.user)});
}


exports.facebookOAuth = function(req,res,next){
    //giving token to user after authenticating by facebook
    //to make authenticated requests in future
    console.log('req.user in facebook is',req.user);
    res.status(200).json({token:TokenForUser(req.user)});
}