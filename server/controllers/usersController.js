const connection = require('../database/connection');

const usersController = {
  claimSaintForUser: (req, res) => {
    if (!req.params.id || isNaN(req.params.id)) return res.status(400).send('Invalid user id');
    if (!req.body) return res.status(400).send('Invalid body');

    const userid = parseInt(req.params.id);
    const saintid = req.body.saint;

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
  },

  getSaintsForUser: (req, res) => {
    if (!req.params.id || isNaN(req.params.id)) return res.status(400).send('Invalid user id');
    
    const userid = parseInt(req.params.id);

    connection.query(
      'SELECT * FROM users WHERE id = ?',
      [userid],
      (error, users, fields) => {
        if (error) return console.error(error);
        if (!users.length) return res.status(404).send('User does not exist');

        connection.query(
          'SELECT s.id, s.name, s.picture, s.initialMaxHP, s.initialATK, s.initialDEF, usg.qty FROM ' +
          ' (SELECT us.userId, us.saintId, SUM(1) qty ' +
          ' FROM user_saints us ' +
          ' WHERE us.userId = ? ' +
          ' GROUP BY us.userId, us.saintId) usg ' +
          ' JOIN saints s ON s.id = usg.saintId ' +
          ' ORDER BY usg.qty DESC LIMIT 3 ',
          [userid],
          (error, saints, fields) => {
            if (error) return console.error(error);

            res.json({
              email: users[0].email,
              saints: saints
            });
          }
        );
      }
    );
  },

  createUser: (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    connection.query(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [email, password],
      (error, results, fields) => {
        if (error) return console.error(error);

        res.status(201).json({message: 'User created successfully'});
      }
    );
  },

  getAllUsers: (req, res) => {
    connection.query(
      'SELECT * FROM users',
      (error, users, fields) => {
        res.json(users);
      }
    )
  },

  deleteSaintsForUser: (req, res) => {
    let userid = req.params.id;

    connection.query(
      'SELECT * FROM users WHERE id = ?',
      [userid],
      (error, users, fields) => {
        if (error) return console.error(error);
        if (users.length === 0) return res.status(404).send();

        connection.query(
          'DELETE FROM user_saints WHERE userId = ?',
          [userid],
          (error, results, fields) => {
            if (error) return console.error(error);

            res.status(200).send();
          }
        )
      }
    );
  },

  deleteUser: (req, res) => {
    let userid = req.params.id;

    connection.query(
      'DELETE FROM users WHERE id = ?',
      [userid],
      (error, results, fields) => {
        if (error) return console.error(error);
        if (results.affectedRows === 0) return res.status(404).send('User doesn\'t exists');

        connection.query(
          'DELETE FROM user_saints WHERE userId = ?',
          [userid],
          (error, results, fields) => {
            if (error) return console.error(error);

            return res.send('User was deleted');
          }
        );
      }
    )
  }
};

module.exports = usersController;
