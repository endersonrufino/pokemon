const express = require('express');

const PokemonController = require('./controllers/PokemonController');

const routes = express.Router();

routes.get('/pokemonLimit', PokemonController.getLimitPokemon);

module.exports = routes;