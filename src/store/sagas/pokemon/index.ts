import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { IPokemon } from '../../../utils/interfaces/IPokemon';

import {
  Creators as pokemonActions,
  Types as pokemonTypes,
} from '../../ducks/pokemon';

function* getPokemon() {
  try {
    const randomPokemonId = Math.floor(Math.random() * 807) + 1;

    const { data }: AxiosResponse<IPokemon> = yield call(
      api.get,
      `/${randomPokemonId}`
    );

    yield put(pokemonActions.getPokemonSuccess(data));
  } catch (error) {
    toast.error('Error ao carregar pokemon!', {
      position: toast.POSITION.TOP_RIGHT,
    });
    yield put(pokemonActions.getPokemonFailure());
  }
}

export default [takeLatest(pokemonTypes.GET_POKEMON_REQUEST, getPokemon)];
