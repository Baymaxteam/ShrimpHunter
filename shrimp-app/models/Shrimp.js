var mongoose = require('mongoose');
var ShrimpSchema = new mongoose.Schema({
  ID: Number,
  NAME: String,
  Motor1: { type: Number, min: -6000, max: 60000 },
  Motor2: { type: Number, min: -6000, max: 60000 },
  Motor3: { type: Number, min: -6000, max: 60000 },
});


module.exports = mongoose.model('Shrimp', ShrimpSchema);
