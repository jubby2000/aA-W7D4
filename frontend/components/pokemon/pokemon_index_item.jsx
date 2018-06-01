import React from 'react';
import {Link} from 'react-router-dom';
import PokemonDetail from './pokemon_detail'

const PokemonIndexItem = ({pokemon}) => {
  let url = `/pokemon/${pokemon.id}`;
  return (
  <div>

  <li>
    <Link to={url}>
    {pokemon.name}
    <img src={pokemon.image_url} className="small"/>
    </Link>
  </li>
  </div>
);};

export default PokemonIndexItem;
