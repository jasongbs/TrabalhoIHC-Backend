const Sequelize = require('sequelize');
const con = require('../config/db').sequelize;

const produtos = con.define('contas',
{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    tipo:{
        type: Sequelize.STRING,
        allowNull: true
    },
    categoria:{
        type: Sequelize.STRING,
        allowNull: true
    },
    valor:{
        type: Sequelize.STRING,
        allowNull: true
    },
    parcelas:{
        type: Sequelize.STRING,
        allowNull: true
    },
    vencimento:{//ativo, desativado, 
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{
        type: Sequelize.STRING,
        allowNull: true
    }
});

produtos.sync({alter: "true"});

module.exports = produtos;