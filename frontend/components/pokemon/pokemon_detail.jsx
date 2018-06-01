import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
    // debugger
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    let {name, attack, image_url, item_ids, moves, poke_type, defense} = this.props.pokemon;
    return (
      <div>
        <h1>{name}</h1>
        <img src={image_url}/>
        <h2>{attack}</h2>
        <h2>{item_ids}</h2>
        <h2>{moves}</h2>
        <h2>{poke_type}</h2>
        <h2>{defense}</h2>
      </div>
    );
  }
}

export default PokemonDetail;
