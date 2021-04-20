const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'bd_prueba'
});

conn.connect((err) => {
    if (err) {
        return console.log('ha ocurrido un error');
    }

    console.log('la base de datos se ha conectado');
});

module.exports = conn;