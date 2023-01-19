import { createActions, createReducer } from 'reduxsauce';
import { IPokemon } from '../../../utils/interfaces/IPokemon';
import { IPokemonState, IPokemonActionsCreators, PokemonTypes } from './types';

export const { Creators, Types } = createActions<
  Record<PokemonTypes, PokemonTypes>,
  IPokemonActionsCreators
>({
  getPokemonRequest: [],
  getPokemonSuccess: ['payload'],
  getPokemonFailure: [],

  setPokemonRequest: ['payload'],
  setPokemonSuccess: ['payload'],

  openModal: ['payload'],
  clearState: [],
});

const INITIAL_STATE: IPokemonState = {
  isLoading: false,
  tooltip: 'search',
  isModalOpen: false,
  pokemon: {
    name: '',
    id: 0,
    types: [],
    height: 0,
    weight: 0,
    abilities: [],
    stats: [],
    sprites: {
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
  },
  slot: [],
};

const getPokemonRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
  isModalOpen: false,
  tooltip: 'searching',
});

const getPokemonSuccess = (
  state = INITIAL_STATE,
  action: { payload: IPokemon }
) => ({
  ...state,
  isLoading: false,
  isModalOpen: true,
  tooltip: 'search',
  pokemon: action.payload,
});

const getPokemonFailure = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: false,
  isModalOpen: false,
  tooltip: 'error',
});

const openModal = (state = INITIAL_STATE, action: { payload: boolean }) => ({
  ...state,
  isModalOpen: action.payload,
});

const setPokemonSuccess = (
  state = INITIAL_STATE,
  action: { payload: IPokemon[] }
) => ({
  ...state,
  isModalOpen: false,
  tooltip: 'search',
  slot: action.payload,
});

const clearState = () => INITIAL_STATE;

export default createReducer(INITIAL_STATE, {
  [Types.GET_POKEMON_REQUEST]: getPokemonRequest,
  [Types.GET_POKEMON_SUCCESS]: getPokemonSuccess,
  [Types.GET_POKEMON_FAILURE]: getPokemonFailure,
  [Types.OPEN_MODAL]: openModal,
  [Types.SET_POKEMON_SUCCESS]: setPokemonSuccess,
  [Types.CLEAR_STATE]: clearState,
});
