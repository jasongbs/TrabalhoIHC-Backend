const ConnFat = require('../models/contas');
var conn = require('../config/db');
const Op = require("sequelize");

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

exports.getFaturamentosFiltro = async (req, res, next) => {

    await conn.sequelize.query(
        `SELECT contas.id,
        contas.tipo,
        contas.categoria,
        contas.valor,
        contas.parcelas,
        contas.vencimento,
       CASE 
        WHEN status in ('Pago') THEN status
        WHEN CAST(  concat(
        RIGHT(contas.vencimento,4),"-",
        LEFT(RIGHT(contas.vencimento,7),2),"-",
        LEFT(contas.vencimento,2)) AS DATE) < cast(now() as date) THEN 'Vencido'
        
        WHEN CAST(  concat(
        RIGHT(contas.vencimento,4),"-",
        LEFT(RIGHT(contas.vencimento,7),2),"-",
        LEFT(contas.vencimento,2)) AS DATE) = cast(now() as date) THEN 'Vence Hoje'
        
        WHEN CAST(  concat(
        RIGHT(contas.vencimento,4),"-",
        LEFT(RIGHT(contas.vencimento,7),2),"-",
        LEFT(contas.vencimento,2)) AS DATE) > cast(now() as date) THEN 'No Prazo'
        ELSE 'Outros' END status,
        contas.createdAt,
        contas.updatedAt
    FROM sistemas_jjgk.contas
    
    Where tipo = :tipo and status <> 'Excluido'
    `,
        {
            replacements: {
                tipo: req.params.tipo
            },
            type: Op.SELECT,
            raw: true
        })
        .then((ret) => {
            const response = ret;
            res.status(201).send(response[0]);
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                error: err
            });

        });
}

        exports.postCriaContaAPagar = async (req, res, next) => {
            console.log(req.body)
            await ConnFat.create({
                tipo: 'CP',
                categoria: req.body.categoria,
                valor: req.body.valor,
                parcelas: req.body.parcelas,
                vencimento: req.body.vencimento,
                status: 'Aberto',
                })
                .then((ret) => {
                    const response = {
                        mensagem: 'Conta a receber, criada com sucesso!',
                        conta:{
                            id: ret.id,
                        }
                    }         
                    res.status(201).send(response)
                })
                .catch((err) => {
                    return console.log(err)
                })
        }


exports.postCriaContaAReceber = async (req, res, next) => {
    console.log(req.body)
    await ConnFat.create({
        tipo: 'CR',
        categoria: req.body.categoria,
        valor: req.body.valor,
        parcelas: req.body.parcelas,
        vencimento: req.body.vencimento,
        status: 'Aberto',
        })
        .then((ret) => {
            const response = {
                mensagem: 'Conta a pagar, criada com sucesso!',
                conta:{
                    id: ret.id,
                }
            }         
            res.status(201).send(response)
        })
        .catch((err) => {
            return console.log(err)
        })
}

exports.patchExluirCriaConta = async (req, res, next) => {
    console.log(req.body)
    await ConnFat.update({
        categoria: req.body.categoria,
        valor: req.body.valor,
        parcelas: req.body.parcelas,
        vencimento: req.body.vencimento,
        status: "Excluido",
        }, {where: {
            id: req.body.id
          }})
        .then((ret) => {
            const response = {
                mensagem: 'Conta a receber, excluida com sucesso!',
                conta:{
                    id: ret.id,
                }
            }         
            res.status(201).send(response)
        })
        .catch((err) => {
            return console.log(err)
        })
}


exports.patchEdiarConta = async (req, res, next) => {
    console.log(req.body)
    await ConnFat.update({
        categoria: req.body.categoria,
        valor: req.body.valor,
        parcelas: req.body.parcelas,
        vencimento: req.body.vencimento,
      /*  status: 'Excluido',*/
        }, {where: {
            id: req.body.id
          }})
        .then((ret) => {
            const response = {
                mensagem: 'Conta a receber, editada com sucesso!',
                conta:{
                    id: ret.id,
                }
            }         
            res.status(201).send(response)
        })
        .catch((err) => {
            return console.log(err)
        })
}
