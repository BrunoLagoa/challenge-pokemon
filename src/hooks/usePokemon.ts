import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as pokemonActions } from '../store/ducks/pokemon';
import { IReduxStore } from '../utils/interfaces/IReduxStore';

export const usePokemon = () => {
  const { isLoading, pokemon } = useSelector(
    (state: IReduxStore) => state.pokemon
  );

  const dispatch = useDispatch();

  const getPokemon = useCallback(() => {
    if (isLoading) return;

    dispatch(pokemonActions.getPokemonRequest());
  }, [isLoading]);

  const toggleModal = useCallback(() => {
    dispatch(pokemonActions.openModal(false));
  }, []);

  const capturePokemon = useCallback(() => {
    dispatch(pokemonActions.setPokemonRequest({ type: 'add' }));
  }, []);

  const removePokemonCaptured = useCallback((slotIndex: number) => {
    dispatch(pokemonActions.setPokemonRequest({ type: 'remove', slotIndex }));
  }, []);

  return {
    isLoading,
    pokemon,
    getPokemon,
    toggleModal,
    capturePokemon,
    removePokemonCaptured,
  };
};
