const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const CategoriaSchema = new Schema({
    nome: {
        type: String,
        required: true,
        unique: true, 
        trim: true
    },
    descricao: String
    

})

module.exports = model('Categoria', CategoriaSchema);