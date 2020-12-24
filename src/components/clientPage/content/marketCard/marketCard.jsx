import React from "react";
import classes from "./marketCard.module.css";
import { Link } from "react-router-dom";
import photo from './Rectangle 47.jpg';

const MarketCard = ({ data }) => {
  data = {
    id: "cdcscsd",
  }
  
  const language = localStorage.getItem('lang');

  return (
    <>
      <div className={classes.marketCard}>
        <Link
          to={`/market-research-detail/${data && data.id}`}
          className={classes.link}
        >
         <img alt="img" src={photo} className={classes.img} />
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
                {(language == 1 || language == undefined) && <span>{data.pages} стр</span>}
                {language == 2 && <span>{data.pages} р</span>}
                {language == 3 && <span>{data.pages} бет</span>}
                <span>ID: {data.id}</span>
                <div className={classes.country}>
                  {(language == 1 || language == undefined) && <span>Страны: </span>}
                  {language == 2 && <span>Countries: </span>}
                  {language == 3 && <span>Мамлекеттер: </span>}
                  {data.country &&
                    data.country.map((item) => {
                      return <span key={item.id}>{item.name}</span>;
                    })}
                </div>
              </div>
            </div>
            <div className={classes.blockHeshteg}>
              {data.hashtag &&
                data.hashtag.map((items) => {
                  return <div key={items.id}>#{items.name}</div>;
                })}
            </div>
          </div>
        </Link>
        <div className={classes.blockAct}>
          <div className={classes.blockPrace}>
            <span className={classes.newPrace}>{data.new_price}17 000 сом</span>
          </div>
          <div className={classes.blockBtn}>
            {(language == 1 || language == undefined) && <button className={classes.toBasket} id={data.id} >Скачать</button>}
            {language == 2 && <button className={classes.toBasket} id={data.id} >Download</button>}
            {language == 3 && <button className={classes.toBasket} id={data.id} >Жүктөө</button>}
            <div className={classes.details}>
              {(language == 1 || language == undefined) && <span>Время покупки</span>}
              {language == 2 && <span>Purchase time</span>}
              {language == 3 && <span>Сатып алуу убактысы</span>}
              <span>21.11.2020</span>
              <span>12:50</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketCard;
