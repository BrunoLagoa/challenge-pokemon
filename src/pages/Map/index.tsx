import React, { useCallback } from 'react';
import ModalDetailCapture from '../../components/ModalDetailCapture';

import Sidebar from '../../components/Sidebar';

import { useSelector, useDispatch } from 'react-redux';
import { Creators as pokemonActions } from '../../store/ducks/pokemon';

import * as S from './styled';
import { IReduxStore } from '../../utils/interfaces/IReduxStore';

const MapPage = () => {
  const { isLoading, tooltip, pokemon, slot, isModalOpen } = useSelector(
    (state: IReduxStore) => state.pokemon
  );

  const dispatch = useDispatch();

  const handleModalDetailCapture = useCallback(() => {
    if (isLoading) return;

    dispatch(pokemonActions.getPokemonRequest());
  }, [isLoading]);

  const handleToggleModal = useCallback(() => {
    dispatch(pokemonActions.openModal(false));
  }, []);

  const handleCapturePokemon = useCallback(() => {
    dispatch(pokemonActions.setPokemonRequest({ type: 'add' }));
  }, []);

  const handleRemovePokemon = useCallback((slotIndex: number) => {
    dispatch(pokemonActions.setPokemonRequest({ type: 'remove', slotIndex }));
  }, []);

  return (
    <S.MapWrapper className="map">
      <Sidebar slot={slot} onRemovePokemon={handleRemovePokemon} />
      <ModalDetailCapture
        isModalOpen={isModalOpen}
        onToggleModal={handleToggleModal}
        onCapturePokemon={handleCapturePokemon}
        pokemon={pokemon}
      />
      <S.Content>
        <S.Search tooltip={tooltip} />
        <S.AshFront onClick={handleModalDetailCapture} />
      </S.Content>
    </S.MapWrapper>
  );
};

export default MapPage;
