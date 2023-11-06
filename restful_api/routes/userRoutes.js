// userRoutes.js
import express from 'express';
const router = express.Router();
import {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
  } from '../controllers/userController.js';


// Récupérer tous les utilisateurs
router.get('/', getAllUsers);

// Récupérer un utilisateur par son ID
router.get('/:id', getUser);

// Créer un nouvel utilisateur
router.post('/', createUser);

// Mettre à jour un utilisateur par son ID
router.put('/:id', updateUser);

// Supprimer un utilisateur par son ID
router.delete('/:id', deleteUser);

module.exports = router;
