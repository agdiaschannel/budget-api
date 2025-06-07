const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const LancamentoSchema = new Schema({
    valor: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        required: true,
    },
    descricao: String,
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
});

const Lancamento  = model('Lancamento', LancamentoSchema);