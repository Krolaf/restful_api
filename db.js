const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'your_host',
  user     : 'root',
  password : '',
  database : 'restful_api'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});

module.exports = connection;
