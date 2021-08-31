/* Variáveis */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

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
        type: Number,
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
    }
});

const Client = mongoose.model('Client', clientSchema);

/* Conexão do banco de dados - MongoDB */
mongoose.connect(process.env.URI_MONGODB)
let db = mongoose.connection;

db.on('error', () => {
    console.log('Houve um erro');
});
db.once('open', () => {
    console.log('Banco carregado');
});


/* Definição de Rotas */
app.get('/', (req, res) => {
    res.send('Hello World')
});


/* Inicialização do Servidor Local */
app.listen(process.env.PORT, () => {
    console.log(`Server rodando na porta ${process.env.PORT}`);
})