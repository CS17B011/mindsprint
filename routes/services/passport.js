const Student = require('../../models/Student');
const facebookConfig = require('../../config/facebook-secret');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const secret = require('../../config/local-secret');
const allLoginStrategies = {};
const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const facebookSecret = require('../../config/facebook-secret');
const googleSecret = require('../../config/google-secret');
//create local options
const localOptions = {usernameField:'emailId'};


//create local strategy
const localLogin = new LocalStrategy(localOptions,function(emailId,password,done){
    //verify email and password
    //step-1 find user with email id entered by user
    Student.findOne({'local.emailId':emailId},function(err,currentUser){
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
    jwtFromRequest:ExtractJwt.fromAuthHeaderWithScheme('JWT'),
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
    console.log('payload is');
    console.log(payload)
    Student.findById(payload.sub,function(err,currentUser){
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

//create google options

const googleOptions = {
    clientID:googleSecret.clientID,
    clientSecret:googleSecret.clientSecret
}

//Google OAuth strategy
const googlePlusLogin = new GooglePlusTokenStrategy(googleOptions,async (accessToken,refreshToken,profile,done)=>{
    try{
        console.log('accessToken',accessToken);
        console.log('refreshToken',refreshToken);
        console.log('profile',profile);
        
        //check whether this user exists in our database
        await Student.findOne({'local.emailId':profile.emails[0].value},async function(err,existingUser){
            if (err){
                return done(err,false,err.message);
            }
            console.log('existingUseris',existingUser);
            if (existingUser){
                console.log('part 1 done existingUseris');
                console.log('existingUser.google is',existingUser.google.id);
                if (existingUser.google.id === undefined){
                    console.log('part 2 done existingUseris');
                    existingUser.google = {
                            id:profile.id,
                            email:profile.emails[0].value
                        }
                    existingUser.method="google";
                    await existingUser.save();
                }
                return done(null,existingUser);
            }
            done(null,false);
        });
    }catch(error){
        done(error,false,error.message);
    }

});


//create facebook options
const facebookOptions = {
    clientID:facebookSecret.clientID,
    clientSecret:facebookSecret.clientSecret
}

//create facebookLogin strategy

const facebookLogin = new FacebookTokenStrategy(facebookOptions
,async function(accessToken,refreshToken,profile,done){
    try{
        console.log('accessToken',accessToken);
        console.log('refreshToken',refreshToken);
        console.log('profile',profile);

        //check whether this user exists in our database
        await Student.findOne({'local.emailId':profile.emails[0].value},async function(err,existingUser){
            if (err){
                return done(err,false,err.message);
            }
            console.log('existingUseris',existingUser);
            if (existingUser){
                console.log('part 1 done existingUseris');
                console.log('existingUser.facebook is',existingUser.facebook.id);
                if (existingUser.facebook.id === undefined){
                    console.log('part 2 done existingUseris');
                    existingUser.facebook = {
                            id:profile.id,
                            email:profile.emails[0].value
                        }
                    existingUser.method="facebook";
                    await existingUser.save();
                }
                return done(null,existingUser);
            }
            done(null,false);
        });
    }catch(error){
        done(error,false,error.message);
    }
});


allLoginStrategies.localLogin = localLogin;
allLoginStrategies.jwtLogin = jwtLogin;
allLoginStrategies.googlePlusLogin=googlePlusLogin;
allLoginStrategies.facebookLogin = facebookLogin;
//telling passport to use allLoginStrategies
// passport.use(jwtLogin);
// passport.use(localLogin);




module.exports = allLoginStrategies;
