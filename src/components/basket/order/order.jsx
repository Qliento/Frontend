import React from "react"
import classes from "./order.module.css"
import {useDispatch,useSelector} from "react-redux"

const Order=()=>{
    const data = useSelector((state) => state.ListBasket.listResearch);
    let total=0;
    {
        data&&
        data.map((item)=>{
            return(
                total+=item.total_of_all
            )
        })
    }
    return(
        <div className={classes.orderCard}>
            <div className={classes.blockPrice}>
                <span className={classes.titlePrice}>Итоговоя сумма</span>
                <span className={classes.price}>{total} сом </span>
            </div>
            <button className={classes.btn}>Оформить заказ</button>
        </div>
    )
}
export default Order;