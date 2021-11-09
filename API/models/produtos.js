const Sequelize = require('sequelize');
const con = require('../config/db').sequelize;

const produtos = con.define('produtos',
{
    id_produto:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{//ativo, desativado, 
        type: Sequelize.STRING,
        allowNull: true
    }
});

produtos.sync({alter: "true"});

module.exports = produtos;