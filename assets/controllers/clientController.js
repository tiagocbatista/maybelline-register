const Client = require('../models/Client');

const searchSeller = async (req, res) => {
    let vendedora = req.params.vendedora;

    try {
        let doc = await Client.findOne({
            vendedora
        });
        console.log(doc);
        res.send(doc);
    } catch (error) {
        res.send('Houve um erro');
    }
}

module.exports = {
    searchSeller
}