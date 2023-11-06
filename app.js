// app.js
import { config } from 'dotenv';
config();


import express from 'express';

const app = express();

import userRoutes from './restful_api/routes/userRoutes.js';
import taskRoutes from './restful_api/routes/tasksRoutes.js';


app.use(express.json());

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
