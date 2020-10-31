import React from "react";
import classes from "./orderCard.module.css";
import strela from "./img/strela.png";
import strela2 from "./img/strela2.png";
import {Link} from "react-router-dom"

const OrderCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.blockImg}>
      <img alt="img" src={strela2} />
        <img alt="img" src={strela} />
        <img alt="img" src={strela2} />
      </div>
      <div className={classes.blockContent}>
        <span className={classes.title}>Закажите исследование</span>
        <span className={classes.description}>
          Не нашли нужное исследование? Закажите ваше персональное исследование
          у нас
        </span>
        <Link to="/order-research" className={classes.btn}>
        <button className={classes.btn1}>Заказать исследование</button>
        </Link>
        
      </div>
    </div>
  );
};
export default OrderCard;
