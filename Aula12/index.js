const express = require('express');
const app = express();
const Conn = require('./controller/conn');

Conn('localhost', 27017, 'musicas');

app.use(express.json());

const port = 3000; 

const musica = require('./routers/musicas.routes');
app.use('/musicas', musica);

const filme = require('./routers/filmes.routes');
app.use('/filmes', filme);

app.listen(port, () => {
    console.info(`Servidos rodando na porta ${port}`)
})