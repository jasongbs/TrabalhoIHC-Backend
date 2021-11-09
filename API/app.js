const express = require('express');
const cors = require('cors')
const app = express();
const morgan = require('morgan');

//Declaração das rotas
const rotaUsuarios = require('./routes/usuarios');
const rotaProdutos = require('./routes/produtos');
const rotaClientes = require('./routes/clientes');
const rotaOrc = require('./routes/orcamentos');
const rotaFatu = require('./routes/faturamentos');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use(morgan('dev')); // Utilizado para realizar monitoramento das rotas
//app.use(express.urlencoded({extended: false}));
//app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, *");
    next();
});

app.use('/usuarios', rotaUsuarios);
app.use('/produtos', rotaProdutos);
app.use('/clientes', rotaClientes);
app.use('/orcamentos', rotaOrc);
app.use('/faturamentos', rotaFatu);

// Tratamento de erros 
app.use((req, res, next) => {
    const erro = new Error('End-point Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    console.log(error)
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

module.exports = app;