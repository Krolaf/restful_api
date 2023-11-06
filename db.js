import { config } from 'dotenv';
config();


const mysql = from 'mysql';

// Créer une connexion à la base de données
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS
});

// Fonction pour obtenir une connexion et exécuter une requête avec gestion d'erreur
function query(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }
      connection.query(sql, values, (error, results, fields) => {
        connection.release(); // Toujours libérer la connexion de retour au pool
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  });
}

module.exports = {
  query
};
