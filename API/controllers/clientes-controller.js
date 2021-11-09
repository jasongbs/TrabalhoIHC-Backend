const ConnCliente = require('../models/clientes');

exports.getClientes = async (req, res, next) => {

    await ConnCliente.findAll()
        .then((ret) => {
            const response = ret;
            res.status(201).send(response);
        })
        .catch((err) => {
            res.status(500).send({
                error: err
            });

        });
}


exports.postInsereClientes = async (req, res, next) => {

    await ConnCliente.create({
        nome: req.body.nome,
        cnpj: req.body.cnpj,
        celular: req.body.celular,
        status: 'ativo',
        })
        .then((ret) => {
            const response = {
                mensagem: 'Cliente criado com sucesso!',
                Categoria:{
                    id: ret.id,
                    descricao: ret.usuario,
                }
            }         
            res.status(201).send(response)
        })
        .catch((err) => {
            return console.log(err)
        })
}