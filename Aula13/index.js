const express = require('express');
const app = express();
const Conn = require('./controller/conn')

Conn('localhost', 27017, 'filmes')

app.use(express.json());

const port = 3000;

const filme = require('./routers/filmes.routes');
app.use('/filmes', filme);

app.listen(port, () =>{
    console.info(`Servidor rodando na porta: ${port}`);
})