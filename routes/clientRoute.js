const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

/* Definição de Rotas */

router.get('/aeroporto', (req, res) => {
    res.render('page-aeroporto-register', {registrationSuccess: false});
});

router.get('/updateClient', (req, res) => {
    res.render('update-client');
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