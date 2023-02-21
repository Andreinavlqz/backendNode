const express = require('express');
const router = express.Router();
const dogSchema = require('../models/dogs')



// GET all dogs
router.get('/dogs', (req, res) => {
    dogSchema.find((err, data) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.status(200).send(data);
      }
    });
  });
  
  // POST a new dog
  router.post('/dogs', (req, res) => {
    const newDog = new dogSchema(req.body);
    newDog.save((err, data) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.status(201).send(data);
      }
    });
  });
  
  // PUT (update) a dog by ID
  router.put('/dogs/:id', (req, res) => {
    const id = req.params.id;
    dogSchema.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.status(200).send(data);
      }
    });
  });
  
  // DELETE a dog by ID
  router.delete('/dogs/:id', (req, res) => {
    const id = req.params.id;
    dogSchema.findByIdAndRemove(id, (err, data) => {
      if (err) {
        res.status(500).send({ message: err });
      } else {
        res.status(200).send({ message: 'Dog deleted successfully.' });
      }
    });
  });
  
module.exports = router;
