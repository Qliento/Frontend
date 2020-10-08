import React from "react"
import MarketCard from "./marketCard/marketCard";
import classes from "./marketResearch.module.css";


const MarketResearch=()=>{
    return(
        <div className={classes.marketPage}>
            <MarketCard/>
            <MarketCard/>
            <MarketCard/>
            <MarketCard/>
            <MarketCard/>
            <MarketCard/>
            <MarketCard/>
        </div>
    )
}
export default MarketResearch;