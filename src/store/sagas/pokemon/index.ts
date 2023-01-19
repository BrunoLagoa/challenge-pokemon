import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

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

    // yield delay(1000);

    yield put(pokemonActions.getPokemonSuccess(data));
  } catch (error) {
    yield put(pokemonActions.getPokemonFailure());
  }
}

export default [takeLatest(pokemonTypes.GET_POKEMON_REQUEST, getPokemon)];
