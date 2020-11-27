import React, { useEffect } from "react";
import DetailMarket from "./detailMarket/detailMarket";
import Tabs1 from "./detailMarket/detailMarket";
import MarketCard from "./marketCard/marketCard";
import SimilarResearch from "./similarResearch/similarResearch";
import { useDispatch, useSelector } from "react-redux";
import { detailResearchAction } from "../../redux/actions/marketInreriorPage/marketInterPage";

const DetailCard = ({ params }) => {
  const dispatch = useDispatch();
  console.log(params);
  useEffect(() => {
    dispatch(detailResearchAction(params));
  }, [params]);
  const data = useSelector((state) => state.detailDataResearch.detailData);
  return (
    <>
      <DetailMarket data={data && data} />
      {data.similars && data.similars.lenght !== 0  ? <SimilarResearch /> : <></>}

      {data.similars && data.similars.lenght !== 0 ? (
        data.similars.map((item) => {
          return <MarketCard data={item} />;
        })
      ) : (
        <></>
      )}
    </>
  );
};
export default DetailCard;
