import React, { useEffect } from "react";
import MarketCard from "./marketCard/marketCard";
import { useDispatch, useSelector } from "react-redux";
import {
  listResearchCategory,
  mainSearch,
  allResearch,
  mainSearchText,
  mainSearchCategoryText,
} from "../../redux/actions/mainSearch/mainSearch";

const MarketCards = ({ params, sort1, sort2 }) => {

  const numberKeys = Object.keys(params).length;
  const dispatch = useDispatch();

  let arrResearch = useSelector((state) => state.mainResultSearch.researchList);

  let arr = [];
  arr = sort1
    ? arrResearch.sort((a, b) => (a.new_price < b.new_price ? -1 : 1))
    : arrResearch;
  arr = sort2 ? arr.sort((a, b) => (a.date < b.date ? -1 : 1)) : arr;
  useEffect(() => {
    if (params.text && numberKeys === 1) {
      dispatch(mainSearchText(params.text));
    }
    if (params.category && numberKeys === 1) {
      dispatch(listResearchCategory(params.category));
      
    }
    if (params.category && params.text && numberKeys === 2) {
      dispatch(mainSearchCategoryText(params.category, params.text));
    }
    if (numberKeys === 0 ) {
      dispatch(allResearch());
    }
  }, [params, sort1, sort2]);

  return (
    <>
      {arr &&
        arr.map((item) => {
          return <MarketCard data={item} key={item.id} />;
        })}
    </>
  );
};
export default MarketCards;
