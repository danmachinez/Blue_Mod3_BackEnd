const mongoose = require('mongoose');

const filmeModel = new mongoose.Schema({
    nome: { type: String, required: true },
    sinopse: { type: String, required: true},
    imgUrl: { type: String, required: true},
    anoLancamento: { type: Number}
});

const Filme = mongoose.model('filme', filmeModel);

module.exports = Filme;
