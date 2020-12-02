import React from "react"
import classes from "./order.module.css"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

const Order=()=>{
    const data = useSelector((state) => state.ListBasket.listResearch);
    const language = useSelector(state => state.langReducer.lang)
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
                {language === 1 && <span className={classes.titlePrice}>Итоговоя сумма</span>}
                {language === 2 && <span className={classes.titlePrice}>Total cost</span>}
                {language === 3 && <span className={classes.titlePrice}>Итоговоя сумма</span>}
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
                {language === 1 && <>
                    <span>Подтверждаю, что ознакомлен и согласен с </span>
                    <Link to='/agreement'>Пользовательским соглашением</Link>
                </>}
                {language === 2 && <>
                    <span>I confirm that I have read and agree with the </span>
                    <Link to='/agreement'>User Agreement</Link>
                </>}
                {language === 3 && <>
                    <Link to='/agreement'>Колдонуучунун келишимин</Link>
                    <span> окуп чыкканымды жана аны менен макул экенимди ырастайм</span>
                </>}
              </div>
            </div>
             
            </div>
            {language === 1 && <button  className={classes.btn}>Оформить заказ</button>}
            {language === 2 && <button  className={classes.btn}>Checkout order</button>}
            {language === 3 && <button  className={classes.btn}>Каттоо</button>}
        </form>
    )
}
export default Order;