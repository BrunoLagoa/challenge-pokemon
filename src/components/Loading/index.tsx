import React from 'react';

import { Wrapper, Spinner, Circle } from './styled';

interface IProps {
  size?: string;
}

const Loading = ({ size = '24px' }: IProps) => (
  <Wrapper size={size}>
    <Spinner size={size}>
      <Circle size={size} />
      <Circle size={size} />
      <Circle size={size} />
      <Circle size={size} />
    </Spinner>
  </Wrapper>
);

export default Loading;
