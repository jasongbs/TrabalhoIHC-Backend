const ConnUser = require('../models/usuarios');

exports.getUsuarios = async (req, res, next) => {

    await ConnUser.findAll()
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

exports.postLogin = async (req, res, next) => {
    console.log(req.body)
    await ConnUser.findAll({
        where: {
            usuario: req.body.usuario,
            senha: req.body.senha
        }
    })
    .then((acesso)=>{
        if(acesso < 1){
            res.status(200).send({
                status: 0,
                mensagem: 'Falha na autenticação. 😣'
            });
        }else{
            res.status(201).send({
                status: 1,
                mensagem: 'Acesso liberado! 😁'
            });
        }
    })
}


exports.postInserUsuario = async (req, res, next) => {
    console.log( req.body)
    await ConnUser.create({
        usuario: req.body.usuario,
        senha: req.body.senha,
        status: 'ativo',
        })
        .then((ret) => {
            const response = {
                status: 1,
                mensagem: 'Usuario criado com sucesso!',
                Categoria:{
                    id: ret.id,
                    descricao: ret.usuario,
                }
            }         
            res.status(201).send(response)
        })
        .catch((err) => {
            const response = {
                status: 1,
                mensagem: 'Falha ao cadastrar!'
            }
            res.status(201).send(response)
        })
}