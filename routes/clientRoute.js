const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

/* Definição de Rotas */

router.get('/aeroporto', (req, res) => {
    res.render('aeroporto-register', {cpfError: false});
});

router.get('/bahia', (req, res) => {
    res.render('bahia-register', {cpfError: false});
});

router.get('/barra', (req, res) => {
    res.render('barra-register', {cpfError: false});
});

router.get('/itaigara', (req, res) => {
    res.render('itaigara-register', {cpfError: false});
});

router.get('/paralela', (req, res) => {
    res.render('paralela-register', {cpfError: false});
});

router.get('/parque', (req, res) => {
    res.render('parque-register', {cpfError: false});
});

router.get('/salvador', (req, res) => {
    res.render('salvador-register', {cpfError: false});
});

router.get('/updateClient', (req, res) => {
    res.render('update-client');
})

router.get('/', (req, res) => {
    res.render('index', {
        registrationSuccess: false,
        updateSuccess: false,
        cpfExists: false,
        cpfNotFound: false
    })
})


router.post('/search', express.urlencoded({
    extended: true
}), clientController.searchClient);

router.post('/updateClient', express.urlencoded({
    extended: true
}), clientController.updateClient);

router.post('/', express.urlencoded({
    extended: true
}), clientController.addClient);

module.exports = router;