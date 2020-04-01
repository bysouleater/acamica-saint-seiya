CREATE DATABASE acamicasaintseiya;

CREATE TABLE saints
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  initialMaxHP INT,
  initialATK INT,
  initialDEF INT,
  PRIMARY KEY (id)
);

CREATE TABLE users
(
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(300),
  password VARCHAR(300),
  PRIMARY KEY (id)
);

CREATE TABLE user_saints
(
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  saintId INT NOT NULL,
  level INT DEFAULT 1,
  maxHP INT,
  ATK INT,
  DEF INT,
  PRIMARY KEY (id)
);
