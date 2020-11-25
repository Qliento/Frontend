import React from "react";
import classes from "./basketCard.module.css";
import doctor from "./img/Rectangle 47.png";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { deleteBasket } from "../../../redux/actions/deleteBasket/deleteBasket";

const BasketCard = ({ id, data }) => {
  const dispatch=useDispatch();
  const language = useSelector(state => state.langReducer.lang)
  const deleteBtn = (e) => {
    dispatch(deleteBasket(e.target.id));
  };
 
  return (
    <div className={classes.marketCard}>
      <Link to={`/market-research-detail/${data.ordered_item.id}`}  className={classes.link}>
        <img
          alt="img"
          src={data.ordered_item.image && data.ordered_item.image}
          className={classes.img}
        />
        <div className={classes.content}>
          <div className={classes.nameCompany}>
            <span className={classes.name}>
              {data.ordered_item.author
                ? data.ordered_item.author.logo
                : "Автора нет"}
            </span>
            <span className={classes.date}>
              {data && data.ordered_item.date}
            </span>
          </div>
          <div className={classes.blockDescrip}>
            <div className={classes.nameResearch}>
              <span>{data && data.ordered_item.name}</span>
            </div>
            <div className={classes.description}>
              <span>
                {data.ordered_item.pages && data.ordered_item.pages} стр
              </span>
              <span>ID: {data.ordered_item.id}</span>
              <div className={classes.country}>
                <span>Страна:&#160;</span>
                {data.ordered_item.country &&
                  data.ordered_item.country.map((item) => {
                    return <span key={item.id}>{item.name}</span>;
                  })}
              </div>
            </div>
          </div>
          <div className={classes.blockHeshteg}>
            {data.ordered_item.hashtag &&
              data.ordered_item.hashtag.map((item) => {
                return <div key={item.id}>#{item.name}</div>;
              })}
          </div>
        </div>
      </Link>
      <div className={classes.blockAct}>
        <div className={classes.blockPrace}>
          <span className={classes.discounts}>
            {data && data.ordered_item.old_price}
          </span>
          <span className={classes.newPrace}>
            {data && data.ordered_item.new_price}
          </span>
        </div>
        {language === 1 && <button className={classes.demo} id={data.id} onClick={(e) => deleteBtn(e)}>Удалить</button>}
        {language === 2 && <button className={classes.demo} id={data.id} onClick={(e) => deleteBtn(e)}>Delete</button>}
        {language === 3 && <button className={classes.demo} id={data.id} onClick={(e) => deleteBtn(e)}>Очуруу</button>}
      </div>
    </div>
  );
};
export default BasketCard;
