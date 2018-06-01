import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions.js';

const itemsReducer = (state = {}, action) => {
  // debugger
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      // return action.pokemon.items;
      return state;
    default:
      return state;
  }
};

export default itemsReducer;
