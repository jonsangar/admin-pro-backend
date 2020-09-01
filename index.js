require('dotenv').config();
const express = require('express'); // Así importamos en JavaScript y Node
const cors = require('cors');

const { dbConnection } = require('./database/config'); // entre llaves {} para desestructurar el objeto que me llega y quedarme sólo con dbConnection

// Crear el servidor de Express
const app = express();

// Configurando CORS
app.use(cors());

// mean_user
// ecxj8ZLQTzSe6nh
// Base de datos
dbConnection();

//console.log(process.env);

app.get('/', (req, res) => {
    res.json({
        "ok": true,
        "msg": "Hello world"
    });
});


app.listen(process.env.PORT, () => {
    console.log('Aplicación ejecutándose en puerto ' + process.env.PORT);
});