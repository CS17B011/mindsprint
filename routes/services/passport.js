const Student = require('../../models/Student');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const secret = require('../../config/local-secret');
const allLoginStrategies = {};
const FacebookTokenStrategy = require('passport-facebook-token');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const facebookSecret = require('../../config/facebook-secret');
const googleSecret = require('../../config/google-secret');


//create local options
const localOptions = {usernameField:'emailId',passReqToCallback:true};


//create local strategy
const localLogin = new LocalStrategy(localOptions,function(req,emailId,password,done){
    //verify email and password
    //step-1 find user with email id entered by user
    req.autherror = "";
    Student.findOne({'emailId':emailId},function(err,currentUser){
        console.log("hello");
        if (err){
            console.log("hello1");
            req.autherror = err.message;
            return done(err,false);
        }
        if (!currentUser){
            console.log("hello2");
            req.autherror = "user with this email-Id doesn't exists."
            return done(null,false);
        }
        // console.log('hello3');
        //Now use bcrypt library to compare two passwords
        currentUser.comparePassword(password,function(err,isMatch){
            if (err){
                req.autherror = err.message;
                return done(err,false);
            }
            if (!isMatch){
                req.autherror="Password doesn't match.";
                return done(null,false);
            }
            if (!currentUser.active){
                req.autherror = "Email-Id has to be verified first.";
                return done(null,false);
            }
            
            return done(null,currentUser);
        });
    })
})


//create jwt options
const jwtOptions = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    secretOrKey:secret.SECRET_KEY
}



//create jwt strategy
//here payload(decoded web token) is the user with payload.sub as id and
//done is callback
const jwtLogin = new JwtStrategy(jwtOptions,function(payload,done){
    //see if the user with id  = payload.sub exits in database
    //if it exists ,then call done with user object
    //else call done without the user object
    Student.findById(payload.sub,function(err,currentUser){
        if (err){
            return done(err,false);
        }
        if (currentUser){
            return done(null,currentUser);
        }
        return done(null,false);
    });
});







//create google options

const googleOptions = {
    clientID:googleSecret.clientID,
    clientSecret:googleSecret.clientSecret,
    passReqToCallback:true
}
console.log('googleOptions',googleOptions);

//Google OAuth strategy
const googlePlusLogin = new GooglePlusTokenStrategy(googleOptions,async function(req,accessToken,refreshToken,profile,done){
    try{
        console.log('accessToken',accessToken);
        console.log('refreshToken',refreshToken);
        console.log('profile',profile);
        req.autherror = "";
        //check whether this user exists in our database
        const existingUser = await Student.findOne({'emailId':profile.emails[0].value});
            try{
                if (existingUser){
                    console.log('yes');
                    if (!existingUser.active){
                        req.autherror = "Please verify your email first(locally)";
                        req.emailId = profile.emails[0].value;
                        return done(null,false);
                    }
                    return done(null,existingUser);
                }
                console.log('no');
                req.autherror = "User doesn't exists with this email-Id.Please use google account with registered email-Id.";
                req.emailId = profile.emails[0].value;
                console.log('req.autherror',req.autherror);
                console.log('req.emailId',req.emailId);
                return done(null,false);
            }catch(err){
                req.autherror = err.message;
                req.emailId = profile.emails[0].value;
                console.log('error');
                return done(err,false);
            }
    }catch(error){
        req.autherror = error.message;
        req.emailId = profile.emails[0].value;
        console.log("hello");
        done(error,false);
    }

});


//create facebook options
const facebookOptions = {
    clientID:facebookSecret.clientID,
    clientSecret:facebookSecret.clientSecret,
    passReqToCallback:true
}

//create facebookLogin strategy

const facebookLogin = new FacebookTokenStrategy(facebookOptions
,async function(req,accessToken,refreshToken,profile,done){
    try{
        console.log('accessToken',accessToken);
        console.log('refreshToken',refreshToken);
        console.log('profile',profile);
        req.autherror = ""
        //check whether this user exists in our database
        await Student.findOne({'emailId':profile.emails[0].value},async function(err,existingUser){
            if (err){
                req.autherror = err.message;
                req.emailId = profile.emails[0].value;
                return done(err,false);
            }
            console.log('existingUseris',existingUser);
            if (existingUser){
                if (!existingUser.active){
                    req.autherror = "Please verify your email first(locally)";
                    req.emailId = profile.emails[0].value;
                    return done(null,false);
                }
                return done(null,existingUser);
            }
            req.autherror = "User doesn't exists with this email-Id.Please use facebook account with registered email-Id."
            req.emailId = profile.emails[0].value;
            return done(null,false);
        });
    }catch(error){
        req.autherror = error.message;
        req.emailId = profile.emails[0].value;
        return done(error,false);
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