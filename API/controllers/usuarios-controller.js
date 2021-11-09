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


exports.postInserUsuario = async (req, res, next) => {

    await ConnUser.create({
        usuario: req.body.usuario,
        senha: req.body.senha,
        tipo: req.body.tipo,
        usuario: req.body.usuario,
        status: 'ativo',
        })
        .then((ret) => {
            const response = {
                mensagem: 'Usuario criado com sucesso!',
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