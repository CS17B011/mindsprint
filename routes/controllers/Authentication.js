const jwt = require('simple-jwt');
const secret = require('../../config/secret');
const User = require('../../models/Student');
//token gets created
//this below function will be called whenever
//a user is created in database
//after creation of user,token will
//be give to user so that he/she can make
//authenticated requests

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phoneRegex = /^[0]?[789]\d{9}$/;
const nameRegex = /^[a-zA-Z\s-, ]+$/;

const TokenForUser = (user)=>{
    const startDate = new Date().getTime();


    //sub here means subject(subject+SECRET_KEY gives token)
    //iat here means issued at timestamp
    // return jwt.encode({sub:user._id,iat:startDate},secret.SECRET_KEY);
    return jwt._base64EncodeObject({sub:user._id,iat:startDate},secret.SECRET_KEY);
}


//logic for registering
exports.register = function(req,res,next){
    console.log('req.body is');
    console.log(req.body);
    const fullName = req.body.fullName,
    Class = Number(req.body.Class),
    schoolName = req.body.schoolName,
    district = req.body.district,
    state = req.body.state,
    phoneNo = req.body.phoneNo,
    emailId = req.body.emailId,
    password = req.body.password,
    organizerId = req.body.organizerId;

    //i am assuming that we will use required attribute in all
    //input(wherever required) tags in html so that form will not be submitted unless
    //all required fields are filled

    if(!nameRegex.test(fullName))
      return res.status(400).json({msg:"Name is not is not valid",field:"fullName"});
    else if(isNaN(Class) || Class>12 || Class<1)
      return res.status(400).json({msg:"Class is not valid",field:"Class"});
    else if(!nameRegex.test(schoolName))
      return res.status(400).json({msg:"School Name is not valid",field:"schoolName"});
    else if(!nameRegex.test(district))
      return res.status(400).json({msg:"District is not valid",field:"district"});
    else if(!nameRegex.test(state))
      return res.status(400).json({msg:"State is not valid",field:"state"});
    else if(!phoneRegex.test(phoneNo))
      return res.status(400).json({msg:"phone No is not valid",field:"phoneNo"});
    else if(!emailRegex.test(emailId))
      return res.status(400).json({msg:"email Id is not valid", field:"emailId"});
    else if(password.length<8)
      return res.status(400).json({msg:"password should be minimum of 8 characters",field:"password"});



          //first we will find User by email in our records
          //we will find user using just email id (as it is unique)
    User.findOne({emailId:emailId},function(err,currentUser){
        if (err){
            return next(err);
        }
        //if user with same email id already exists
        //then return error
        if (currentUser){
            return res.status(422).json({"msg":"email-Id is already in use","field":"emailId"});
        }
        //else create new user and then assign token to
        //him so that he can make authenticated requests
        const newUser = new User({
            fullName:fullName,
            Class:Class,
            schoolName:schoolName,
            district:district,
            state:state,
            phoneNo:phoneNo,
            password:password,
            emailId:emailId,
            organizerId:organizerId
        });


        //saving of new user's data
        newUser.save()
        .then(()=>{
            res.status(200).json({token:TokenForUser(newUser)});
        })
        .catch((err)=>{
            res.status(400).json({msg:err.message});
        })

    });


}


//logic for login

exports.login = function(req,res,next){
    //user is already authenticated using isLogged in middleware
    //now we have to pass user with token so that they can make
    //authenticated requests
    console.log("inside login");
    console.log(req.headers);
    res.status(200).json({token:TokenForUser(req.user)});
}
