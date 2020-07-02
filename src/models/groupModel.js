var mongoose = require('mongoose');

var Schema = mongoose.Schema;


const Clothes = new Schema({
  title: {
    type: String,

  },
  type:{
    type: String,

  },
  price:{
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

module.exports = mongoose.model('Clothes', Clothes)