class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    :show
  end
end
