const connection = require('../database/connection');

const usersController = {
  claimSaintForUser: (req, res) => {
    if (!req.params.id || isNaN(req.params.id)) return res.status(400).send('Invalid user id');
    if (!req.body) return res.status(400).send('Invalid body');

    let userid = parseInt(req.params.id);
    let saintid = req.body.saint;

    if (!saintid) return res.status(400).send('Invalid saint id');
    
    connection.query(
      'SELECT * FROM users WHERE id = ?',
      [userid],
      (error, users, fields) => {
        if (error) return console.error(error);
        if (!users.length) return res.status(404).send('User does not exist');

        connection.query(
          'SELECT * FROM saints WHERE id = ?',
          [saintid],
          (error, saints, fields) => {
            if (error) return console.error(error);
            if (!saints.length) return res.status(404).send('Saint does not exist');

            let saint = saints[0];

            connection.query(
              'INSERT INTO user_saints (userId, saintId, level, maxHP, ATK, DEF) VALUES (?,?,?,?,?,?)',
              [userid, saintid, 1, saint.initialMaxHP, saint.initialATK, saint.initialDEF],
              (error, results, fields) => {
                if (error) return console.error(error);

                res.status(201).send();
              }
            );
          }
        );
      }
    );
  }
};

module.exports = usersController;
