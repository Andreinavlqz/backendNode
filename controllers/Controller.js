const perrito = require('../index');

// Obtener todos los perritos
exports.getAllPerritos = (req, res) => {
  res.json(perrito);
};

// Obtener un perrito por su ID
exports.getPerritoById = (req, res) => {
  const id = req.params.id;
  const foundPerrito = perrito.find((p) => p.id === id);
  if (foundPerrito) {
    res.json(foundPerrito);
  } else {
    res.status(404).send('Perrito no encontrado');
  }
};

// Crear un nuevo perrito
exports.createPerrito = (req, res) => {
  const newPerrito = req.body;
  perrito.push(newPerrito);
  res.json(newPerrito);
};

// Actualizar un perrito existente
exports.updatePerrito = (req, res) => {
  const id = req.params.id;
  const updatedPerrito = req.body;
  const index = perrito.findIndex((p) => p.id === id);
  if (index !== -1) {
    perrito[index] = updatedPerrito;
    res.json(updatedPerrito);
  } else {
    res.status(404).send('Perrito no encontrado');
  }
};

// Eliminar un perrito existente
exports.deletePerrito = (req, res) => {
  const id = req.params.id;
  const index = perrito.findIndex((p) => p.id === id);
  if (index !== -1) {
    perrito.splice(index, 1);
    res.send('Perrito eliminado');
  } else {
    res.status(404).send('Perrito no encontrado');
  }
};
