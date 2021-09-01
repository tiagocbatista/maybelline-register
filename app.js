/* Variáveis */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const clientRoute = require('./assets/routes/clientRoute')


/* Conexão do banco de dados - MongoDB */
mongoose.connect(process.env.URI_MONGODB)
let db = mongoose.connection;

db.on('error', () => {
    console.log('Houve um erro');
});
db.once('open', () => {
    console.log('Banco carregado');
});


app.use('/', clientRoute);


/* Inicialização do Servidor Local */
app.listen(process.env.PORT, () => {
    console.log(`Server rodando na porta ${process.env.PORT}`);
})