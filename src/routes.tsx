import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import MapPage from './pages/Map';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/map" component={MapPage} />
        <Route path="/*" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
