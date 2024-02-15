const port = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos',(req, res, next) => {
    res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
});

app.post('/produtos',(req,res,next) =>{
    const produto = bancoDeDados.salverProduto({
        nome:req.body.nome,
        preco: req.body.preco
    })
    res.send(produto);
});

app.listen(port,()=>{
    console.log(`Servidor executando da porta ${port}.`)
});