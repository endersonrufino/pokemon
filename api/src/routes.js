const express = require('express');

const PokemonController = require('./controllers/PokemonController');

const routes = express.Router();

routes.get('/pokemonLimit', PokemonController.index);

routes.get('/pokemon/:id', PokemonController.show);

module.exports = routes;