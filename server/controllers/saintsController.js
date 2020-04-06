const connection = require('../database/connection');

const saintsController = {
  getAllSaints: (req, res) => {
    connection.query(
      'SELECT * FROM saints',
      (error, saints, fields) => {
        res.json(saints);
      }
    );
  },
  getRandomSaint: (req, res) => {
    connection.query(
      'SELECT * FROM saints ORDER BY RAND() LIMIT 1',
      (error, saints, fields) => {
        res.json(saints[0]);
      }
    );
  }
};

module.exports = saintsController;
