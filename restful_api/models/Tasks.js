// Tasks.js
import {db} from '../../db.js';


class Task {
   async findAll() {
    const [tasks] = await db.query('SELECT * FROM tasks');
    return tasks;
  }

   async findById(id) {
    const [tasks] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
    return tasks[0];
  }

   async create({ description, _complete }) {
    const [result] = await db.query('INSERT INTO tasks (description, _complete) VALUES (?, ?)', [description, _complete]);
    return this.findById(result.insertId);
  }

   async update(id, { description, _complete }) {
    await db.query('UPDATE tasks SET description = ?, _complete = ? WHERE id = ?', [description, _complete, id]);
    return this.findById(id);
  }

   async delete(id) {
    await db.query('DELETE FROM tasks WHERE id = ?', [id]);
  }
}

export default Task;

