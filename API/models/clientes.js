const Sequelize = require('sequelize');
const con = require('../config/db').sequelize;

const clientes = con.define('clientes',
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
    nome:{
        type: Sequelize.STRING,
        allowNull: true
    },
    cpf_cnpj:{
        type: Sequelize.STRING,
        allowNull: true
    },
    data_nascimento:{
        type: Sequelize.STRING,
        allowNull: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: true
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: true
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: true
    },
    cidade:{
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