const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

/* Definição de Rotas */
router.get('/', (req, res) => {
    res.send('Hello World')
});

router.get('/:vendedora', clientController.searchSeller);

module.exports = router;