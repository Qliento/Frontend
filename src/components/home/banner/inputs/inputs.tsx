import React from "react"
import classes from "./inputs.module.css"


const Inputs =()=>{
    return(
        <div className={classes.blockInputs}>
            <input className={classes.categories} placeholder="Все котегории"/>
            <input className={classes.search} placeholder="Поиск"/>
        </div>
    )
}
export default Inputs;