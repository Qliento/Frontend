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
  const numberKeys=(Object.keys(params).length)
  return (
    <div className={classes.marketPage}>
      <div className={classes.breadLink}>
        <Link to="/">Главная</Link>
        <span>{" / "}</span>
        <Link to="/market-research">Маркет исследований</Link>
      </div>
      <MarketFilter category={params.category} />
      <Switch>
        {
          numberKeys===2?<Route
          path="/market-research/:category/:text"
        ><MarketCards params={params}/></Route>: null
        }
        {
          numberKeys === 1 ? <Route
          path="/market-research/:category"
        ><MarketCards params={params}/></Route>: null
        }
        {
          numberKeys=== 0 ? <Route
          path="/market-research"
        ><MarketCards params={params}/></Route>: null
        }
        
        <Route path="/market-research/detail/:id" component={DetailCard} />
      </Switch>
    </div>
  );
};
export default MarketResearch;
