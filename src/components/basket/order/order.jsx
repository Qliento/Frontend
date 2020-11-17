import React from "react"
import classes from "./order.module.css"
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router-dom"

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
        <form className={classes.orderCard}>
            <div className={classes.content}>
                <div className={classes.blockPrice}>
                <span className={classes.titlePrice}>Итоговоя сумма</span>
                <span className={classes.price}>{total} сом </span>
                </div>
                <div className={classes.blockChecket}>
              <input
                className={classes.checkbox}
                type="checkbox"
                name="checkbox"
                required
              />
              <div className={classes.text}>
                <span>Подтверждаю, что ознакомлен и согласен с </span>
                <Link to='/agreement'>Пользовательским соглашением</Link>
              </div>
            </div>
             
            </div>
            <button  className={classes.btn}>Оформить заказ</button>
        </form>
    )
}
export default Order;