import React, { useEffect } from "react";
import MarketCard from "./marketCard/marketCard";
import { useDispatch, useSelector } from "react-redux";
import { listResearchCategory, mainSearch,allResearch } from "../../redux/actions/mainSearch/mainSearch";

const MarketCards = ({ params }) => {
  console.log(params);
  const numberKeys=(Object.keys(params).length)
  const dispatch = useDispatch();
  const arrResearch=useSelector((state)=>state.mainResultSearch.researchList)
  useEffect(() => {
    if(numberKeys===2){
      if (params.category || params.text) {
        dispatch(mainSearch(params.category, params.text));
      }
    }
    else if(numberKeys === 1){
      dispatch(listResearchCategory(params.category))
    }
    else{
      dispatch(allResearch())
    }

  }, [params]);
  console.log(arrResearch)
  return (
    <>
    {
      arrResearch && 
      arrResearch.map((item)=>{
          return(
                <MarketCard  data={item} key={item.id} />
          )
      })
    }
      
    </>
  );
};
export default MarketCards;
