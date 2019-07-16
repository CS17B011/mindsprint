const jwt = require('jwt-simple');
const secret = require('../../config/local-secret');
const Student = require('../../models/Student');
const bcrypt = require('bcrypt-nodejs');
const randomString = require('randomstring');
const smtp = require('nodemailer-smtp-transport');
const xoauth2 = require('xoauth2');
const nodemailer = require('nodemailer');
const mailerhbs = require('nodemailer-express-handlebars');
const emailExistence = require('email-existence');
// const sendVerificationEmail = require('./sendVerificationEmail');
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
    password = req.body.password,
    city = req.body.city,
    district = req.body.district,
    country = req.body.country,
    state = req.body.state

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
        console.log('currentUser',currentUser);
        if (currentUser){
            console.log("hello");
            return res.status(200).json({error:"email-Id is already in use"});
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
            emailId:emailId,
            city:city,
            district:district,
            country:country,
            state:state
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
        .then(async ()=>{
            
                    try{
                      const secretToken = newUser.secretToken;
                      const emailId = newUser.emailId;
                    
                      // var x = TokenForUser(newUser);
                      // req.headers.authorization = x
                      // console.log('inside register the req.headers looks like');
                      // console.log(req.headers);
                      // res.status(200).json({token:x});
                      const transporter = await nodemailer.createTransport(smtp({
                          service: 'gmail',
                          host:'smtp.gmail.com',
                          auth: {
                            xoauth2:xoauth2.createXOAuth2Generator({
                              user:"cs18b006@iittp.ac.in",
                              clientId:"141530558274-mcm7tdqrfl0rmu1cecghbsrr3ar1arcb.apps.googleusercontent.com",
                              clientSecret:"jgmF6ayErR8DTu7RgATowpY6",
                              refreshToken:"1/Sdz9xu3KWIV-4d67yTjNqCMtHJkblR4IwiPEbL40Yac"
                            })
                          }
                        }));
                      //   transporter.use("compile",mailerhbs({
                      //       viewEngine:{
                      //         extName:'.hbs',
                      //         partialsDir:"/home/chiggi/Desktop/mindsprint-backend-version-2.0/misc",
                      //         layoutsDir:"/home/chiggi/Desktop/mindsprint-backend-version-2.0/misc",
                      //         defaultLayout:"emailVerification.hbs"
                      //       },
                      //       viewPath:"/home/chiggi/Desktop/mindsprint-backend-version-2.0/misc",
                      //       extName:'.hbs'
                      //   }));
                        // console.log(u);
                        // if (u!==undefined){
                      const mailOptions = {
                        from: 'CS18B006 CHIRAG GUPTA <cs18b006@iittp.ac.in>',
                        to: emailId,
                        subject: 'Email verification',
                        html: `<!doctype html>
                        <html>
                          <head>
                            <meta charset="utf-8">
                            <style amp4email-boilerplate>body{visibility:hidden}</style>
                            <script async src="https://cdn.ampproject.org/v0.js"></script>
                            <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
                          </head>
                          <body>
                            <div>
                                copy this <strong>${secretToken}</strong>
                            </div>
                            <div>
                                click  <a href = "http://localhost:3000/emailVerification" onclick = "console.log('choga')">here</a> and verify your email.
                            </div>
                            <div>Have a nice day.</div>
                            <script
                            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                            crossorigin="anonymous"
                            ></script>
                            <script
                            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                            crossorigin="anonymous"
                            ></script>
                            <script
                            src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                            crossorigin="anonymous"
                            ></script>

                          </body>
                        </html>`,
                        context:{
                            hostUrl:req.headers.host,
                            name:emailId,
                            token:secretToken
                        }
                      };
                      // transporter.verify()
                      emailExistence.check(emailId,async function(error,response){
                        console.log('response inside email-existence is',response);
                        try{
                          if (response){
                            await transporter.sendMail(mailOptions, async function(error, info){
                              try{
                                console.log('Email sent');
                                console.log(info);
                                res.status(200).json({success:"Email has been sent successfully for email Verification"});
                              }catch(err){
                                await Student.deleteOne({emailId:emailId});
                                console.log(error);
                                res.status(200).json({error:error.message});
                              }
    
                            });                    
                          }else{
                            await Student.deleteOne({emailId:emailId});
                            res.status(200).json({error:"Invalid email-Id"});
                          }
                        }catch(err){
                          await Student.deleteOne({emailId:emailId});
                          res.status(200).json({error:err.message});
                        }

                      });

                      
                    }catch(err){
                      await Student.deleteOne({emailId:emailId});
                      res.status(200).json({error:err.message});
                    }  
          
        })
        .catch(async (err)=>{
            // Student.remove({emailId:emailId});
            await Student.deleteOne({emailId:emailId});
            console.log('hehe');
            res.status(200).json({error:err.message});
        })

    });


}


//logic for login

exports.login = function(req,res,next){
    //user is already authenticated using isLogged in middleware
    //now we have to pass user with token so that they can make
    //authenticated requests
    
    res.status(200).json({token:TokenForUser(req.user),success:"You are successfully logged In.",emailId:req.user.emailId});
}

exports.logout =  function(req,res,next){
    console.log("inside logout");
    try{
        req.logout();
        res.status(200).json({success:"Successfully logged out"});
    }
    catch(err){
        res.status(200).json({error:err.message});
    }

}


exports.googleOAuth = function(req,res,next){
    //give token to user after authenticating by google
    //to make authenticated requests in future
    console.log('req.user is',req.user);
    res.status(200).json({token:TokenForUser(req.user),success:"You are successfully logged in using google account",emailId:req.user.emailId});
}


exports.facebookOAuth = function(req,res,next){
    //giving token to user after authenticating by facebook
    //to make authenticated requests in future
    console.log('req.user in facebook is',req.user);
    res.status(200).json({token:TokenForUser(req.user),success:"You are successfully logged in using facebook account",emailId:req.user.emailId});
}

exports.getVerificationResult = async function(req,res){
    const user=await Student.findOne({secretToken:req.body.secretToken});
    try{
        if (!user){
            return res.status(200).json({error:"Invalid token"});
        }
        if (user.active === true){
            return res.status(200).json({success:"Email has already been verified"});
        }
        user.active = true;
        user.secretToken = "";
        await user.save();
        res.status(200).json({success:"Email has been verified successfully",token:TokenForUser(user)});
        // res.redirect('/register');
    }catch(err){
        res.status(200).json({error:err.message});
    }
}
