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
import Analitic from './components/analitic/analitic';
import AnaliticCard from './components/analitic_Card/analiticCard';
import MarketResearch from "./components/marketResearch/marketResearch"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container_wrapper">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/auth" component={Auth} />
        <Route path="/registration" component={Registration} />
        <Route path="/registration-organization" component={RegistOrganization} />
        <Route path="/registration-client" component={RegistrationClient} />
        <Route path="/about-us" component={About} />
        <Route path="/analitic" component={Analitic} />
        <Route path="/analiticCard" component={AnaliticCard} />
        <Route path="/market-research" component={MarketResearch} />
      </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
