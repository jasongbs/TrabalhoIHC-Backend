const ConnProd = require('../models/produtos');

exports.getProdutos = async (req, res, next) => {

    await ConnProd.findAll()
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


exports.postInsereProduto = async (req, res, next) => {

    await ConnProd.create({
            descricao: req.body.descricao,
            status: 'ativo',
        })
        .then((ret) => {
            const response = {
                mensagem: 'Produto criado com sucesso!',
                Categoria:{
                    id: ret.id,
                    descricao: ret.descricao,
                }
            }         
            res.status(201).send(response)
        })
        .catch((err) => {
            return console.log(err)
        })
}