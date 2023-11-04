const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

// Créer un nouvel utilisateur
router.post('/user', userController.create);

// ... définir d'autres routes pour GET, PUT, DELETE etc.

module.exports = router;
