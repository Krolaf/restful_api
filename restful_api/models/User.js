// User.js
import db from '../../db.js';


class User {
  static async findAll() {
    const [users] = await db.query('SELECT * FROM users');
    return users;
  }

  static async findById(id) {
    const [users] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return users[0];
  }

  static async create({ nom, email, age, password }) {
    const [result] = await db.query('INSERT INTO users (nom, email, age, password) VALUES (?, ?, ?, ?)', [nom, email, age, password]);
    return this.findById(result.insertId);
  }

  static async update(id, { nom, email, age, password }) {
    await db.query('UPDATE users SET nom = ?, email = ?, age = ?, password = ? WHERE id = ?', [nom, email, age, password, id]);
    return this.findById(id);
  }

  static async delete(id) {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
  }
}

export default User;
