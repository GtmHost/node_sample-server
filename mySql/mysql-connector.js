const mysql = require('mysql');

var con = mysql.createConnection({
    host        :"localhost",
    user        : "root",
    password    : "root",
    database    : "test"
});

// con.connect((err) => {
//     if(err){
//       console.log('Error connecting to Db');
//       return;
//     }
//     console.log('Connection established');
//   });

//   var sqlQuery = 'call getAllStudents(?)';
//   //var sqlQuery = 'call getAllStudents()';
//   //var sqlQuery  = 'SELECT * FROM employees';
//   con.query(sqlQuery, {'n':'praveen', 'i':1}, (err,rows) => {
//     if(err) throw err;
  
//     console.log('Data received from Db:\n');
//     console.log(rows);
//   });

  con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.

    console.log("Connection clsoed");
  });

  