import styled, { keyframes } from 'styled-components';

import img from '../../assets/images/pageBackground.png';

import ashFrontImg from '../../assets/images/ashFront.png';

import searchTooltipImg from '../../assets/images/searchTooltip.png';
import searchingTooltipImg from '../../assets/images/searchingTooltip.png';
import errorTooltipImg from '../../assets/images/tooltipError.png';

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  :hover {
    & img:first-child {
      opacity: 1;
      animation: 0.5s ${fadeIn} ease both;
    }
  }
`;

interface IProps {
  tooltip: string;
}

type Map = Record<string, string>;

const tooltipType: Map = {
  search: searchTooltipImg,
  searching: searchingTooltipImg,
  error: errorTooltipImg,
};

export const Search = styled.img.attrs(({ tooltip }: IProps) => ({
  src: `${tooltipType[tooltip]}`,
}))<IProps>`
  margin-bottom: 1rem;
  opacity: 0;
`;

export const AshFront = styled.img.attrs({
  src: `${ashFrontImg}`,
})``;
