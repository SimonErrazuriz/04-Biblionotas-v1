const Usuario = require('../models/usuarios');

UsuariosControllers = {}

UsuariosControllers.crearUsuario = async (req, res) => {
    const email = await Usuario.findOne({ email: req.body.email });
    if (email) {
        res.send({ message: 'Ya existe el email' });
    } else {
        const newUser = new Usuario(req.body);
        newUser.save();
        res.send({ message: 'Usuario creado' });
    }
}

module.exports = UsuariosControllers;