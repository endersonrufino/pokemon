const axios = require('axios');

module.exports = {
    async getLimitPokemon(request, response) {

        const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10`); 


        return response.json(apiResponse.data);
    }
};