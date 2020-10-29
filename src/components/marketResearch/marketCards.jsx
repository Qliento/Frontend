import React, { useEffect } from "react";
import MarketCard from "./marketCard/marketCard";
import { useDispatch, useSelector } from "react-redux";
import { mainSearch } from "../../redux/actions/mainSearch/mainSearch";

const MarketCards = ({ params }) => {
  console.log(params);
  const dispatch = useDispatch();
  const arrResearch=useSelector((state)=>state.mainResultSearch.researchList)
  useEffect(() => {
    if (params.category || params.text) {
      dispatch(mainSearch(params.category, params.text));
    }
  }, []);
  console.log(arrResearch)
  return (
    <>
    {
      arrResearch && 
      arrResearch.map((item)=>{
          return(
                <MarketCard id={1} data={item} />
          )
      })
    }
      
    </>
  );
};
export default MarketCards;
