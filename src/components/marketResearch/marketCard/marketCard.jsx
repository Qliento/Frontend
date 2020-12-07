import React from "react";
import classes from "./marketCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { researchPushBasket } from "../../../redux/actions/pushResearch/pushResearch";

const MarketCard = ({ data, addFlyEfyf }) => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.langReducer.lang)
  const orders = (e) => {
    dispatch(researchPushBasket(e));
    addFlyEfyf()
  };

  return (
    <>
      <div className={classes.marketCard}>
        <Link
          to={`/market-research-detail/${data && data.id}`}
          className={classes.link}
        >
          <img alt="img" src={data.image} className={classes.img} />
          <div className={classes.content}>
            <div className={classes.nameCompany}>
              <span className={classes.name}>
                {data.author ? data.author.logo : "Автора нет"}
              </span>
              <span className={classes.date}>{data.date}</span>
            </div>
            <div className={classes.blockDescrip}>
              <div className={classes.nameResearch}>
                <span>{data.name}</span>
              </div>
              <div className={classes.description}>
                <span>{data.pages} стр</span>
                <span>ID: {data.id}</span>
                <div className={classes.country}>
                  {language === 1 && <span>Страны: </span>}
                  {language === 2 && <span>Countries: </span>}
                  {language === 3 && <span>Мамлекеттер: </span>}
                  {data.country &&
                    data.country.map((item) => {
                      return <span key={item.id}> {item.name}</span>;
                    })}
                </div>
              </div>
            </div>
            <div className={classes.blockHeshteg}>
              {data.hashtag &&
                data.hashtag.map((items,index) => {
                  return <div className={index>0?classes.hashtags:classes.hashtags2} key={items.id}>#{items.name}</div>;
                })}
            </div>
          </div>
        </Link>
        <div className={classes.blockAct}>
          <div className={classes.blockPrace}>
            {data.old_price && data.new_price ? (
              <>
                <span className={classes.discounts}>{data.old_price} $</span>
                <span className={classes.newPrace}>{data.new_price} $</span>
              </>
            ) : (
              <>
              <span></span>
              <span className={classes.newPrace}>{data.old_price} $</span>
              </>
            )}
          </div>
          <div className={classes.blockBtn}>
            {language === 1 && <button className={classes.toBasket} id={data.id} onClick={(e)=>orders(e.target.id)}>В корзину</button>}
            {language === 2 && <button className={classes.toBasket} id={data.id} onClick={(e)=>orders(e.target.id)}>Shopping cart</button>}
            {language === 3 && <button className={classes.toBasket} id={data.id} onClick={(e)=>orders(e.target.id)}>Корзинага</button>}
            {language === 1 && <a href={data.demo && data.demo} target="_blank" className={classes.demo} download>Демо версия</a>}
            {language === 2 && <a href={data.demo && data.demo} target="_blank" className={classes.demo} download>Demo version</a>}
            {language === 3 && <a href={data.demo && data.demo} target="_blank" className={classes.demo} download>Демо версия</a>}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketCard;
