const Sequelize = require('sequelize');
const con = require('../config/db').sequelize;

const clientes = con.define('clientes',
{
    id_cliente:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: true
    },
    cnpj:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{//ativo, desativado, 
        type: Sequelize.STRING,
        allowNull: true
    }
});

clientes.sync({alter: "true"});

module.exports = clientes;