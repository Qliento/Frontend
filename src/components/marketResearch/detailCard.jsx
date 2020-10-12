import React from "react"
import Tabs1 from "./detailMarket/detailMarket";
import MarketCard from "./marketCard/marketCard";
import SimilarResearch from "./similarResearch/similarResearch";

const DetailCard=()=>{
    return(
        <>
        <Tabs1/>
        <SimilarResearch/>
        <MarketCard/>
        <MarketCard/>
        <MarketCard/>
        </>
    )
}
export default DetailCard;