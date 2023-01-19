import { Action, ActionCreatorsMapObject } from 'redux';
import { IPokemon } from '../../../utils/interfaces/IPokemon';

export interface IPokemonState {
  isLoading: boolean;
  isModalOpen: boolean;
  tooltip: string;
  pokemon: IPokemon;
}

export interface IPokemonActions {
  getPokemonRequest: () => Action<void>;
  getPokemonSuccess: (payload: IPokemon) => Action<void>;
  getPokemonFailure: () => Action<void>;
  openModal: (payload: boolean) => Action<void>;
  clearState: () => Action<void>;
}

export type PokemonTypes =
  | 'GET_POKEMON_REQUEST'
  | 'GET_POKEMON_SUCCESS'
  | 'GET_POKEMON_FAILURE'
  | 'OPEN_MODAL'
  | 'CLEAR_STATE';

export interface IPokemonActionsCreators
  extends IPokemonActions,
    ActionCreatorsMapObject {}