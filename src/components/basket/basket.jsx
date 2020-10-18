import React from "react"
import Order from "./order/order";
import classes from "./basket.module.css"
import BasketCard from "./basketCard/basketCard";

const Basket=()=>{
    return(
        <div className={classes.basketPage}>
            <span className={classes.title}>Корзина</span>
            
            <div className={classes.cards}>
                <BasketCard id="1"/>
                <BasketCard id="2"/>
            </div>
            <div className={classes.blockTitle2}>
                <span className={classes.title2}>Ваш заказ</span>
            </div>
            <Order/>
        </div>
    )
}
export default Basket;