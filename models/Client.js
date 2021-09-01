const mongoose = require('mongoose');

/* Criação do Schema e Model */
const clientSchema = new mongoose.Schema({
    quiosque: {
        type: String,
        required: true
    },
    vendedora: {
        type: String,
        required: true
    },
    cliente: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    nascimento: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    compra: {
        type: Number,
        required: true
    },
    boletos: {
        type: Number,
        default: 1
    },
    lastUpdate: {
        type: Date,
        default: Date
    }
});

module.exports = mongoose.model('Client', clientSchema);