import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

import iconPlus from '../../assets/images/plus.png';

import Button from '../Button';
import { IPokemon } from '../../utils/interfaces/IPokemon';

import * as S from './styled';

interface ISidebar {
  slot: IPokemon[];
  onRemovePokemon: (slotIndex: number) => void;
}

const Sidebar = ({ slot, onRemovePokemon }: ISidebar) => {
  const handleSlotEmpty = useCallback(() => {
    toast.info('Não existe pokemon capturado.', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }, []);

  const handleCreatePokemon = useCallback(() => {
    console.log('createPokemon');
  }, []);

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {!slot.length && (
          <S.SideBarItem onClick={handleSlotEmpty}>?</S.SideBarItem>
        )}
        {slot.map((pokemon, index) => (
          <S.SideBarItem
            key={index}
            onClick={() => {
              onRemovePokemon(index);
            }}>
            <img
              src={pokemon.sprites?.other['official-artwork'].front_default}
              alt={pokemon.name}
            />
          </S.SideBarItem>
        ))}
      </S.SideBarList>

      <Button icon={iconPlus} onClick={handleCreatePokemon} />
    </S.SideBarWrapper>
  );
};

export default Sidebar;
