const express = require('express');
const cors = require('cors');
const server = express();
const port = 3000;

const saintsController = require('./controllers/saintsController');
const usersController = require('./controllers/usersController');

server.use(cors());
// server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/saints', saintsController.getAllSaints);
server.get('/saints/random', saintsController.getRandomSaint);

server.post('/users', usersController.createUser);
server.get('/users', usersController.getAllUsers);
server.get('/users/:id/saints', usersController.getSaintsForUser);
server.delete('/users/:id/saints', usersController.deleteSaintsForUser);
server.post('/users/:id/claim', usersController.claimSaintForUser);
server.delete('/users/:id', usersController.deleteUser);

server.listen(port, function () {
  console.log('Saint Seiya Server is running on ' + port);
});
