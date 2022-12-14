const mysql = require('mysql2/promise');
require('dotenv').config();

//DB connection config setup
const mysqlConnection = async ({ querys, values = [] }) => {
   let connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
   });
   
 try {
   var data;
   await connection.connect()
   .then(() => connection.query(querys))
   .then(([rows, fields]) => {
       data = rows;
   });
   await connection.end();
   return data;
 } catch (error) {
   return { error };
 }finally{
  //finally close the db connection
  connection.end();
 }
}
module.exports= mysqlConnection;