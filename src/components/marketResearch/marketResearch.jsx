import React from "react";
import MarketCard from "./marketCard/marketCard";
import MarketFilter from "./marketFilter/marketFilter";
import classes from "./marketResearch.module.css";
import { Link, Route, Switch,useParams } from "react-router-dom";
import MarketCards from "./marketCards";
import DetailCard from "./detailCard";

const MarketResearch = () => {
  return (
    <div className={classes.marketPage}>
      <div className={classes.breadLink}>
        <Link to="/">Главная</Link>
        <span>{" / "}</span>
        <Link to="/market-research">Маркет исследований</Link>
        <Link>/ Рынок частной медицины 2020. База сетей</Link>
      </div>
      <MarketFilter />
      <Switch>
        <Route exact  path="/market-research" component={MarketCards} />
        <Route  path="/market-research/detail/:id" component={DetailCard} />
      </Switch>

    </div>
  );
};
export default MarketResearch;
