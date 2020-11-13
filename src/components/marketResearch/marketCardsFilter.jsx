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

const MarketCardsFilter = ({ params, sort1, sort2 }) => {

  const numberKeys = Object.keys(params).length;
  const dispatch = useDispatch();

  let arrResearch = useSelector((state) => state.mainResultSearch.researchList);

  let arr = [];
  arr = sort1
    ? arrResearch.sort((a, b) => (a.new_price < b.new_price ? -1 : 1))
    : arrResearch;
  arr = sort2 ? arr.sort((a, b) => (a.date < b.date ? -1 : 1)) : arr;
  useEffect(() => {

      dispatch(allResearch());
    

  }, []);

  return (
    <>
      {arr &&
        arr.map((item) => {
          return <MarketCard data={item} key={item.id} />;
        })}
    </>
  );
};
export default MarketCardsFilter;
