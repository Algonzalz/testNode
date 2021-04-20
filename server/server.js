require('./config/config')
require('./config/db');
const express = require('express');


const app = express();

app.use(express.json())

app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log('escuchando en el puerto:', process.env.PORT);
});