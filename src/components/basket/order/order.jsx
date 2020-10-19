import React from "react"
import classes from "./order.module.css"

const Order=()=>{
    return(
        <div className={classes.orderCard}>
            <div className={classes.blockPrice}>
                <span className={classes.titlePrice}>Итоговоя сумма</span>
                <span className={classes.price}>110 000 сом </span>
            </div>
            <button className={classes.btn}>Оформить заказ</button>
        </div>
    )
}
export default Order;