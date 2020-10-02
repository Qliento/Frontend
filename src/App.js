import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./components/main/main";
import Auth from "./components/auth/auth";
import Registration from "./components/registration/registration";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/auth" component={Auth} />
        <Route path="/registration" component={Registration} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
