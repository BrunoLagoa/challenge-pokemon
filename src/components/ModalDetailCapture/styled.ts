import styled from 'styled-components/macro';

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 98;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.colors.primary.gradient};
  width: 400px;
  height: 600px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: white;
  position: relative;
  overflow-y: auto;

  @media (max-width: 375px) {
    width: 300px;
    height: 600px;
  }
`;

export const Close = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-right: 1rem;

  & button {
    margin-left: auto;
    background-color: ${({ theme }) => theme.colors.neutral['200']};
    border-radius: 32px;
    padding: 1rem 1rem;

    &.icon {
      width: 44px;
      height: 44px;
      border: 2px solid ${({ theme }) => theme.colors.neutral['600']};
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral['500']};
    }
  }

  @media (max-width: 360px) {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10rem;
  background: ${({ theme }) => theme.colors.neutral['100']};
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const PokemonAvatar = styled.img`
  width: 250px;
  height: 250px;
  background-size: cover;
  background-color: white;
  border-radius: 200px;
  border: 3px solid ${({ theme }) => theme.colors.primary.default};
  margin-top: -126px;
`;

export const PokemonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PokemonContentTitle = styled.h1`
  margin-top: 36px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  text-transform: uppercase;
`;

export const PokemonContentDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 36px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div:nth-child(2) {
    padding: 0 40px;
    border-left: 1px solid ${({ theme }) => theme.colors.neutral['500']};
    border-right: 1px solid ${({ theme }) => theme.colors.neutral['500']};
  }

  h2 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
  }

  span {
    font-weight: bold;
    font-size: 18px;
  }
`;

export const SessionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-top: 30px;
`;

export const TypeList = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TypeItem = styled.li<{ type: string }>`
  border-radius: 20px;
  min-width: 99px;
  min-height: 32px;
  padding: 8px 16px;
  background-color: ${({ theme, type }) => theme.colors.types[type]};
  color: ${({ theme }) => theme.colors.neutral['200']};
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  line-height: 16px;
`;

export const SkillsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

export const SkillItem = styled.li`
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.neutral['700']};
`;

export const CleanPokemon = styled.div`
  position: sticky;
  float: left;
  left: 50%;
  top: 80%;
  transform: translateX(-50%);
  z-index: 22;

  & button {
    box-shadow: 1px 15px 30px rgba(0, 0, 0, 0.4);
    span {
      font-weight: bold;
    }
  }

  @media (max-width: 375px) {
    transform: translateX(-25%);
  }
`;

//  Alterar para ::before e ::after
export const Title = styled.h2`
  width: 90%;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral['500']};
  line-height: 0.1em;
  margin-bottom: 30px;

  & span {
    text-transform: uppercase;
    font-weight: bold;
    background: ${({ theme }) => theme.colors.neutral['100']};
    padding: 0 10px;
  }
`;

export const StatisticList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  width: 100%;
`;

export const StatisticLeftColumn = styled.div`
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 12px;

  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
  }
`;

export const StatisticRightColumn = styled.div`
  grid-column: 2 / 3;
  padding-right: 20px;
  text-align: right;

  p {
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
  }
`;

export const StatisticImage = styled.img`
  width: 100%;
  max-width: 18px;
  object-fit: contain;
`;
