const Client = require('../models/Client');

const addClient = async (req, res) => {
    let client = new Client(req.body);

    let doc = await Client.findOne({
        cpf: client.cpf
    });

    if (!doc) {
        try {
            let doc = await client.save();
            res.render('page-aeroporto-register', {registrationSuccess: true});
        } catch (error) {
            res.send(error);
        }
    } else {
        res.send('CPF já cadastrado');
    }
}

const searchClient = async (req, res) => {
    try {
        let doc = await Client.findOne({
            cpf: req.body.cpf
        });

        if (!doc) {
            res.send('Nenhuma cliente encontrada');
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
            bairro: req.body.bairro, telefone: req.body.telefone
        });

        res.send('Atualizado com sucesso');
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    addClient,
    searchClient,
    updateClient
}