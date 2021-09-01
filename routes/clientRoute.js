const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

/* Definição de Rotas */

router.post('/search', express.urlencoded({
    extended: true
}), clientController.searchClient);

router.get('/aeroporto', (req, res) => {
    res.render('page-aeroporto-register');
});

router.post('/', express.urlencoded({
    extended: true
}), clientController.addClient);

module.exports = router;