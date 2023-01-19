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
};

const getPokemonRequest = () => ({
  ...INITIAL_STATE,
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

const getPokemonFailure = () => ({
  ...INITIAL_STATE,
  isLoading: false,
  isModalOpen: false,
  tooltip: 'error',
});

const openModal = (state = INITIAL_STATE, action: { payload: boolean }) => ({
  ...state,
  isModalOpen: action.payload,
});

const clearState = () => INITIAL_STATE;

export default createReducer(INITIAL_STATE, {
  [Types.GET_POKEMON_REQUEST]: getPokemonRequest,
  [Types.GET_POKEMON_SUCCESS]: getPokemonSuccess,
  [Types.GET_POKEMON_FAILURE]: getPokemonFailure,
  [Types.OPEN_MODAL]: openModal,
  [Types.CLEAR_STATE]: clearState,
});
