/* Variáveis */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const clientRoute = require('./routes/clientRoute')
const path = require('path')


/* Conexão do banco de dados - MongoDB */
mongoose.connect(process.env.URI_MONGODB)
let db = mongoose.connection;

db.on('error', () => {
    console.log('Houve um erro');
});
db.once('open', () => {
    console.log('Banco carregado');
});

/* Setando a view engine para carregar páginas html (frontend) */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/public', express.static('public'));
app.use('/', clientRoute);


/* Inicialização do Servidor Local */
app.listen(process.env.PORT, () => {
    console.log(`Server rodando na porta ${process.env.PORT}`);
})