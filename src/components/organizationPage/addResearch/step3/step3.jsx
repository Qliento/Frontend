import React from "react";
import classes from "./step3.module.css";
import img from "./img/Rectangle 47.png"

const Step3 = () => {
  return (
    <div className={classes.step3}>
      <div className={classes.form}>
        <div className={classes.blockTitle}>
          <span className={classes.title}>Исследование</span>
          <div className={classes.blockStep}>
            <span className={classes.step11}>Шаг 1</span>
            <span className={classes.step11}>Шаг 2</span>
            <span className={classes.step11}>Шаг 3</span>
          </div>
        </div>
        <div className={classes.content}>
            <img alt="img" className={classes.img} src={img}/>
            <div className={classes.rightBlock}>
                <div>
                <div className={classes.blockDescrip}>
                    <span className={classes.descripTitle}>Название</span>
                    <span className={classes.descrip}>Название документа</span>
                </div>
                <div className={classes.blockDescrip2}>
                    <span className={classes.descripTitle}>Примечание</span>
                    <span className={classes.descrip}>форматы .JPEG .JPG</span>
                </div>
                </div>
                <button className={classes.btn}>Загрузить</button>
            </div>

        </div>
        <span className={classes.titlePrice}>Цена</span>
        <div className={classes.bottomBlock}>
            <input className={classes.inputPrice} type="text" placeholder="Цена"/>
            <button className={classes.btn2}>Оформить</button>
        </div>
      </div>
    </div>
  );
};
export default Step3;
