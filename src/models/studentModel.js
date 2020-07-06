var mongoose = require('mongoose');

var Schema = mongoose.Schema;


const Student = new Schema({
  name: {
    type: String,
    required:true

  },
  groupNumber:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('student', Student)