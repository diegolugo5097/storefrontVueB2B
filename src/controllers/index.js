const axios = require('axios')

exports.getPoke = () => {
  axios
    .get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}
