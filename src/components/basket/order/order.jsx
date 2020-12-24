import React from "react";
import classes from "./order.module.css";
import {useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { payResearch } from "../../../redux/actions/getBasket/getBasket";

const Order = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ListBasket.listResearch);
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem("lang");
  let total = 0;
  {
    data &&
      data.map((item) => {
        return (total += item.total_of_all);
      });
  }
 
  const handleChange=(e)=>{
    e.preventDefault();
    
    let arr=data&&data[0].ordered_items.map((item)=>{
      return  item.id
      
    })
    if(data&&data[0].ordered_items.length!==0){
      dispatch(payResearch(arr))
    }
  }

  return (
    <form className={classes.orderCard} onSubmit={handleChange}>
      <div className={classes.content}>
        <div className={classes.blockPrice}>
          {(language == 1 || language == undefined) && (
            <span className={classes.titlePrice}>Итоговоя сумма</span>
          )}
          {language == 2 && (
            <span className={classes.titlePrice}>Total cost</span>
          )}
          {language === 3 && (
            <span className={classes.titlePrice}>Итоговоя сумма</span>
          )}
          <span className={classes.price1}>
            {data.length !== 0 && data[0].total_sum} ${" "}
          </span>
        </div>
        <div className={classes.blockChecket}>
          <input
            className={classes.checkbox}
            type="checkbox"
            name="checkbox"
            required
          />
          <div className={classes.text}>
            {(language == 1 || language == undefined) && (
              <>
                <span>Подтверждаю, что ознакомлен и согласен с </span>
                <Link to="/agreement">Пользовательским соглашением</Link>
              </>
            )}
            {language == 2 && (
              <>
                <span>I confirm that I have read and agree with the </span>
                <Link to="/agreement">User Agreement</Link>
              </>
            )}
            {language == 3 && (
              <>
                <Link to="/agreement">Колдонуучунун келишимин</Link>
                <span>
                  {" "}
                  окуп чыкканымды жана аны менен макул экенимди ырастайм
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      {(language == 1 || language == undefined) && (
        <button type="submit" className={classes.btn}>Оформить заказ</button>
      )}
      {language == 2 && <button type="submit" className={classes.btn}>Checkout order</button>}
      {language == 3 && <button type="submit" className={classes.btn}>Каттоо</button>}
    </form>
  );
};
export default Order;
