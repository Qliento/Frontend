import React, { useState } from "react";
// import MarketCard from "./marketCard/marketCard";
import MarketFilter from "./marketFilter/marketFilter";
import classes from "./marketResearch.module.css";
import { Link, Route, Switch, useParams } from "react-router-dom";
import MarketCards from "./marketCards";
import DetailCard from "./detailCard";
// import DetailMarket from "./detailMarket/detailMarket";
import MarketCardsFilter from "./marketCardsFilter";
import {useSelector} from 'react-redux';

const MarketResearch = ({ filter }) => {
  const params = useParams();
  const language = useSelector(state => state.langReducer.lang)
  const [sort1, setSort1] = useState(false);
  const [sort2, setSort2] = useState(false);
  const [dataFilter, setDataFilter] = useState({
    category: "",
    subCategory: "",
    author: "",
    country: "",
    searchText: "",
  });
  const ubdateDataFilter = () => {};
  const numberKeys = Object.keys(params).length;

  return (
    <div className={classes.marketPage}>
      <div className={classes.breadLink}>
        {language === 1 && <>
          <Link to="/">Главная</Link>
          <span>{" / "}</span>
          <Link to="/market-research">Маркет исследований</Link>
        </>}
        {language === 2 && <>
          <Link to="/">Home</Link>
          <span>{" / "}</span>
          <Link to="/market-research">Research market</Link>
        </>}
        {language === 3 && <>
          <Link to="/">Башкы бет</Link>
          <span>{" / "}</span>
          <Link to="/market-research">Изилдөөлөр</Link>
        </>}
      </div>
      <MarketFilter
        sort1={() => setSort1(!sort1)}
        sort2={() => setSort2(!sort2)}
        category={params.category}
        text={params.text}
        sendDataFilter={ubdateDataFilter}
      />

      <Switch>
        <Route path="/market-research-filter">
          <MarketCardsFilter params={params} sort1={sort1} sort2={sort2} />
        </Route>
        <Route path="/market-research-search/:text">
          <MarketCards params={params} sort1={sort1} sort2={sort2} />
        </Route>
        <Route path="/market-research">
          <MarketCards
            params={params}
            filter={filter && filter}
            sort1={sort1}
            sort2={sort2}
          />
        </Route>
        <Route path="/market-research-detail/:id">
          <DetailCard params={params.id} />
        </Route>
      </Switch>
    </div>
  );
};
export default MarketResearch;
