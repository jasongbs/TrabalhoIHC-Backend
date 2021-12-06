const ConnCliente = require('../models/clientes');
const {
    Op
} = require("sequelize");

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
        tipo: req.body.tipo,
        cpf_cnpj: req.body.cpf_cnpj,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        status: 'Ativado',
        })
        .then((ret) => {
            const response = {
                status:1,
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

exports.patchCliente = async (req, res, next) => {

    console.log(req.body);

    if(req.body==undefined){
        res.status(500).send({mensagem:'Erro, Body Undefined'})
    }

    
    await ConnCliente.update({
        nome: req.body.nome,
        tipo: req.body.tipo,
        cpf_cnpj: req.body.cpf_cnpj,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        status: 'Ativado',
        }, {
            where: {
              id: {
                [Op.eq]: req.body.id
              }
            }})
        .then((ret) => {
            console.log(ret)
            const response = {
                mensagem: 'Cliente alterado com sucesso! 😁' ,
               
            }         
            res.status(201).send(response)
        })
        .catch((err) => {
            return console.log(err)
        })
}

exports.patchClienteDesativado = async (req, res, next) => {

    console.log(req.body);

    if(req.body==undefined){
        res.status(500).send({mensagem:'Erro, Body Undefined'})
    }

    
    await ConnCliente.update({
        status: 'Desativado',
        }, {
            where: {
              id: {
                [Op.eq]: req.body.id
              }
            }})
        .then((ret) => {
            console.log(ret)
            const response = {
                mensagem: 'Cliente desativado com sucesso! 😁' ,
               
            }         
            res.status(201).send(response)
        })
        .catch((err) => {
            return console.log(err)
        })
}


exports.patchClienteExcluido = async (req, res, next) => {

    console.log(req.body);

    if(req.body==undefined){
        res.status(500).send({mensagem:'Erro, Body Undefined'})
    }

    
    await ConnCliente.update({
        status: 'Excluido',
        }, {
            where: {
              id: {
                [Op.eq]: req.body.id
              }
            }})
        .then((ret) => {
            console.log(ret)
            const response = {
                mensagem: 'Cliente excluido com sucesso! 😁' ,
               
            }         
            res.status(201).send(response)
        })
        .catch((err) => {
            return console.log(err)
        })
}