import mysql, { createPool } from 'mysql';
import keys from './keys';

const db = mysql.createPool(keys.database);

db.getConnection((err, connection)=>{
    if(err) throw err;
    connection.release();
    console.log('Base de datos conectada');
});

export default db;