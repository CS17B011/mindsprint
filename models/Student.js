const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const StudentSchema = new mongoose.Schema({
    registerType: {
      type: String,
      enum:['local','google','facebook']
    },
    fullName: {
    type: String,
    required:true
    },
    Class: {
      type: Number,
      required:true
    },
    schoolId: {
      type: String,
      required: true
    },
    phoneNo: {
      type: String,
      required:true
    },
    emailId: {
      type: String,
      lowercase:true,
      unique:true,
      required:true
    },
    password: {
      type: String,
      required:true
    },
    date: {
      type:Date,
      default: Date.now()
    },
    active:{
        type:Boolean,
        default:false
    },
    secretToken:{
        type:String,
        default:""
    },
    city:{
      type:String,
      required:true
    },
    district:{
      type:String,
      required:true
    },
    state:{
      type:String,
      required:true
    },
    country:{
      type:String,
      required:true
    }
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