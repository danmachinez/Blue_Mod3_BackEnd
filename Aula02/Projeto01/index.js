const express = require('express');
const app = express();

const port = 3000; 

app.use(express.json());

const filmes = [
    {
    id: 1,
    nome: "Capitão América: O primeiro vingador",
    imagemUrl:
    "https://play-lh.googleusercontent.com/9LAzip_XWe8eVWEUGCnSJ4xf706RmYtSu5bZRAfvqbs2aW6YVlLbPF7UVTfMpJKQUioKGw",
},
{
    id: 2,
    nome: "Capitã Marvel",
    imagemUrl:
    "https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg",
},
{
    id: 3,
    nome: "O Incrível Hulk",
    imagemUrl:
    "https://br.web.img2.acsta.net/c_310_420/pictures/210/485/21048566_20131010182211313.jpg",
},
{
    id: 4,
    nome: "Homem de Ferro",
    imagemUrl:
    "https://images-na.ssl-images-amazon.com/images/I/81vTHovrz%2BL._AC_SY606_.jpg",
},
{
    id: 5,
    nome: "Homem de Ferro 2",
    imagemUrl:
    "https://media.fstatic.com/SFp4c8GT3GTGYok7_526qDSHTns=/290x478/smart/media/movies/covers/2018/09/66432b37ed80464274a58239b695007f95c79155.jpg",
}
];

const getFilmesValidos = () => filmes.filter(Boolean);
const getFilmeById = (id) => getFilmesValidos().find((filme) => filme.id === id);
const getIndexByFilme = (id) => getFilmesValidos().findIndex((filme) => filme.id == id);

app.get('/', (req, res) => {
    res.send('Bem vindo a biblioteca de filmes!');
})

app.get('/filmes', (req, res) => {
    res.send(getFilmesValidos());
})

app.get('/filmes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const filme = getFilmeById(id);
    
    if (!filme) {
        res.send('Filme não encontrado!')
    }
    res.send(filme);
})

app.post('/filmes', (req, res) => {
    const filme = req.body;

    if(!filme || !filme.nome || filme.imagemUrl){
        res.status(400).send({
            message: 'Filme inválido, tente novamente!'
        });
        return;
    }

    const ultimoFilme = filmes[filmes.length -1];

    if(filmes.length){
        filme.id = ultimoFilme.id +1;
        filmes.push(filme);
    }else{
        filme.id = 1;
        filmes.push(filme);
    }

    res.send(`Filme adicionado com sucesso: ${filme.nome}. O ID do filme é ${filme.id}`);
})

app.put('/filmes/:id', (req, res) => {
    const id = +req.params.id -1;

    const filmeIndex = getIndexByFilme(id);

    if (filmeIndex < 0){
        res.status(404).send({
            message: "O filme não foi encontrado, tente novamente."
        });
        return;
    }   

    const novoFilme = req.body;

    if (!Object.keys(novoFilme).length){
        res.status(400).send({
            message: 'O body está vazio!'
        });
    }

    if(!novoFilme || !novoFilme.nome || !novoFilme.imagemUrl){
        res.status(400).send({
            message: "Filme inválido, tente novamente."
        });
        return;
    }

    const filme = getFilmeById(id);

    console.log(filmeIndex);
    filmes[filmeIndex] = {
        ...filme,
        ...novoFilme,
    };

    res.send(filmes[filmeIndex]);


app.delete('/filmes/:id', (req, res) =>{
    const id = +req.params.id;

    const filmeIndex = getIndexByFilme(id);
    
    if(filmeIndex < 0 ){
        res.status(404).send({
        message: "Filme não encontrado, tente novamente."
    });
    return;
    }
    filmes.splice(filmeIndex, 1);
    res.send({
        message: "Filme removido com sucesso"
    });
});


app.listen(port, function() {
    console.info(`App esta rodando em: http://localhost:${port}/`);
})