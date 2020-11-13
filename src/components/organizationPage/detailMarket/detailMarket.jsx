import React, { useState } from "react";
import classes from "./detailMarket.module.css";
import Dropdown from "./dropdown";
import img1 from "./img/Rectangle 47.png";
import Tabs1 from "./tabs/tabs";

const DetailMarket = () => {
  const [isClose, setIsClose] = useState(false);
  const clickBtn = () => {
    setIsClose(!isClose);
    console.log(isClose);
  };
  return (
    <>
      <div className={isClose ? classes.blockDetail1 : classes.blockDetail}>
        <div className={classes.leftCard}>
          <div className={classes.blockImg}>
            <img alt="img" src={img1} className={classes.img} />
          </div>
          <div className={classes.container}>
            <div className={classes.blockHeshteg}>
              <div>#медициа</div>
              <div>#медициа</div>
              <div>#медициа</div>
            </div>
            <div className={classes.blockText}>
              <span className={classes.title}>
                Рынок частной медицины 2020. База сетей
              </span>
            </div>
            <div className={classes.blockdDescrip}>
              <div className={classes.descrip}>
                <span>Дата выпуска: 11-08-1999</span>
                <span>Количество страниц: 25</span>
                <span>ID: 003</span>
              </div>
              <div className={classes.price}>
                <span className={classes.oldPrice}>15 000 сом</span>
                <span className={classes.newPrice}>40 000 сом</span>
              </div>
            </div>
            <div className={classes.blockBtn}>
              <button className={classes.demo}>Редактировать</button>
            </div>
          </div>
        </div>
        <div className={classes.rightCard}>
          <Tabs1 clickBtn={clickBtn} />
        </div>
      </div>
      <div className={classes.statistic}>
        <div className={classes.blockTitle}>
          <span className={classes.title}>Статистика</span>
          <div className={classes.input}>
            <Dropdown />
          </div>
        </div>
        <div className={classes.buttomBlock}>
          <div className={classes.column}>
            <span className={classes.column_title}>Просмотры</span>
            <span className={classes.column_data}>4200</span>
          </div>
          <div className={classes.column}>
            <span className={classes.column_title}>Скачивание демо версии</span>
            <span className={classes.column_data}>2100</span>
          </div>
          <div className={classes.column}>
            <span className={classes.column_title}>Куплено</span>
            <span className={classes.column_data}>150</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailMarket;
