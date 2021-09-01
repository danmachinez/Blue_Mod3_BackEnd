const express = require('express');
const router = express.Router();
const Musica = require('../models/musicas')



router.post('/add', async (req, res) =>{
    await Musica.create(req.body)
    .then(() => {
        res.status(200).send('Musica adicionada com sucesso.')
    })
    .catch((err) => {
        res.status(400).send('Algo errado com a música, tente novamente.')
    })
});

router.get('/', async (req, res) =>{
    await Musica.find({})
    .then((musica) =>{
        res.send(musica);
    })
    .catch((err) =>{
        console.error(err);
    })
});

router.get('/findById/:id', async (req, res) =>{
    await Musica.find({_id : req.params.id})
    .then((musica) =>{
        res.send(musica);
    })
    .catch((err) =>{
        console.error(err);
    })
});
router.get('/findByName/:nome', async (req, res) =>{
    await Musica.find({nome : req.params.name})
    .then((musica) =>{
        res.send(musica);
    })
    .catch((err) =>{
        console.error(err);
    })
});



router.put('/update', (req, res) =>{

});


router.delete('/delete', (req, res) =>{

});

module.exports = router;