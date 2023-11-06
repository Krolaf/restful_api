// tasksController.js
import Task from '../models/Tasks.js';


const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des tâches." });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Tâche non trouvée." });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération de la tâche." });
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création de la tâche." });
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.update(req.params.id, req.body);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour de la tâche." });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.delete(req.params.id);
    res.status(200).json({ message: "Tâche supprimée avec succès." });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression de la tâche." });
  }
};

export {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
