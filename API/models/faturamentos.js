const Sequelize = require('sequelize');
const con = require('../config/db').sequelize;

const faturamentos = con.define('faturamentos',
{
    id_faturamento:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    id_fornecedor:{
        type: Sequelize.STRING,
        allowNull: true
    },
    id_usuario:{
        type: Sequelize.STRING,
        allowNull: true
    },
    valor_total:{
        type: Sequelize.STRING,
        allowNull: true
    },
    tipo_ordem:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{//ativo, desativado, 
        type: Sequelize.STRING,
        allowNull: true
    }
});

faturamentos.sync({alter: "true"});

module.exports = faturamentos;