const express = require('express');
const bodyParser = require('body-parser');
const perritoRoutes = require('./routes/todoRoutes'); 
const mongoose = require('mongoose')
const axios = require('axios');


const app = express();

// Configurar el body-parser
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar a la base de datos MongoDB
mongoose.set('strictQuery', true)
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error(error));




// Rutas para los perritos
app.use('/api',require("./routes/todoRoutes"));

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

// Iniciar el servidor

const port = 4002
app.listen(port, () => {
  console.log('Servidor iniciado en el puerto 4002');
});
