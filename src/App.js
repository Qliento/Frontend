import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./components/main/main";
import Auth from "./components/auth/auth";
import Registration from "./components/registration/registration";
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import RegistrationClient from './components/registClient/registClient'
import RegistOrganization from "./components/registOrganization/regisrtOrganization"
import About from "./components/about/about";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/auth" component={Auth} />
        <Route path="/registration" component={Registration} />
        <Route path="/registration-organization" component={RegistOrganization} />
        <Route path="/registration-client" component={RegistrationClient} />
        <Route path="/about-us" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
