const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const perritoRoutes = require('./routes/todoRoutes'); // importar las rutas de perrito

const app = express();

// Configurar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a la base de datos MongoDB');
}).catch((err) => {
  console.log('Error al conectar a la base de datos MongoDB:', err);
});

// Rutas para los perritos
app.use('/api/perritos', perritoRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
