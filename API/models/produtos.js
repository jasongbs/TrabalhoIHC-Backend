const Sequelize = require('sequelize');
const con = require('../config/db').sequelize;

const produtos = con.define('produtos',
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
    unid_medida:{
        type: Sequelize.STRING,
        allowNull: true
    },
    classificacao:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{//ativo, desativado, 
        type: Sequelize.STRING,
        allowNull: true
    },
    min:{
        type: Sequelize.STRING,
        allowNull: true
    },
    max:{
        type: Sequelize.STRING,
        allowNull: true
    }    ,
    preco:{
        type: Sequelize.FLOAT,
        allowNull: true
    },
});

produtos.sync({alter: "true"});

module.exports = produtos;