const ConnFat = require('../models/faturamentos');

exports.getFaturamentos = async (req, res, next) => {

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


exports.postInsereFaturamentos = async (req, res, next) => {

    await ConnFat.create({
        id_fornecedor: req.body.id_fornecedor,
        id_usuario: req.body.id_usuario,
        valor_total: req.body.valor_total,
        tipo_ordem: req.body.tipo_ordem,
        status: 'ativo',
        })
        .then((ret) => {
            const response = {
                mensagem: 'Faturamento criado com sucesso!',
                Faturamento:{
                    id: ret.id,
                }
            }         
            res.status(201).send(response)
        })
        .catch((err) => {
            return console.log(err)
        })
}