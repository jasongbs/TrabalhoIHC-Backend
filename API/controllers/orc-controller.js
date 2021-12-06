const ConnFat = require('../models/orcamentos');
const ConnItens = require('../models/orcamentosItens');
var conn = require('../config/db');
const Op = require("sequelize");
exports.getOrcamentos = async (req, res, next) => {

    await ConnFat.findAll()
        .then((ret) => {
            const response = ret;
            res.status(201).send(response[0]);
        })
        .catch((err) => {
            res.status(500).send({
                error: err
            });

        });
}

exports.getOrcamentos = async (req, res, next) => {
    let date = new Date();
    console.log(req.body)
    await conn.sequelize.query(
        `SELECT O.id, O.descricao, O.data_solicitacao, O.data_fechamento, O.status, O.valor,
        OI.id_produto, P.descricao as prod_desc, OI.qtd, P.preco,
        C.nome
        FROM sistemas_jjgk.orcamentos O
        inner join sistemas_jjgk.orcamentositens OI
        on O.id = OI.id_orcamento
        inner join sistemas_jjgk.produtos P
        on P.id = OI.id_produto
        inner join sistemas_jjgk.clientes C 
        on C.id = O.id_cliente`,
        {
            replacements: {
                id: req.body.id_cliente
                , id_fila: req.body.id_fila
            },
            type: Op.SELECT,
            raw: true
        }).then((result) => {
            let idExistentes = [];
            return result[0].map(orc => {

                if (idExistentes.indexOf(orc.id)==-1) {
                    
                    idExistentes.push(orc.id);
                    return {
                        id: orc.id,
                        descricao: orc.descricao,
                        data_solicitacao: orc.data_solicitacao,
                        data_fechamento: orc.data_fechamento,
                        status: orc.status,
                        valor: orc.valor,
                        cliente: orc.nome,
                        produtos: result[0].map(result => {
                            if(result.id===orc.id)
                            return {
                                id: result.id_produto,
                                descricao: result.prod_desc,
                                qtd: result.qtd,
                                preco: result.preco,
                            }
                        }

                        )
                    }
                }
            })




        }).then((response) => {
            var realColors = response.filter(function (e) {return e != null;});
            res.status(200).send(realColors)
        })
}


exports.postInsereOrcamentos = async (req, res, next) => {
    console.log(req.body);
    await ConnFat.create({
        descricao: req.body.descricao,
        id_cliente: req.body.id_cliente,
        data_solicitacao: req.body.data_solicitacao,
        data_fechamento: req.body.data_fechamento,
        valor: req.body.valor,
        status: 'Aberto',
    })
        .then((ret) => {
            console.log(ret.dataValues);
            req.body.id_produto.map(prod => {
                ConnItens.create({
                    id_orcamento: ret.dataValues.id,
                    id_produto: prod,
                    qtd: 1,
                    status: "Ativado"
                })
            })

            const response = {
                mensagem: 'Orcamento criado com sucesso!',
                Orcamento: {
                    id: ret.id,
                }
            }
            res.status(201).send(response)
        })
        .catch((err) => {
            return console.log(err)
        })
}