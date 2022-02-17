import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Memory from "../pages/Memory";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Plan from "../pages/Plan";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Plan" component={Plan} />
      <Route path="/memory" component={Memory} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
