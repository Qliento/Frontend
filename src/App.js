import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import Main from "./components/main/main";
import Auth from "./components/auth/auth";
import Registration from "./components/registration/registration";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import RegistrationClient from "./components/registClient/registClient";
import RegistOrganization from "./components/registOrganization/regisrtOrganization";
import About from "./components/about/about";
import OrderResearch from "./components/orderResearch/orderResearch";
import BePartner from "./components/bePartner/bePartner";
import Analitic from "./components/analitic/analitic";
import AnaliticCard from "./components/analitic_Card/analiticCard";
import MarketResearch from "./components/marketResearch/marketResearch";
import News from "./components/news/news";
import QuestionPage from "./components/question/question";
import NewsCard from "./components/newsCard/newsCard";
import Basket from "./components/basket/basket";
import RecoveryPassword from "./components/recoveryPassword/recoveryPassword";
import Agreement from "./components/agreement/agreement";
import OrgPage from "./components/organizationPage/organizationPage";
import ClientPage from './components/clientPage/clientPage';
import {refreshToken} from './redux/actions/actions';

function App() {
  const dispatch = useDispatch();
  const time = new Date().getDate();
  const timeToken = localStorage.getItem('time');
  const refresh = localStorage.getItem('refresh');
  useEffect(() =>{
    if(timeToken != undefined){
      if(time != timeToken){
        dispatch(refreshToken(refresh));
      }else{
        console.log(2);
      }
    }
    else{
      console.log('работает');
    }
  })
  return (
    <div className="App">
      <Header />
      <div className="container_wrapper">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/auth" component={Auth} />
          <Route path="/registration" component={Registration} />
          <Route
            path="/registration-organization"
            component={RegistOrganization}
          />
          <Route path="/registration-client" component={RegistrationClient} />
          <Route path="/about-us" component={About} />
          <Route path="/analitic" component={Analitic} />
          <Route path="/analiticCard/:id" component={AnaliticCard} />
          <Route
            path="/market-research/:category/:text"
            component={MarketResearch}
          />
   
          
          <Route
            path="/market-research-detail/:id"
            component={MarketResearch}
          />
          <Route path="/market-research-search2/:category/:text" component={MarketResearch} />
          <Route path="/market-research/:category" component={MarketResearch} />
          <Route path="/market-research-search/:text" component={MarketResearch} />
            <Route path="/market-research-filter"><MarketResearch filter={true}/></Route>
    
          <Route path="/market-research" component={MarketResearch} />
          <Route path="/order-research" component={OrderResearch} />
          <Route path="/be-partner" component={BePartner} />
          <Route path="/news" component={News} />
          <Route path="/questions" component={QuestionPage} />
          <Route path="/questions-ask"><QuestionPage flag={true}/></Route>

          <Route path="/newsCard" component={NewsCard} />
          <Route path="/basket" component={Basket} />
          <Route path="/recovery-password" component={RecoveryPassword} />
          <Route path="/agreement" component={Agreement} />
          <Route path="/organization-page" component={OrgPage} />
          <Route path='/client-page' component={ClientPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
