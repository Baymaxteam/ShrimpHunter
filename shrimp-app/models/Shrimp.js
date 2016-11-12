var mongoose = require('mongoose');


var ShrimpSchema = new mongoose.Schema({
  ID: Number,
  NAME: String,
  Motor1: { type: Number, min: -6000, max: 60000 },
  Motor2: { type: Number, min: -6000, max: 60000 },
  Motor3: { type: Number, min: -6000, max: 60000 },
});

ShrimpSchema.set('toJSON', {
     transform: function (doc, ret, options) {
         delete ret._id;
         delete ret.__v;
     }
}); 

module.exports = mongoose.model('Shrimp', ShrimpSchema);
