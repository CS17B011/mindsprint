const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const StudentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  Class: {
    type: Number,
    required: true
  },
  schoolName: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true,
    unique:true,
    lowercase:true
  },
  password: {
    type: String,
    required: true
  },
  organizerId: {
    type: String,
    default: ""
  },
  date: {
    type:Date,
    default: Date.now()
  }
});

//pre hooks 
//the below function will run just before creation of model and before 
//saving of new user in database
//before saving of user in database, below function will automatically convert 
//password into a hash using bcrypt-nodejs library
//here async means asyncrounous (it will make function asyncrounous)
//await keyword will ensure that next line of code will not run until that part
//is completed
//here when next will run basicall res.save().then() will run which i have done in registration logic
StudentSchema.pre('save',async function(next){
    const user = this;
    //salt gets created
    await bcrypt.genSalt(12,async function(err,salt){
      if (err){
        return next(err);
      }
      await bcrypt.hash(user.password,salt,null,function(err,hash){
        if (err){
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
});



//this is the way to define methods in schemas
//in this i have created a method called comparePassword which will check
//passwords while logging,here callback basically refers to done
StudentSchema.methods.comparePassword = async function(candiatePassword,callback){

  await bcrypt.compare(candiatePassword,this.password,function(err,result){
    if (err){
      return callback(err,false);
    }
    return callback(null,result);
  });
}


const student = mongoose.model('Student', StudentSchema);
module.exports = student;