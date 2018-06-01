const selectAllPokemon = ({ entities }) => {
  const res = [];
  const keys = Object.keys(entities.pokemon);
  keys.map(pokemonId => {
    res.push(entities.pokemon[pokemonId])
  })
  return res;
};

export default selectAllPokemon;
