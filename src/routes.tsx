import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import MapPage from "./pages/Map";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/map" component={MapPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
