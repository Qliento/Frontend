import React from "react";
import classes from "./basketCard.module.css";
import doctor from "./img/Rectangle 47.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBasket } from "../../../redux/actions/deleteBasket/deleteBasket";

const BasketCard = ({ id, data }) => {
  const dispatch = useDispatch();
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem("lang");
  const deleteBtn = (e) => {
    dispatch(deleteBasket(e.target.id));
  };
  let textCountry1=data.country &&
data.country.map((item,index) => {
   return item.name
 
})
let textCountry= textCountry1.join(" ")


  return (
    <>
        <div className={classes.marketCard}>
      <Link to={`/market-research-detail/${data.id}`} className={classes.link}>
        <img alt="img" src={data.image?data.image:doctor} className={classes.img} />
        <div className={classes.content}>
          <div className={classes.nameCompany}>
            <span className={classes.name}>
              {data.author ? data.author.logo : "Автора нет"}
            </span>
            <span className={classes.date}>{data && data.date}</span>
          </div>
          <div className={classes.blockDescrip}>
            <div className={classes.nameResearch}>
              <span>{data && data.name}</span>
            </div>
            <div className={classes.description}>
              <span>{data.pages && data.pages} стр</span>
              <span>ID: {data.id}</span>
              <div className={classes.country}>
              {(language == 1 || language == undefined) && (
                    <span>Страны: </span>
                  )}
                  {language == 2 && <span>Countries: </span>}
                  {language == 3 && <span>Мамлекеттер: </span>}
                <span >  {textCountry}</span>
              </div>
            </div>
          </div>
          <div className={classes.blockHeshteg}>
            {data.hashtag &&
              data.hashtag.map((item) => {
                return <div key={item.id}>#{item.name}</div>;
              })}
          </div>
        </div>
      </Link>
      <div className={classes.blockAct}>
        <div className={classes.blockPrace}>
          {data && data.new_price ? (
            <>
              <span className={classes.discounts}>
                {data && data.old_price}$
              </span>
              <span className={classes.newPrace}>
                {data && data.new_price}$
              </span>
            </>
          ) : (
            <>
            <span className={classes.discounts}></span>
            <span className={classes.newPrace}>{data && data.old_price}$</span>
            </>
          )}
        </div>
        {(language == 1 || language == undefined) && (
          <button
            className={classes.demo}
            id={data.id}
            onClick={(e) => deleteBtn(e)}
          >
            Удалить
          </button>
        )}
        {language == 2 && (
          <button
            className={classes.demo}
            id={data.id}
            onClick={(e) => deleteBtn(e)}
          >
            Delete
          </button>
        )}
        {language == 3 && (
          <button
            className={classes.demo}
            id={data.id}
            onClick={(e) => deleteBtn(e)}
          >
            Очуруу
          </button>
        )}
      </div>
    </div>
    
    
    <div className={classes.marketCardNone}>
        <div className={classes.topBlock}>
        <Link
          to={`/market-research-detail/${data && data.id}`}
          className={classes.linkImg}
        >
          <img alt="img" src={data.image?  data.image:doctor} className={classes.img} />
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
       
          {(language == 1 || language == undefined) && (
          <button
            className={classes.demo}
            id={data.id}
            onClick={(e) => deleteBtn(e)}
          >
            Удалить
          </button>
        )}
        {language == 2 && (
          <button
            className={classes.demo}
            id={data.id}
            onClick={(e) => deleteBtn(e)}
          >
            Delete
          </button>
        )}
        {language == 3 && (
          <button
            className={classes.demo}
            id={data.id}
            onClick={(e) => deleteBtn(e)}
          >
            Очуруу
          </button>
        )}
        </div>
        </div>
        <Link
          to={`/market-research-detail/${data && data.id}`}
          className={classes.linkContent}
        >
          <div className={classes.content1}>
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
                  {(language == 1 || language == undefined) && (
                    <span>Страны: </span>
                  )}
                  {language == 2 && <span>Countries: </span>}
                  {language == 3 && <span>Мамлекеттер: </span>}
               
                       <span >  {textCountry}</span>
             
                </div>
              </div>
            </div>
            <div className={classes.blockHeshteg}>
              {data.hashtag &&
                data.hashtag.map((items, index) => {
                  return (
                    <div
                      key={items.id}
                    >
                      #{items.name}
                    </div>
                  );
                })}
            </div>
          </div>
        </Link>
      </div>
    </>

  );
};
export default BasketCard;
