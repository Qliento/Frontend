import React from "react"
import classes from "./order.module.css"

const Order=()=>{
    return(
        <div className={classes.orderCard}>
            <div className={classes.content}>
                <div className={classes.blockText}>
                    <span className={classes.title}>Сумма</span>
                    <span className={classes.price}>110 000 сом</span>
                </div>
                <div className={classes.blockText}>
                    <span className={classes.title}>Итого</span>
                    <span className={classes.price2}>110 000 сом</span>
                </div>
                <div className={classes.blockText }>
                    <span className={classes.discounts }>Скидка</span>
                    <span className={classes.priceDescounts}>0 сом </span>
                </div>
            </div>
            <button className={classes.btn}>Оформить заказ</button>
        </div>
    )
}
export default Order;