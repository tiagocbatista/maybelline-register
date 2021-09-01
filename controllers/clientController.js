const Client = require('../models/Client');

const addClient = async (req, res) => {
    let client = new Client(req.body);

    try {
        let doc = await client.save();
        res.send('Cliente adicionada com sucesso');
    } catch (error) {
        res.send(error);
    }
}

const searchClient = async (req, res) => {
    try {
        let doc = await Client.findOne({
            cpf: req.body.cpf
        });

        if (doc == null) {
            res.send('Nenhuma cliente encontrada');
        } else {
            res.send(doc);
        }
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    addClient,
    searchClient
}