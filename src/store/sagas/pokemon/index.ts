import { call, put, select, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { IPokemon } from '../../../utils/interfaces/IPokemon';

import { IPokemonState } from '../../ducks/pokemon/types';
import { ReduxStore } from '../../ducks';
import { ReduxAction } from '../../';

import { Creators as modalActions } from '../../ducks/modal';
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
    yield put(modalActions.open());
  } catch (error) {
    toast.error('Error ao carregar pokemon!', {
      position: toast.POSITION.TOP_RIGHT,
    });
    yield put(pokemonActions.getPokemonFailure());
  }
}

function* addAndRemovePokemon(
  action: ReduxAction<{ type: string; slotIndex: number }>
) {
  try {
    const { slot, pokemon }: IPokemonState = yield select(
      ({ pokemon }: ReduxStore) => pokemon
    );

    let message = 'Pokemon capturado com sucesso.';
    const isTypeAdd = action.payload.type === 'add';

    if (isTypeAdd) {
      const limitCapacity = slot.length >= 6;
      yield put(modalActions.close());

      if (limitCapacity) {
        yield put(pokemonActions.getPokemonFailure());
        throw new Error(
          'Limite de 6 pokemon capturados. Não é possível adicionar mais pokemon ao slot.'
        );
      }
    }

    if (!isTypeAdd) {
      slot.splice(action.payload.slotIndex, 1);

      message = 'Pokemon removido com sucesso.';
    }

    const payload = isTypeAdd ? [pokemon, ...slot] : [...slot];

    yield put(pokemonActions.setPokemonSuccess(payload));

    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    let message = 'Error ao capturar pokemon.';

    if (error instanceof Error) {
      message = error.message;
    }

    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}

export default [
  takeLatest(pokemonTypes.GET_POKEMON_REQUEST, getPokemon),
  takeLatest(pokemonTypes.SET_POKEMON_REQUEST, addAndRemovePokemon),
];
