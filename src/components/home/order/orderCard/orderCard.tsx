import React from "react";
import classes from "./orderCard.module.css";
import strela from "./img/strela.png";

const OrderCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.blockImg}>
        <img alt="img" src={strela} />
      </div>
      <div className={classes.blockContent}>
        <span className={classes.title}>Закажите исследование</span>
        <span className={classes.description}>
          Не нашли нужное исследование? Закажите ваше персональное исследование
          у нас
        </span>
        <button className={classes.btn}>Заказать исследование</button>
      </div>
    </div>
  );
};
export default OrderCard;
