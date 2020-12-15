import React, { useEffect } from "react";
import Order from "./order/order";
import classes from "./basket.module.css";
import BasketCard from "./basketCard/basketCard";
import { useSelector, useDispatch } from "react-redux";
import { getBasketActions } from "../../redux/actions/getBasket/getBasket";

const Basket = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ListBasket.listResearch);
  // const language = useSelector(state => state.langReducer.lang);

  const language = localStorage.getItem('lang');
  useEffect(() => {
    dispatch(getBasketActions());
  }, []);
 console.log(data)
  return (
    <div className={classes.basketPage}>
      {(language == 1 || language == undefined) && <span className={classes.title}>Корзина</span>}
      {language == 2 && <span className={classes.title}>Basket</span>}
      {language == 3 && <span className={classes.title}>Корзина</span>}
      <div className={classes.cards}>
        { data.length!==0 && data[0].ordered_items.length!==0 ?
          data[0].ordered_items.map((item) => {
            return <BasketCard id={item.id} data={item} key={item.id}/>;
          })
        :
        <div className={classes.noResearch}>
          {(language == 1 || language == undefined) && <span className={classes.text}>Исследований нет</span>}
          {language == 2 && <span className={classes.text}>No research</span>}
          {language == 3 && <span className={classes.text}>Изилдөөлөр жок</span>}
        </div>
        }

        
      </div>
      <div className={classes.blockTitle2}>
        {(language == 1 || language == undefined) && <span className={classes.title2}>Ваш заказ</span>}
        {language == 2 && <span className={classes.title2}>Your order</span>}
        {language == 3 && <span className={classes.title2}>Сиздин заказ</span>}
      </div>
      <Order />
    </div>
  );
};
export default Basket;
