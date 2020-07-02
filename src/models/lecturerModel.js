var mongoose = require('mongoose');

var Schema = mongoose.Schema;


const Lecturer = new Schema({
  name: {
      type: String,
      required: true,
  },
  groupList:[{
      groupNumbers:{
        type: Number,
        required: true, 
      }
  }],
  specialization: {
    type: String,
    default: ''
  },
})

module.exports = mongoose.model('lecturer', Lecturer)