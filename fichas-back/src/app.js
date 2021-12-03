const express = require('express');
const app = express();
const cors = require('cors');

/* Definir el puerto */
app.set("port", 3000);

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

/* Cargar las rutas */
app.use("/api/fichas", require('./routes/fichas'));
app.use("/api/usuarios", require('./routes/usuarios'));



/* Exportar */
module.exports = app;

