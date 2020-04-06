const express = require('express');
const cors = require('cors');
const server = express();
const port = 3000;

const saintsController = require('./controllers/saintsController');
const usersController = require('./controllers/usersController');

server.use(cors());
server.use(express.json());

server.get('/saints', saintsController.getAllSaints);
server.get('/saints/random', saintsController.getRandomSaint);

server.post('/users/:id/claim', usersController.claimSaintForUser);

server.listen(port, function () {
  console.log('Saint Seiya Server is running on ' + port);
});
