import React from "react";
import classes from "./marketCard.module.css";
import { Link } from "react-router-dom";
import photo from './Rectangle 47.jpg';
// import {useDispatch} from "react-redux";
// import { researchPushBasket } from "../../../redux/actions/pushResearch/pushResearch";

const MarketCard = ({ data }) => {
  data = {
    id: "cdcscsd",
  }
  // console.log("String", data);
  // const dispatch=useDispatch();
  // const orders=(e)=>{
  //   dispatch(researchPushBasket(e))
  // }

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
                <span>{data.pages} стр</span>
                <span>ID: {data.id}</span>
                <div className={classes.country}>
                  <span>Страны: </span>
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
            <button
              className={classes.toBasket}
              id={data.id}
              // onClick={(e)=>orders(e.target.id)}
              type="button"
            >
              Скачать
            </button>
            <div className={classes.details}>
              <span>Время покупки</span>
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
