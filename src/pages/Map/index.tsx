import React from 'react';
import { useSelector } from 'react-redux';
import { IReduxStore } from '../../utils/interfaces/IReduxStore';

import { usePokemon } from '../../hooks/usePokemon';
import { useModal } from '../../hooks/useModal';

import ModalDetailCapture from '../../components/ModalDetailCapture';
import Sidebar from '../../components/Sidebar';

import * as S from './styled';

const MapPage = () => {
  const { tooltip, slot } = useSelector((state: IReduxStore) => state.pokemon);

  const { pokemon, getPokemon, capturePokemon, removePokemonCaptured } =
    usePokemon();

  const { isOpenModal, closeModal } = useModal();

  return (
    <S.MapWrapper className="map">
      <Sidebar slot={slot} onRemovePokemon={removePokemonCaptured} />
      <ModalDetailCapture
        isModalOpen={isOpenModal}
        onToggleModal={closeModal}
        onCapturePokemon={capturePokemon}
        pokemon={pokemon}
      />
      <S.Content>
        <S.Search tooltip={tooltip} />
        <S.AshFront onClick={getPokemon} />
      </S.Content>
    </S.MapWrapper>
  );
};

export default MapPage;
