const db = require('../config/database');

class user {
  constructor(id, nom, email, age, password) {
    this.id = id;
    this.nom = nom;
    this.email = email;
    this.age = age;
    this.password = password;
  }

  // Ajoutez ici des méthodes pour interagir avec la base de données
  static create(newUser, result) {
    db.query('INSERT INTO users SET ?', newUser, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, ...newUser });
    });
  }

  // ... d'autres méthodes comme findById, getAll, updateById, remove, etc.
}

module.exports = user;
