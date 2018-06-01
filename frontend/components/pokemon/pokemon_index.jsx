import React from 'react';
import PokemonIndexItem from "./pokemon_index_item.jsx";
import { HashRouter , Route } from 'react-router-dom';
import PokemonDetailContainer from "./pokemon_detail_container";
class PokemonIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
  render() {
    return (
      <div className="page">
        <ul>
        {this.props.pokemon.map((poke) => (
          <PokemonIndexItem pokemon={poke} key={poke.id}/>
        ))}
        </ul>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />   
      </div>
    );
  }


}

export default PokemonIndex;
