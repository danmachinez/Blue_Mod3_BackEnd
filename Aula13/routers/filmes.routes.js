const express = require('express');
const router = express.Router();
const Filme = require('../models/filmes')

router.post('/add', async (req, res) => {
    await Filme.create(req.body)
    .then(() => {
        res.status(200).send('Deu bom! Filme adicionado!')
    })
    .catch((err) =>{
        res.status(400).send('Ih rapá, deu ruim! Algo de errado com o filme, tente novamente!')
        console.error(err)
    })
});

router.get('/', async (req, res) => {
    await Filme.find({})
    .then((filme) => {
        res.send(filme);
    })
    .catch((err) => {
        res.status(400).send('Algo de errado com o filme, tente novamente!')
        console.error(err);
    })
})

router.get('/findByName:nome', async (req, res) =>{
    await Filme.find({ nome : req.params.name })
    .then((filme) => {
        res.send(filme);
    })
    .catch((err) =>{
        res.status(400).send("Algo errado com o filme, tente novamente")
        console.error(err);
    })
});

router.put('/update/:id', async (req, res) =>{
    await Filme.updateOne({ _id : req.params.id}, req.body)
    .then(() => {
        res.status(200).send('Filme atualizado com sucesso!');
    })
    .catch((err) =>{
        res.status(400).send("Algo errado com o filme, tente novamente")
        console.error(err);
    })
});

router.delete('/delete/:id', async (req, res) =>{
    await Filme.deleteOne({ _id : req.params.id})
    .then(() => {
        res.status(200).send('Filme excluído com sucesso!')
    })
    .catch((err) =>{
        res.status(400).send("Algo errado que não deu certo ai, fica de olho!")
        console.error(err);
    })
});

module.exports = router;