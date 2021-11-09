const Sequelize = require('sequelize');
const con = require('../config/db').sequelize;

const Usuario = con.define('usuarios',
{
    id_usuario:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    usuario:{
        type: Sequelize.STRING,
        allowNull: true
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: true
    },
    tipo:{
        type: Sequelize.STRING,
        allowNull: true
    },
    status:{
        type: Sequelize.STRING,
        allowNull: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: true
    }
});

Usuario.sync({alter: "true"});

module.exports = Usuario;