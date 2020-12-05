import React from "react";
import classes from "./orderCard.module.css";
import strela from "./img/strela.png";
import strela2 from "./img/strela2.png";
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux';

const OrderCard = () => {
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem('lang');
  return (
    <div className={classes.card}>
      <div className={classes.blockImg}>
      <img alt="img" src={strela2} />
        <img alt="img" src={strela} />
        <img alt="img" src={strela2} />
      </div>
      <div className={classes.blockContent}>
      {(language == 1 || language == undefined) && <><span className={classes.title}>Закажите исследование</span>
        <span className={classes.description}>
          Не нашли нужное исследование? Закажите ваше персональное исследование
          у нас
        </span></>}
        {language == 2 && <><span className={classes.title}>Order research</span>
        <span className={classes.description}>
        Didn't find the research you were looking for? Order your personal research
        </span></>}
        {language == 3 && <><span className={classes.title}>Изилдөөгө заказ бериңиз</span>
        <span className={classes.description}>
        Издеп жаткан изилдөөнү тапкан жоксузбу? Жеке изилдөөнү бизден заказ бериңиз
        </span></>}
        <Link to="/order-research" className={classes.btn}>
          {(language == 1 || language == undefined) && <button className={classes.btn1}>Заказать исследование</button>}
          {language == 2 && <button className={classes.btn1}>Order research</button>}
          {language == 3 && <button className={classes.btn1}>Изилдөөгө заказ бериңиз</button>}
        </Link>
        
      </div>
    </div>
  );
};
export default OrderCard;
