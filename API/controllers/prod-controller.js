const ConnProd = require('../models/produtos');
const {
    Op
} = require("sequelize");

exports.getProdutos = async (req, res, next) => {

    await ConnProd.findAll({
        where: {
          status: {
            [Op.ne]: "Excluido"
          }
        }})
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


exports.postProduto = async (req, res, next) => {

    if(req.body==undefined){
        res.status(500).send({mensagem:'Erro, Body Undefined'})
    }

    console.log(req.body)
    await ConnProd.create({
        descricao: req.body.descricao,
        unid_medida: req.body.unid_medida,
        classificacao: req.body.classificacao,
        status: req.body.status,
        min:  req.body.min,
        max:  req.body.max,
        preco:  req.body.preco
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

exports.patchProduto = async (req, res, next) => {

    console.log(req.body);

    if(req.body==undefined){
        res.status(500).send({mensagem:'Erro, Body Undefined'})
    }

    
    await ConnProd.update({
            descricao: req.body.descricao,
            unid_medida: req.body.unid_medida,
            classficacao: req.body.classificacao,
            status: req.body.status,
            min:  req.body.min,
            max:  req.body.max,
            preco:  req.body.preco
        }, {
            where: {
              id: {
                [Op.eq]: req.body.id
              }
            }})
        .then((ret) => {
            console.log(ret)
            const response = {
                mensagem: 'Produto alterado com sucesso! 😁' ,
                Produto:{
                    id: ret[0],
                    descricao: req.body.descricao,
                }
            }         
            res.status(201).send(response)
        })
        .catch((err) => {
            return console.log(err)
        })
}