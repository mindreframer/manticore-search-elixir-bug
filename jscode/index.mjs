import mysql from 'mysql';
const connection = mysql.createConnection({
  host: 'localhost',
  port: 9306,
});

connection.connect();


connection.query("Drop TABLE if exists tbl", function (error, results, fields) {
  if (error) throw error;
  console.log(results);
})

connection.query("CREATE TABLE if not exists tbl(id bigint, content text)", function (error, results, fields) {
  if (error) throw error;
  console.log(results);
})

connection.query("insert into tbl(id, content) values (1, 'hello')", function (error, results, fields) {
  if (error) throw error;
  console.log(results);
})

connection.query("select * from tbl", function (error, results, fields) {
  if (error) throw error;
  console.log(results);
})

connection.end();
