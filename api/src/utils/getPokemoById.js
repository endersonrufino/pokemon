const axios = require('axios');

module.exports = async function getPokemonById(id) {
    
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return response.json(response.data);
}