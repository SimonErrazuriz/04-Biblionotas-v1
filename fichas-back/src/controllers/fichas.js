const Ficha = require('../models/fichas');

FichasControllers = {}

FichasControllers.getFichas = async (req, res) => {
    const fichas = await Ficha.find();
    res.json(fichas);
}

FichasControllers.getFicha = async (req, res) => {
    const ficha = await Ficha.findById(req.params.id);
    res.json(ficha);
}

FichasControllers.addFicha = (req, res) => {
    const newFicha = new Ficha(req.body);
    newFicha.save();
    res.send({ message: 'Ficha Agregada' });
}

FichasControllers.deleteFicha = async (req, res) => {
    await Ficha.findByIdAndDelete(req.params.id);
    res.send({ message: 'Ficha Borrada' });
}




module.exports = FichasControllers;