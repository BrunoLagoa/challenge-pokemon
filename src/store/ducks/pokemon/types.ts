import { Action, ActionCreatorsMapObject } from 'redux';
import { IPokemon } from '../../../utils/interfaces/IPokemon';

export interface IPokemonState {
  isLoading: boolean;
  tooltip: string;
  pokemon: IPokemon;
  slot: IPokemon[];
}

export interface IPokemonActions {
  getPokemonRequest: () => Action<void>;
  getPokemonSuccess: (payload: IPokemon) => Action<void>;
  getPokemonFailure: () => Action<void>;
  setPokemonRequest: (payload: {
    type: 'add' | 'remove';
    slotIndex?: number;
  }) => Action<void>;
  setPokemonSuccess: (payload: IPokemon[]) => Action<void>;
  clearState: () => Action<void>;
}

export type PokemonTypes =
  | 'GET_POKEMON_REQUEST'
  | 'GET_POKEMON_SUCCESS'
  | 'GET_POKEMON_FAILURE'
  | 'SET_POKEMON_REQUEST'
  | 'SET_POKEMON_SUCCESS'
  | 'CLEAR_STATE';

export interface IPokemonActionsCreators
  extends IPokemonActions,
    ActionCreatorsMapObject {}
