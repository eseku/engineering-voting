const mongoose = require('mongoose');
const validator = require('validator');
const candidateSchema = new mongoose.Schema({
  FirstName:{
    type:String,
    trim:true,
    required:true
  },
  OtherNames:{
    type:String,
    trim:true
  },
  LastName:{
    type:String,
    trim:true,
    required:true
  },
  Email:{
    type:String,
    trim:true,
    lowercase:true,
    unique:true,
    validate(value){
      if (!validator.isEmail(value)){
        throw new Error("Not a valid email address")
      }
    }
  }
},{
  timestamps:true
})
const Candidate = new mongoose.model("Candidate", candidateSchema)
module.exports = Candidate
