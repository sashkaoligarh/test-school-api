var mongoose = require('mongoose');

var Schema = mongoose.Schema;


const Student = new Schema({
  firstName: {
    type: String,

  },
  lastName:{
    type: String,

  },
  age:{
    type: Number,

  },
  
  sex:{
    type: String,

  },
  image:{
    type: Array
  },
  description:{
    type: String,
    default:''
  }

})

module.exports = mongoose.model('student', Student)