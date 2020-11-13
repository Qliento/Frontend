import React from "react";

import Tabs from "../tabs/tabs";
import classes from "./step2.module.css";
import pdf from "./img/Frame .png";
import xlm from "./img/Frame 91.png";
import krestik from "./img/download 1.png";

const Step2 = () => {
  return (
    <div className={classes.step1}>
      <Tabs />
      <div className={classes.form}>
        <div className={classes.blockTitle}>
          <span className={classes.title}>Исследование</span>
          <div className={classes.blockStep}>
            <span className={classes.step11}>Шаг 1</span>
            <span className={classes.step11}>Шаг 2</span>
            <span className={classes.step}>Шаг 3</span>
          </div>
        </div>
        <div className={classes.topBlock}>
          <span>Файл исследования</span>
        </div>
        <div className={classes.blockFiles}>
          <div className={classes.files}>
            <img alt="img" src={pdf} />
            <span className={classes.fileName}>Названия данного документа</span>
            <img alt="img" className={classes.krest} src={krestik} />
          </div>
          <div className={classes.files}>
            <img alt="img" src={xlm} />
            <span className={classes.fileName}>Названия данного документа</span>
            <img alt="img" className={classes.krest} src={krestik} />
          </div>
          <div className={classes.blockBtn}>
            <button className={classes.addFiles}>Добавить документ</button>
          </div>
        </div>
        <div className={classes.topBlock}>
          <span>Файл демо версии исследования</span>
        </div>
        <div className={classes.files}>
          <img alt="img" src={pdf} />
          <span className={classes.fileName}>Добавить файл</span>
        </div>
        <div className={classes.topBlock}>
          <span>Количество страниц</span>
        </div>
        <input type="text" className={classes.inputNumberPage} placeholder="количество страниц"/>
        <div className={classes.topBlock}>
          <span>Оглавление</span>
        </div>
        <div className={classes.titleContent}>
            <div className={classes.leftBlock}>
                <span className={classes.contentTitle}>№</span>
            </div>
            <div className={classes.centerBlock}><span className={classes.contentTitle}>Название главы</span></div>
            <div className={classes.rightBlock}><span className={classes.contentTitle}>Страница</span></div>

        </div>
      </div>
    </div>
  );
};

export default Step2;
