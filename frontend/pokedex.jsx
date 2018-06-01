import React from 'react';
import ReactDOM from 'react-dom';
import createStore from "./store/store.js";
import Root from './components/root.js';
import * as APIUtil from './util/api_util.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  window.fetchPokemon = APIUtil.fetchSinglePokemon;
});
