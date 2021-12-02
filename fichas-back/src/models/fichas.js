const { Schema, model } = require("mongoose");

const FichasSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    content: {type: String, required: false},
});

module.exports = model('Ficha', FichasSchema);