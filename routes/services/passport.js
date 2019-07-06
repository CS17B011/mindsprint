const User = require('../../models/Student');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const secret = require('../../config/secret');
const allLoginStrategies = {};



//create local options
const localOptions = {usernameField:'emailId'};


//create local strategy
const localLogin = new LocalStrategy(localOptions,function(emailId,password,done){
    //verify email and password
    //step-1 find user with email id entered by user
    User.findOne({emailId:emailId},function(err,currentUser){
        if (err){
            return done(err,false);
        }
        if (!currentUser){
            return done(null,false);
        }
        //Now use bcrypt library to compare two passwords
        currentUser.comparePassword(password,function(err,isMatch){
            if (err){
                return done(err,false);
            }
            if (!isMatch){
                return done(null,false);
            }
            return done(null,currentUser);
        });
    })
})


//create jwt options
const jwtOptions = {
    jwtFromRequest:ExtractJwt.fromHeader('authorization'),
    secretOrKey:secret.SECRET_KEY
}
console.log('jwtOptions is');
console.log(jwtOptions);


//create jwt strategy
//here payload(decoded web token) is the user with payload.sub as id and
//done is callback
const jwtLogin = new JwtStrategy(jwtOptions,function(payload,done){
    //see if the user with id  = payload.sub exits in database
    //if it exists ,then call done with user object
    //else call done without the user object
    console.log('hell');
    User.findById(payload.sub,function(err,currentUser){
        if (err){
            console.log(err);
            return done(err,false);
        }
        if (currentUser){
            console.log('currentUser is');
            console.log(currentUser);
            return done(null,currentUser);
        }
        console.log('not done');
        done(null,false); 
    });
});

allLoginStrategies.jwtLogin = jwtLogin;
allLoginStrategies.localLogin = localLogin;


module.exports = allLoginStrategies;
