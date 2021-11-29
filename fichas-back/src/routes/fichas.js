const { Router } = require('express');
const routerFichas = Router();
const FichasControllers = require("../controllers/fichas");

/* Crear rutas */
routerFichas.get('/get', FichasControllers.getFichas);
routerFichas.get('/get1/:id', FichasControllers.getFicha);
routerFichas.post('/post', FichasControllers.addFicha);
routerFichas.delete('/delete/:id', FichasControllers.deleteFicha);


module.exports = routerFichas;
