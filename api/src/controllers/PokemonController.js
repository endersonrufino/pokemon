const axios = require('axios');
//const getPokemonById = require('../utils/getPokemoById');
module.exports = {
    async index(request, response) {

        try {

            const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10`);

            return response.json(apiResponse.data.results);
            
        } catch (error) {

            console.log(error);
        }
    },

    async show(request, response) {

        try {

            const { id } = request.params;

            const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

            console.log(apiResponse.data);

            return response.json(apiResponse.data);

        } catch (error) {
            console.log(error);
        }
    }
};