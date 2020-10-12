import React from "react";
import classes from "./detailMarket.module.css";
import img1 from "./img/Rectangle 47.png"
import Tabs1 from "./tabs/tabs";


const DetailMarket = () => {
  return (
    <div className={classes.blockDetail}>
      <div className={classes.leftCard}>
        <div className={classes.blockImg}>
          <img alt="img" src={img1}  className={classes.img}/>
        </div>
        <div className={classes.container}>
          <div className={classes.blockHeshteg}>
            <div>#медицина</div>
            <div>#медицина</div>
            <div>#медицина</div>
            <div>#медицина</div>
          </div>
          <div className={classes.blockText}>
            <span className={classes.title}>Рынок частной медицины 2020. База сетей</span>
          </div>
          <div className={classes.blockdDescrip}>
            <div className={classes.descrip}>
              <span>Дата выпуска: 30 сентября 2020</span>
              <span>Количество страниц: 219</span>
              <span>ID: 66750</span>
            </div>
            <div className={classes.price}>
              <span className={classes.oldPrice}>90 000 сом</span>
              <span className={classes.newPrice}>55 000 сом</span>
            </div>
          </div>
          <div className={classes.blockBtn}>
            <button className={classes.crash}>В корзину</button>
            <button className={classes.demo}>Демо версия</button>
          </div>
        </div>
      </div>
      <di className={classes.rightCard}>
          <Tabs1/>
      </di>
    </div>
  );
};
export default DetailMarket;
