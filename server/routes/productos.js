const express = require('express');
const conn = require('../config/db');

const app = express();

/**CRUD PRUEBA CREATE, READ, UPDATE, DELETE */
/** agregar productos */
app.post('/productos', (req, res) => {
    const { description, date, mount } = req.body;
    let sql = `INSERT INTO t001_transaction (VA_DESCRIPTION, FE_CREATE_ON, VA_AMOUNT)
    VALUES (?,?,?)`;

    conn.query(sql, [description, date, mount], (err, productoDB, fields) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            data: 'Articulo agregado'
        });
    });

});
/*obtener todos los articulos*/
/**cambiar a futuo procedimiento a mostrar todo los articulos que sean estadoi true */
app.get('/productos', (req, res) => {
    let sql = `SELECT * FROM t001_transaction`

    conn.query(sql, (err, productosDB, fields) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'Error al consultar los productos',
                    err
                }
            })
        }

        res.status(200).json({
            ok: true,
            productosDB
        })
    });

});

app.put('/productos/:id', (req, res) => {
    let { description, date, mount } = req.body;
    let id = req.params.id;
    let sql = `UPDATE t001_transaction 
                SET VA_DESCRIPTION =' ${description}', FE_CREATE_ON = '${date}', VA_AMOUNT = '${mount}'
                WHERE NU_ID= '${id}'`;

    conn.query(sql, (err, productoDB, fields) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            data: 'Articulo modificado'
        });
    });
});
/**elimnar un articulo */
/**cambiar procedimineto a futuro a no eliminar si no cambiar de estado */
app.delete('/productos/:id', (req, res) => {
    let id = req.params.id;
    let sql = `DELETE FROM t001_transaction WHERE NU_ID= '${id}'`;

    conn.query(sql, (err, productoDB, fields) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            data: 'Articulo eliminado'
        });
    });
});


module.exports = app