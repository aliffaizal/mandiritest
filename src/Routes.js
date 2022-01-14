import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import { Main as MainView, Detail as DetailView } from "./views";
import List from "./views/List";
import Detail from "./views/Detail";

const Routes = () => {
  let routes = (
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/:id" component={Detail} />
      <Redirect exact to="/" />
    </Switch>
  );

  return routes;
};

export default Routes;
