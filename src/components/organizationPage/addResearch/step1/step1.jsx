import React from "react";
import Dropdown from "./select/select";
import Tabs from "../tabs/tabs";
import classes from "./step1.module.css";
import {Link} from "react-router-dom"
import Country from "./country/country"

const Step1 = () => {
  return (
    <div className={classes.step1}>
      <Tabs />
      <div className={classes.form}>
        <div className={classes.blockTitle}>
          <span className={classes.title}>Исследование</span>
          <div className={classes.blockStep}>
            <span className={classes.step11}>Шаг 1</span>
            <span className={classes.step}>Шаг 2</span>
            <span className={classes.step}>Шаг 3</span>
          </div>
        </div>
        <div className={classes.blockInput}>
          <span className={classes.inputTitle}>Название для исследования</span>
          <input className={classes.input1} placeholder="Ваш ФИО" />
        </div>
        <div className={classes.blockInput}>
          <div className={classes.titleBlock}>
            <span className={classes.inputTitle}>Описание</span>
            <span className={classes.text}>2000</span>
          </div>
          <textarea className={classes.inputDescrip} placeholder="Описание" />
        </div>
        <div className={classes.blockInput}>
          <span className={classes.inputTitle}>О компании</span>
          <div className={classes.blockDescrip}>
            <span>О компании</span>
          </div>
        </div>
        <div className={classes.blockDropdown}>
          <div className={classes.dropdown}>
            <span className={classes.dropdownTitle}>Категоря</span>
            <Dropdown name="Выберите категорию"/>
          </div>
          <div className={classes.dropdown}>
            <span className={classes.dropdownTitle}>Подкатегорию</span>
            <Dropdown name="Выберите подкатегорию" />
          </div>
        </div>
        <div className={classes.blockDropdown}>
          <div className={classes.dropdown}>
            <span className={classes.dropdownTitle}>Страны</span>
            <Country name="Выберите страны"/>
          </div>
          <div className={classes.dropdown}>
            <span className={classes.dropdownTitle}>Страны</span>
            <textarea
              className={classes.inputHashtag}
              placeholder="Какие слова описывают ваше исследование "
            />
          </div>
        </div>
        <div className={classes.blockBtn}>
            <Link to="/organization-page/submit-research/step2" className={classes.link}> <button className={classes.btn}>Далее</button></Link>
           
        </div>
      </div>
    </div>
  );
};

export default Step1;
