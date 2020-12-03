import React, { useEffect } from "react";
import classes from "./marketCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { researchPushBasket } from "../../../redux/actions/pushResearch/pushResearch";

const MarketCard = ({ data, addFlyEfyf }) => {
  console.log("String", data);
  const dispatch = useDispatch();
  const orders = (e) => {
    dispatch(researchPushBasket(e));
    addFlyEfyf()
  };

  //   useEffect(() => {
  //     const cursor = document.querySelector('.add_fly');
  //     const editCursor = e => {
  //       const { clientX: x, clientY: y } = e;
  //       cursor.style.left = x + 'px';
  //       cursor.style.top = y + 'px';
  //   };
  //   window.addEventListener('mousemove', editCursor);

  // });

  // const addFlyEfyf = () => {
  //   const cursor = document.querySelector('.add_fly');
  //   console.log('test')
  //   cursor.classList.add('add_fly_anim');
  //   setTimeout(function () { cursor.classList.remove('add_fly_anim') }, 1000);
  // }

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
                  <span>Страны: </span>
                  {data.country &&
                    data.country.map((item) => {
                      return <span key={item.id}> {item.name}</span>;
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
            <button
              className={classes.toBasket}
              id={data.id}
        
              onClick={(e)=>orders(e.target.id)}
              type="button"
            >
              В корзину
            </button>
            <a
              href={data.demo && data.demo}
              target="_blank"
              className={classes.demo}
              download
            >
              Демо версия
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketCard;
