const express = require('express');
const app = express();

const port = 3000;

// Lista de jogos
const jogos = [
    'Paciência',
    'Buddy Poke',
    'Colheita Feliz',
    'Café mania',
    'Tetris'
];

//Lista de frases de boas vindas
const msgInicio = [
    'Salve, muito bem vindo!',
    'Fala rapaziada, chega mais, ta em casa',
    'Servidor de jogos',
    'Ih, bem vindo ao servidor!'
];

//GET / pagina inicial com mensagem randomica
app.get('/', (req, res) =>{
    let randomMsg = msgInicio[Math.floor(Math.random() * msgInicio.length)];
    res.send(`<h1>${randomMsg}</h1>`);
});

//GET / pagina com jogos
app.get('/jogos', (req, res) =>{
    res.send(jogos.filter(Boolean));
});

//GET / pegar um jogo individual
app.get('/jogos/:id', (req, res) =>{
    const id = req.params.id;
    const jogo = jogos[id-1];
    if (id > jogos.length || id < 1){
        res.send('ID inválido, tente novamente!');
    }
        res.send(jogo)
});

//POST / adicionar um jogo novo 
app.post('/jogos', (req, res) => {
    const jogo = req.body.jogo;
    const id = jogos.length;
    jogos.push(jogo);

    res.send(`O jogo ${jogo} foi adicionado com sucesso! Seu ID é: ${id}.`);

})

//PUT / atualizar um jogo da lista
app.put('/jogos/:id', (req, res) => {
    const id = req.params.id -1;
    const jogo = req.body.jogo;
    const jogoAnterior = jogos[id];
    jogos[id] = jogo;
    res.send(`O jogo anterior ${jogoAnterior} foi atualizado com sucesso para ${jogo}!`)
})

//DELETE / deletar um jogo da lista
app.delete('/jogos/:id', (req, res) => {
    const id = req.params.id -1;
    const jogo = jogos[id];

    if (!jogo) {
        res.send('Jogo não encontrado!');
    }
    delete jogos[id];
    res.send('Jogo excluído com sucesso!');
})


//GET / randomizar um jogo para ser exibido na pagina
app.get('/jogododia', (req, res) =>{
    let randomJogo = jogos[Math.floor(Math.random() * jogos.length)];
    res.send(`O jogo escolhido de hoje é: ${randomJogo}!`);
});



app.listen(port, () =>{
    console.info(`App esta rodando em: http://localhost/${port}/`);
});
