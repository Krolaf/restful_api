// userController.js

import User from '../models/User.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs." });
  }
};

const getUser = async (req, res) => {  
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur." });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création de l'utilisateur." });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.update(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur." });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.delete(req.params.id);
    res.status(200).json({ message: "Utilisateur supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur." });
  }
};

export{
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
