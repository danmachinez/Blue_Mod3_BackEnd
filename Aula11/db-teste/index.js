// importando o express e mongoose
const express = require('express');
const mongoose = require('mongoose');

const port = 3000;

// importando o modulo usuario
const Usuario = require('./models/usuario');
const app = express();

const Conn = require('./conn/conn')

Conn();

// criando um usuario manualmente
const usuario1 = new Usuario({
    nome: 'Danilo',
    sobrenome: 'Machinez',
    cpf: '000000000',
    idade: "1998-11-24",
    senha: 'senha987'
});

// usuario1.save()
// .then(() => {
//     console.log('Criado!');
// })
// .catch((err) =>{
//     console.error(err);
// })

// lista todos os usuarios
Usuario.find({})
.then((usuarios)=>{
    console.log(usuarios)
})
.catch(err => {
    console.log(err)
})

// lista o usuario pelo id
Usuario.find({ _id: '612d7070012bc81a48d3fe3c' })
.then((usuarios)=>{
    console.log('Retorna por ID', usuarios)
})
.catch(err => {
    console.log(err)
})

// encontra o usuario e exclui do banco

// Usuario.findByIdAndDelete('612d7070012bc81a48d3fe3c')
// .then(() => {
//     console.log('Usuário excluído!');
// })
// .catch((err) => {
//     console.log(err);
// })



app.get('/', (req, res) => {
    res.send('Hello Bluemer!');
})

app.listen(port, () => {
    console.info(`App rodado na rota ${port}`)
});