const Sequelize = require('sequelize');
const con = require('../config/db').sequelize;

const orcamentos = con.define('orcamentosItens',
{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    id_orcamento:{
        type: Sequelize.STRING,
        allowNull: true
    },
    id_produto:{
        type: Sequelize.STRING,
        allowNull: true
    },
    qtd:{
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