const axios = require('axios');

module.exports = {
    async index(request, response) {

        const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10`);


        return response.json(apiResponse.data);
    },

    async show(request, response) {

        const { id } = request.params;
        
        const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

        console.log(apiResponse.data);

        return response.json(apiResponse.data);
    }
};