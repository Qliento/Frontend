import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { researchPushBasket } from "../../../redux/actions/pushResearch/pushResearch";
import classes from "./detailMarket.module.css";
import img1 from "./img/Rectangle 47.png";
import Tabs1 from "./tabs/tabs";

const DetailMarket = ({ data }) => {
  const dispatch = useDispatch();
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem("lang");
  const [isClose, setIsClose] = useState(false);
  const clickBtn = () => {
    setIsClose(!isClose);
  };
  let leng = data.country && data.country.length;
  const orders = (e) => {
    dispatch(researchPushBasket(e));
  };
  return (
    <div className={isClose ? classes.blockDetail1 : classes.blockDetail}>
      <div className={classes.leftCard}>
        <div className={classes.blockImg}>
          <img
            alt="img"
            src={data.image ? data.image : img1}
            className={classes.img}
          />
        </div>
        <div className={classes.container1}>
          <div className={classes.topBlock}>
            <div className={classes.blockDate}>
              <span className={classes.textAuthor}>
                {data.author && data.author.logo}
              </span>
              <span className={classes.textDate}>{data.date && data.date}</span>
            </div>
            <div className={classes.blockDesc}>
              <div className={classes.blockName1}>
                <span>{data.name && data.name}</span>
              </div>
              <div className={classes.descrip}>
                {(language == 1 || language == undefined) && (
                  <span>{data && data.pages} стр</span>
                )}
                {language == 2 && <span>{data && data.pages} рages</span>}
                {language == 3 && <span>{data && data.pages} бет</span>}
                <span>ID: {data && data.id}</span>
                <div className={classes.country}>
                  {(language == 1 || language == undefined) && (
                    <span>Страны: &#160; </span>
                  )}
                  {language == 2 && <span>Сountries: &#160; </span>}
                  {language == 3 && <span>Мамлекеттер: &#160; </span>}
                  {data.country &&
                    data.country.map((item, index) => {
                      return (
                        <span key={item.id}>
                          {item.name}
                          {index < leng - 1 ? "," : null}
                        </span>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className={classes.buttomBlockH}>
              <div className={classes.blockHeshteg}>
                {data.hashtag &&
                  data.hashtag.map((item) => {
                    return (
                      <div className={classes.hashtag} key={item.id}>
                        #{item.name}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className={classes.blockChange}>
            <div className={classes.blPrice}>
            {data.old_price && data.new_price ? (
                <>
                  <span className={classes.oldPrice}>
                    {data && data.old_price} $
                  </span>
                  <span className={classes.newPrice}>
                    {data && data.new_price} $
                  </span>
                </>
              ) : (
                <>
                  <span></span>
                  <span className={classes.newPrice}>
                    {data && data.old_price} $
                  </span>
                </>
              )}
            </div>
            <div className={classes.blBtn}>
            {(language == 1 || language == undefined) && (
              <button
                className={classes.crash}
                id={data.id}
                onClick={(e) => orders(e.target.id)}
              >
                В корзину
              </button>
            )}
            {language == 2 && (
              <button
                className={classes.crash}
                id={data.id}
                onClick={(e) => orders(e.target.id)}
              >
                Shopping cart
              </button>
            )}
            {language == 3 && (
              <button
                className={classes.crash}
                id={data.id}
                onClick={(e) => orders(e.target.id)}
              >
                Корзинага
              </button>
            )}
            {(language == 1 || language == undefined) && (
              <a
                href={data.demo && data.demo}
                target="_blank"
                className={classes.demo}
                download
              >
                Демо версия
              </a>
            )}
            {language == 2 && (
              <a
                href={data.demo && data.demo}
                target="_blank"
                className={classes.demo}
                download
              >
                Demo version
              </a>
            )}
            {language == 3 && (
              <a
                href={data.demo && data.demo}
                target="_blank"
                className={classes.demo}
                download
              >
                Демо версия
              </a>
            )}
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.blockHeshteg}>
            {data.hashtag &&
              data.hashtag.map((item) => {
                return (
                  <div className={classes.hashtag} key={item.id}>
                    #{item.name}
                  </div>
                );
              })}
          </div>
          <div className={classes.blockText}>
            <span className={classes.title}>{data.name}</span>
          </div>
          <div className={classes.blockdDescrip}>
            <div className={classes.descrip}>
              {(language == 1 || language == undefined) && (
                <span>{data && data.pages} стр</span>
              )}
              {language == 2 && <span>{data && data.pages} рages</span>}
              {language == 3 && <span>{data && data.pages} бет</span>}
              <span>ID: {data && data.id}</span>
              <div className={classes.country}>
                {(language == 1 || language == undefined) && (
                  <span>Страны: &#160; </span>
                )}
                {language == 2 && <span>Сountries: &#160; </span>}
                {language == 3 && <span>Мамлекеттер: &#160; </span>}
                {data.country &&
                  data.country.map((item, index) => {
                    return (
                      <span key={item.id}>
                        {item.name}
                        {index < leng - 1 ? "," : null}
                      </span>
                    );
                  })}
              </div>
            </div>
            <div className={classes.price}>
              {data.old_price && data.new_price ? (
                <>
                  <span className={classes.oldPrice}>
                    {data && data.old_price} $
                  </span>
                  <span className={classes.newPrice}>
                    {data && data.new_price} $
                  </span>
                </>
              ) : (
                <>
                  <span></span>
                  <span className={classes.newPrice}>
                    {data && data.old_price} $
                  </span>
                </>
              )}
            </div>
          </div>
          <div className={classes.blockBtn}>
            {(language == 1 || language == undefined) && (
              <button
                className={classes.crash}
                id={data.id}
                onClick={(e) => orders(e.target.id)}
              >
                В корзину
              </button>
            )}
            {language == 2 && (
              <button
                className={classes.crash}
                id={data.id}
                onClick={(e) => orders(e.target.id)}
              >
                Shopping cart
              </button>
            )}
            {language == 3 && (
              <button
                className={classes.crash}
                id={data.id}
                onClick={(e) => orders(e.target.id)}
              >
                Корзинага
              </button>
            )}
            {(language == 1 || language == undefined) && (
              <a
                href={data.demo && data.demo}
                target="_blank"
                className={classes.demo}
                download
              >
                Демо версия
              </a>
            )}
            {language == 2 && (
              <a
                href={data.demo && data.demo}
                target="_blank"
                className={classes.demo}
                download
              >
                Demo version
              </a>
            )}
            {language == 3 && (
              <a
                href={data.demo && data.demo}
                target="_blank"
                className={classes.demo}
                download
              >
                Демо версия
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={classes.rightCard}>
        <Tabs1 dataText={data && data} clickBtn={clickBtn} />
      </div>
    </div>
  );
};
export default DetailMarket;
