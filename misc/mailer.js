const smtp = require('nodemailer-smtp-transport');
const xoauth2 = require('xoauth2');
const nodemailer = require('nodemailer');
const mailerhbs = require('nodemailer-express-handlebars');
const Student = require('../models/Student');

exports.emailVerification = function(req,res){
    const emailId = req.body.emailId;
    const secretToken = req.body.secretToken;
    const check = false;
          const transporter = nodemailer.createTransport(smtp({
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
          transporter.use("compile",mailerhbs({
              viewEngine:{
                extName:'.hbs',
                partialsDir:"/home/chiggi/Desktop/backend-version-2.0/misc",
                layoutsDir:"/home/chiggi/Desktop/backend-version-2.0/misc",
                defaultLayout:"emailVerification.hbs"
              },
              viewPath:"/home/chiggi/Desktop/backend-version-2.0/misc",
              extName:'.hbs'
          }));
          // console.log(u);
          // if (u!==undefined){
              const mailOptions = {
                from: 'CS18B006 CHIRAG GUPTA <cs18b006@iittp.ac.in>',
                to: emailId,
                subject: 'Email verification',
                template:"emailVerification",
                context:{
                    hostUrl:req.headers.host,
                    name:emailId,
                    token:secretToken
                }
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  res.status(404).json({error:error.message});
                } else {
                  console.log('Email sent');
                  console.log(info);
                  res.status(200).json({success:"Email has been sent successfully"});
                }
              });
      
      
    

}