import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
  background-color: transparent;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 360px) {
    button {
      border-radius: 42px;
      padding: 0rem 0rem;

      &.icon {
        width: 50px;
        height: 50px;
        border: 4px solid #db2c66;
      }
    }
  }
`;

export const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SideBarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  border: 4px solid ${({ theme }) => theme.colors.primary.dark};
  border-radius: 12.8rem;
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.dark};
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.colors.primary.default};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.primary.default};
  }

  &:not(last-of-type) {
    margin-bottom: 1.6rem;
  }

  img {
    background-size: cover;
    width: 40px;
  }

  @media (max-width: 360px) {
    width: 5rem;
    height: 5rem;
    border: 2px solid #004a45;

    &:not(last-of-type) {
      margin-bottom: 0.5rem;
    }
  }
`;
