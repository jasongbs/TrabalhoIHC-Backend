const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.MYSQL_USER_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    { timezone : "-03:00",
        host: process.env.MYSQL_HOST,
        dialect: process.env.MYSQL_DIALECT
    });

sequelize.authenticate()
    .then(function () {
        console.log("Conexão com o banco de dados realizada com sucesso!");
    }).catch(function () {
        console.log("Erro ao realizar a conexão com o banco de dados!");
    });

    module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
    }