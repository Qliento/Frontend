import React, { useEffect } from "react";
import Order from "./order/order";
import classes from "./basket.module.css";
import BasketCard from "./basketCard/basketCard";
import { useSelector, useDispatch } from "react-redux";
import { getBasketActions } from "../../redux/actions/getBasket/getBasket";

const Basket = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ListBasket.listResearch);
  useEffect(() => {
    dispatch(getBasketActions());
  }, []);
 
  return (
    <div className={classes.basketPage}>
      <span className={classes.title}>Корзина</span>

      <div className={classes.cards}>
        { data.length!==0 ?
          data.map((item) => {
            return <BasketCard id={item.ordered_item.id} data={item} key={item.id}/>;
          })
        :
        <div className={classes.noResearch}>
          <span className={classes.text}>Исследований нет</span>
        </div>
        }

        
      </div>
      <div className={classes.blockTitle2}>
        <span className={classes.title2}>Ваш заказ</span>
      </div>
      <Order />
    </div>
  );
};
export default Basket;
