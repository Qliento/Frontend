import React from "react";
import classes from "./marketCard.module.css";
import doctor from "./img/Rectangle 47.png";
import { Link } from "react-router-dom";

const MarketCard = ({ id, data }) => {
  return (
    <Link to={`/market-research/detail/${id}`}>
      <div className={classes.marketCard}>
        <img alt="img" src={data.image} className={classes.img} />
        <div className={classes.content}>
          <div className={classes.nameCompany}>
            <span className={classes.name}>
              {data.author ? data.author : "Автора нет"}
            </span>
            <span className={classes.date}>{data.date}</span>
          </div>
          <div className={classes.blockDescrip}>
            <div className={classes.nameResearch}>
              <span>{data.name}</span>
            </div>
            <div className={classes.description}>
              <span>{data.pages} стр</span>
              <span>ID: {id}</span>
              <>
                <span>Страны: </span>
                {data.country &&
                  data.country.map((item) => {
                    return <span key={item.id}>{item.name}</span>;
                  })}
              </>
            </div>
          </div>
          <div className={classes.blockHeshteg}>
            {data.hashtag &&
              data.hashtag.map((items) => {
                return <div key={items.id}>#{items.name}</div>;
              })}
          </div>
        </div>
        <div className={classes.blockAct}>
          <div className={classes.blockPrace}>
            <span className={classes.discounts}>{data.old_price} сом</span>
            <span className={classes.newPrace}>{data.new_price} сом</span>
          </div>
          <div className={classes.blockBtn}>
            <button className={classes.toBasket}>В корзину</button>
            <button className={classes.demo}>Демо версия</button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default MarketCard;
