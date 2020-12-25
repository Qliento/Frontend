import React, { useEffect,useState } from "react";
import DetailMarket from "./detailMarket/detailMarket";
import Tabs1 from "./detailMarket/detailMarket";
import MarketCard from "./marketCard/marketCard";
import SimilarResearch from "./similarResearch/similarResearch";
import { useDispatch, useSelector } from "react-redux";
import { detailResearchAction } from "../../redux/actions/marketInreriorPage/marketInterPage";

const DetailCard = ({ params }) => {
  const [triger,setTriger]=useState(false)
  const dispatch = useDispatch();
  console.log(params);
  useEffect(() => {
    dispatch(detailResearchAction(params));
  }, [params]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const data = useSelector((state) => state.detailDataResearch.detailData);


  return (
    <>
      <DetailMarket data={data && data} />
      {data.similars &&
        data.similars.length<1? (
        <></>
      ) : (
        <SimilarResearch />
      )}

      {data.similars &&
        data.similars.map((item) => {
          return <MarketCard data={item} key={item.id}/>;
        })}
    </>
  );
};
export default DetailCard;
