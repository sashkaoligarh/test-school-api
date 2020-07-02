var mongoose = require('mongoose');

var Schema = mongoose.Schema;


const Lectures = new Schema({
  date: {
      type: Date,
      required: true,
  },
  groupNumber:{
      type: Number,
      required: true, 
  },
  lecturer: {
    type: String,
    default: ''
  },
  lecture: {
      type: String,
      default: ''
  }

})

module.exports = mongoose.model('lectures', Lectures)