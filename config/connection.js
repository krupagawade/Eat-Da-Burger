// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
  host: 'o677vxfi8ok6exrd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'pltq2rhd4v050ywr',
  password: 'bac6tsupozf7hbuy',
  database: 'burgers_db'
  });
}

// var connection = mysql.createConnection({
//   host: "127.0.0.1",
//   port: 3307,
//   user: "NWTrainingUser",
//   password: "NWKrupa123",
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
