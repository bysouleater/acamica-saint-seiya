const express = require('express');
const cors = require('cors');
const server = express();
const port = 3000;

const saintsController = require('./controllers/saintsController');

server.use(cors());

server.get('/saints', saintsController.getAllSaints)

server.listen(port, function () {
  console.log('Saint Seiya Server is running on ' + port);
});
