const mongoose = require('mongoose');

const mydogsSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  raza: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  imagenUrl: {
    type: String,
    required: true,
  },
});

const mydogs = mongoose.model('Perrito', mydogsSchema);

module.exports = mydogs;
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
