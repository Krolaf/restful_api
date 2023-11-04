const user = require('../models/User');

exports.create = (req, res) => {
  // Validez la requête
  if (!req.body) {
    return res.status(400).send({
      message: "Content can't be empty!"
    });
  }

  // Créez un utilisateur
  const user = new User(null, req.body.nom, req.body.email, req.body.age, req.body.password);

  // Sauvegardez dans la base de données
  User.create(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    } else {
      res.send(data);
    }
  });
};

// ... d'autres méthodes de contrôleur pour opérations CRUD
module.exports = User.create