import styled from 'styled-components';
import pokemonLogo from '../../assets/images/pokemonLogo.png';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary.gradient};
  & button {
    width: 12rem;
    box-shadow: 1px 15px 30px rgba(0, 0, 0, 0.4);
    transition: all 0.2s;
  }
  & button span {
    font-weight: bold;
  }
`;

export const Logo = styled.img.attrs({
  src: `${pokemonLogo}`,
})`
  margin-bottom: 3rem;
`;
