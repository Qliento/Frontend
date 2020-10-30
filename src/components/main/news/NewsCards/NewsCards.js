import React from "react";
import classes from "./NewsCards.module.css";
import card1 from "./img/card1.png";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";
import { useSelector } from "react-redux";

const NewsCards = () => {
  const arrNews = useSelector((state) => state.ListNews.arrayNews);
  console.log(arrNews.length);
  let arr = [];
  if (arrNews) {
    if (arrNews.length >= 3) {
      arr = arrNews.slice(arrNews.length - 3);
    } else {
      arr = [...arrNews];
    }
  }
  console.log(arr);
  return (
    <div className={classes.cards}>
      {arr &&
        arr.map((item) => {
          return (
            <div className={classes.card} key={item.id}>
              <div className={classes.blockImg}>
                <img alt="img" className={classes.img} src={item.image} />
              </div>
              <div className={classes.content}>
                <span className={classes.title}>{item.name}</span>
                <div className={classes.blockDescrip}>
                  <span className={classes.description}>
                    {item.description}
                  </span>
                </div>

                <div className={classes.textButtom}>
                  <div className={classes.textLeft}>
                    <span>{item.date}</span>
                    <span>16:00</span>
                  </div>
                  <div className={classes.textRight}>
                    {item.source ? (
                      <span>{item.source}</span>
                    ) : (
                      <span>Нет автора</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default NewsCards;
