// tasksRoutes.js
import express from 'express';
const router = express.Router();
import {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
  } from '../controllers/tasksController.js';


// Récupérer toutes les tâches
router.get('/', getAllTasks);

// Récupérer une tâche par son ID
router.get('/:id', getTask);

// Créer une nouvelle tâche
router.post('/', createTask);

// Mettre à jour une tâche par son ID
router.put('/:id', updateTask);

// Supprimer une tâche par son ID
router.delete('/:id', deleteTask);

module.exports = router;
