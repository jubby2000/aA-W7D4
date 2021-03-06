export const fetchAllPokemon = () => {
  return $.ajax({
    type: 'GET',
    url: 'api/pokemon'
  });
};

export const fetchSinglePokemon = (id) => {
  return $.ajax({
      type: 'GET',
      url: `api/pokemon/${id}`
  });
};
