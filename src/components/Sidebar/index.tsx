import React from 'react';

import Button from '../Button';

import iconPlus from '../../assets/images/plus.png';

import * as S from './styled';
import { IPokemon } from '../../utils/interfaces/IPokemon';

interface ISidebar {
  slot: IPokemon[];
  onRemovePokemon: (slotIndex: number) => void;
}

const Sidebar = ({ slot, onRemovePokemon }: ISidebar) => {
  console.log('slot', slot);

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {!slot.length && <S.SideBarItem>?</S.SideBarItem>}
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

      <Button icon={iconPlus} onClick={() => {}} />
    </S.SideBarWrapper>
  );
};

export default Sidebar;
