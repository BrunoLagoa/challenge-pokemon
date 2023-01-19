import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div<{ size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<{ size: string }>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

export const Circle = styled.div<{ size: string }>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: 6px;
  border: 6px solid ${({ theme }) => theme.colors.neutral['600']};
  border-radius: 50%;
  animation: ${spinner} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ theme }) => theme.colors.neutral['600']} transparent
    transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
