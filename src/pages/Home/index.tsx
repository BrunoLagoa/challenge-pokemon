import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import { HomeWrapper, Logo } from './styled';

const HomePage = () => {
  const history = useHistory();

  return (
    <HomeWrapper>
      <Logo />
      <Button
        text="Start"
        onClick={() => {
          history.push('/map');
        }}
      />
    </HomeWrapper>
  );
};

export default HomePage;
