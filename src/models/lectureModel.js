var mongoose = require('mongoose');

var Schema = mongoose.Schema;


const Lectures = new Schema({
  date: {
      type: String,
      required: true,
  },
  lectureHall:{
    type: String,
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