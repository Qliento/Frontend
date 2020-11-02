import React from "react";
import MarketCard from "./marketCard/marketCard";
import MarketFilter from "./marketFilter/marketFilter";
import classes from "./marketResearch.module.css";
import { Link, Route, Switch, useParams } from "react-router-dom";
import MarketCards from "./marketCards";
import DetailCard from "./detailCard";
import DetailMarket from "./detailMarket/detailMarket";

const MarketResearch = () => {
  const params = useParams();
  const numberKeys = Object.keys(params).length;
  console.log(params)
  return (
    <div className={classes.marketPage}>
      <div className={classes.breadLink}>
        <Link to="/">Главная</Link>
        <span>{" / "}</span>
        <Link to="/market-research">Маркет исследований</Link>
      </div>
      <MarketFilter category={params.category} />
    
          <MarketCards params={params} />

      <Switch>
  

        <Route path="/market-research/detail/:id" component={DetailCard} />
      </Switch>
    </div>
  );
};
export default MarketResearch;
