let generateAnimal = require('animals')
let Moniker = require('moniker')
let adjectives = Moniker.generator([Moniker.adjective])

module.exports = () => `${uc(adjectives.choose())} ${uc(generateAnimal())}`

function uc(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}
