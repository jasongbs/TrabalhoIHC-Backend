const ConnFat = require('../models/orcamentos');

exports.getOrcamentos = async (req, res, next) => {

    await ConnFat.findAll()
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


exports.postInsereOrcamentos = async (req, res, next) => {

    await ConnFat.create({
        descricao: req.body.descricao,
        id_usuario: req.body.id_usuario,
        data_solicitacao: req.body.data_solicitacao,
        data_fechamento: req.body.data_fechamento,
        status: 'ativo',
        })
        .then((ret) => {
            const response = {
                mensagem: 'Orcamento criado com sucesso!',
                Orcamento:{
                    id: ret.id,
                }
            }         
            res.status(201).send(response)
        })
        .catch((err) => {
            return console.log(err)
        })
}