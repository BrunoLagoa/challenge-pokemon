import React, { useCallback, Fragment } from 'react';

import Button from '../Button';

import closeImg from '../../assets/images/close.png';
import pokeBallImg from '../../assets/images/pokeball.png';

import * as S from './styled';
import { statsTranslation } from '../../utils/dictionary/statsTranslation';
import { IPokemon } from '../../utils/interfaces/IPokemon';
import { typesTranslation } from '../../utils/dictionary/typesTranslation';

interface IModalDetailCapture {
  pokemon: IPokemon;
  isModalOpen: boolean;
  onToggleModal: () => void;
  onCapturePokemon: () => void;
}

const ModalDetailCapture = ({
  pokemon,
  isModalOpen,
  onToggleModal,
  onCapturePokemon,
}: IModalDetailCapture) => {
  const handleCapturePokemon = useCallback(() => {
    onCapturePokemon();
  }, []);

  return (
    <Fragment>
      {isModalOpen && (
        <S.ModalWrapper>
          <S.Modal>
            <S.Close>
              <Button
                icon={closeImg}
                onClick={() => {
                  onToggleModal();
                }}
              />
            </S.Close>
            <S.CleanPokemon>
              <Button icon={pokeBallImg} onClick={handleCapturePokemon} />
            </S.CleanPokemon>
            <S.ModalContent>
              <S.PokemonContainer>
                <S.PokemonAvatar
                  src={pokemon.sprites?.other['official-artwork'].front_default}
                  alt={pokemon.name}
                />

                <S.PokemonContent>
                  <S.PokemonContentTitle>{pokemon.name}</S.PokemonContentTitle>
                  <S.PokemonContentDetail>
                    <div>
                      <h2>Hp</h2>
                      <span>
                        {pokemon.stats[0].base_stat}/
                        {pokemon.stats[2].base_stat}
                      </span>
                    </div>
                    <div>
                      <h2>Atura</h2>
                      <span>{pokemon.height} m</span>
                    </div>
                    <div>
                      <h2>Peso</h2>
                      <span>{pokemon.weight} kg</span>
                    </div>
                  </S.PokemonContentDetail>
                  <S.SessionContent>
                    <S.Title>
                      <span>Tipo</span>
                    </S.Title>
                    <S.TypeList>
                      {pokemon.types.map(({ type }, index) => (
                        <S.TypeItem key={index} type={type.name}>
                          {typesTranslation[type.name].name}
                        </S.TypeItem>
                      ))}
                    </S.TypeList>
                  </S.SessionContent>
                  <S.SessionContent>
                    <S.Title>
                      <span>Habilidades</span>
                    </S.Title>
                    <S.SkillsList>
                      {pokemon.abilities.map((ability, index) => (
                        <S.SkillItem key={index}>
                          {ability.ability.name}
                        </S.SkillItem>
                      ))}
                    </S.SkillsList>
                  </S.SessionContent>

                  <S.SessionContent>
                    <S.Title>
                      <span>Estatísticas</span>
                    </S.Title>

                    <S.StatisticList>
                      {pokemon.stats.map((stat, index) => (
                        <Fragment key={index}>
                          <S.StatisticLeftColumn>
                            <S.StatisticImage
                              src={statsTranslation[stat.stat.name].image}
                              alt="imagem"
                            />
                            <p>
                              {statsTranslation[stat.stat.name].translation}
                            </p>
                          </S.StatisticLeftColumn>
                          <S.StatisticRightColumn>
                            <p>{stat.base_stat}</p>
                          </S.StatisticRightColumn>
                        </Fragment>
                      ))}
                    </S.StatisticList>
                  </S.SessionContent>
                </S.PokemonContent>
              </S.PokemonContainer>
            </S.ModalContent>
          </S.Modal>
        </S.ModalWrapper>
      )}
    </Fragment>
  );
};

export default ModalDetailCapture;
