import React from "react"
import MarketCard from "./marketCard/marketCard";
import MarketFilter from "./marketFilter/marketFilter";
import classes from "./marketResearch.module.css";
import {Link} from "react-router-dom"


const MarketResearch=()=>{
    return(
        <div className={classes.marketPage}>
            <div className={classes.breadLink}>
    <Link to="/">Главная</Link>
    <span>{" / "}</span>
                <Link to="">Маркет исследований</Link>
            </div>
            <MarketFilter/>
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