import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  padding: 1.6rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.action.dark};
  border: 1px solid ${({ theme }) => theme.colors.action.dark};
  border-radius: 42px;
  font-family: 'OpenSans', sans-serif;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral['100']};
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;

  &.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border: 4px solid ${({ theme }) => theme.colors.action.default};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.action.default};
  }
`;

export const Icon = styled.img``;

export const Text = styled.span``;
