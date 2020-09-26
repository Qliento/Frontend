import React ,{FC}from "react"
import classes from "./tabsItem.module.css"

type PropsType ={
    title:string
    productCount:string
}

const TabsItem:FC<PropsType>=({title,productCount})=>{
    return(
        <div className={classes.card}>
            <div className={classes.BlockTitle}>
    <span>{title}</span>
            </div>
            <div className={classes.BlockCount}>
    <span>{productCount}</span>
            </div>

        </div>
    )
}
export default TabsItem;