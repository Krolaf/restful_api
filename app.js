const express = require('express');
const app = express();

app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server est lancé sur le port ${PORT}`)
});

const userRoutes = require('./routes/userRoutes');

// ... configuration d'Express

app.use('/api/user', userRoutes);

// ... démarrer le serveur
