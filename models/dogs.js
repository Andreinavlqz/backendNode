const mongoose = require('mongoose');


const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    
  },
  imagenUrl: {
    type: String
   
  },
  color: {
    type: String,
    
  },
});

const mydogs = mongoose.model('dogs', dogSchema);

module.exports = mydogs;


