const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

const filmes = [
  "Velozes e Furiosos",
  "Velozes e Furiosos 2",
  "Velozes e Furiosos 3",
  "Transformers",
  "Transformers 2",
  "Tropa de Elite",
  "Tropa de Elite 2",
];

app.get("/", (req, res) => {
  res.send("Hello, Bluemer!");
});

app.get("/filmes", (req, res) => {
  res.send(filmes);
});

app.get("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;
  const filme = filmes[id];

  if (!filme) {
    res.send("Filme não encontrado!");
  }
  res.send(filme);
});

app.post("/filmes", (req, res) => {
  const filme = req.body.filme;
  const id = filmes.length;
  filmes.push(filme);

  res.send(`Filme adicionado com sucesso: ${filme}. O ID do filme é ${id}`);
});

app.put("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;
  const filme = req.body.filme;
  const nomeAnterior = filmes[id];
  filmes[id] = filme;
  res.send(
    `Filme anterior: ${nomeAnterior}, atualizado com sucesso para: ${filme}.`
  );
});

app.delete("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;
  const filme = filmes[id];

  if (!filme) {
    res.send("Filme não encontrado!");
  }
  delete filmes[id];
  res.send("Filme excluido com sucesso!");
});

app.listen(port, function () {
  console.info(`App esta rodando em: http://localhost:${port}/`);
});
