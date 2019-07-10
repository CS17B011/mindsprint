const smtp = require('nodemailer-smtp-transport');
const xoauth2 = require('xoauth2');
const nodemailer = require('nodemailer');
const mailerhbs = require('nodemailer-express-handlebars');
const Student = require('../../models/Student');

exports.forgotPassword = function(req,res){
    const emailId = req.body.emailId;
    const check = false;
    Student.findOne({emailId:emailId},function(err,currentUser){
      if (err){
        res.json({"error":"User with this email-Id doesn't exists in our records"});
      }else{
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
                partialsDir:"/home/chiggi/Desktop/mindsprint/server-end/routes/handlers",
                layoutsDir:"/home/chiggi/Desktop/mindsprint/server-end/routes/handlers",
                defaultLayout:"forgotPassword.hbs"
              },
              viewPath:"/home/chiggi/Desktop/mindsprint/server-end/routes/handlers",
              extName:'.hbs'
          }));
          // console.log(u);
          // if (u!==undefined){
              const mailOptions = {
                from: 'CS18B006 CHIRAG GUPTA <cs18b006@iittp.ac.in>',
                to: emailId,
                subject: 'Reset Password',
                template:"forgotPassword",
                context:{
                    hostUrl:req.headers.host,
                    name:emailId
                }
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  res.redirect("back");
                } else {
                  console.log('Email sent');
                  console.log(info);
                  res.redirect('/');
                }
              });
      }
      
    })

}