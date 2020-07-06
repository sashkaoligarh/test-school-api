var mongoose = require('mongoose');

var Schema = mongoose.Schema;


const Group = new Schema({
  studentList: [{
    name :{
      type: String,
    },
    required: true
  }],
  groupNumber:{
    type: Number,
  },

})

module.exports = mongoose.model('group', Group)