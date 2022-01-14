import React from "react";
import { createBrowserHistory } from "history";
import List from "./views/List";
import { Router } from "react-router-dom";
import Routes from "./Routes";
import Footer from "./views/Footer";
import "./App.css";

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <div>
      <Router history={browserHistory}>
        <Routes>
          <List />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
