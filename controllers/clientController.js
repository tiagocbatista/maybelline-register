const Client = require('../models/Client');

const addClient = async (req, res) => {
    let client = new Client(req.body);

    let doc = await Client.findOne({
        cpf: client.cpf
    });

    if (!doc) {
        try {
            let doc = await client.save();
            res.render('index', {
                registrationSuccess: true,
                updateSuccess: false,
                cpfExists: false,
                cpfNotFound: false
            });
        } catch (error) {
            res.send(error);
        }
    } else {
        res.render('index', {
            registrationSuccess: false,
            updateSuccess: false,
            cpfExists: true,
            cpfNotFound: false
        });
    }
}

const searchClient = async (req, res) => {
    try {
        let doc = await Client.findOne({
            cpf: req.body.cpf
        });

        if (!doc) {
            res.render('index', {
                registrationSuccess: false,
                updateSuccess: false,
                cpfExists: false,
                cpfNotFound: true
            });
        } else {
            res.render('update-client', {
                body: doc
            });
        }
    } catch (error) {
        res.send(error);
    }
}

const updateClient = async (req, res) => {
    try {
        let doc = await Client.findOneAndUpdate({
            cpf: req.body.cpf
        }, {
            $inc: {
                compra: req.body.compra,
                boletos: 1
            },
            bairro: req.body.bairro,
            telefone: req.body.telefone,
            lastUpdate: Date.now()
        });

        res.render('index', {
            registrationSuccess: false,
            updateSuccess: true,
            cpfExists: false,
            cpfNotFound: false
        });

    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    addClient,
    searchClient,
    updateClient
}