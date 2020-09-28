import React from "react"
import classes from  "./banner.module.css"
import banner from "./img/banner.svg"
import Inputs from "./inputs/inputs"

const Banner = ()=>{
    return(
        <div className={classes.wrapper}>
            <img alt="banner" className={classes.banner} src={banner}/>
            <div className={classes.blockSearch}>
<Inputs/>

            </div>
        </div>
    )
}
export default Banner;