var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Banner = new Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  targetUrl: {
    type: String,
    required: true
  },
  active: {
    type: String,
    required: true,
    default: 'Yes'
  }
});

module.exports = mongoose.model('Banner', Banner);
