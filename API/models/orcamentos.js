const Sequelize = require('sequelize');
const con = require('../config/db').sequelize;

const orcamentos = con.define('orcamentos',
{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: true
    },
    valor:{
        type: Sequelize.STRING,
        allowNull: true
    },
    id_cliente:{
        type: Sequelize.STRING,
        allowNull: true
    },
    data_solicitacao:{
        type: Sequelize.STRING,
        allowNull: true
    },
    data_fechamento:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{//ativo, desativado, 
        type: Sequelize.STRING,
        allowNull: true
    }
});

orcamentos.sync({alter: "true"});

module.exports = orcamentos;