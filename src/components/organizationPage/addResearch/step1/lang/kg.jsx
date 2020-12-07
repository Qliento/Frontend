import React from "react";
import Dropdown from "../select/select";
import classes from "../step1.module.css";
import { Link } from "react-router-dom";
import Country from "../country/country";
import CreatableInputOnly from "../heshtag/hashtag";

const Step1Kg = ({
  inputValue,
  data,
  changeData,
  changeCountry,
  changeHashtag,
  further,
  arrErrRu,
  hashtag,
  errHashtag,
  dataList,
  subCategory
}) => {
  return (
    <div className={classes.form}>
      <div className={classes.blockTitle}>
        <span className={classes.title}>Исследование</span>

        <div className={classes.blockStep}>
          <span className={classes.step11}>Шаг 1</span>
          <span className={classes.step} onClick={() => further()}>Шаг 2</span>
          <span className={classes.step}>Шаг 3</span>
        </div>
      </div>
      <div className={classes.blockInput}>
        <span className={classes.inputTitle}>Название для исследования</span>
        <input
          className={classes.input1}
          placeholder="Ваш ФИО"
          name="name_kg"
          value={data.name_kg}
          onChange={inputValue}
        />
        {arrErrRu &&
          arrErrRu.map((item) => {
            if (item == "name_kg") {
              return <span className={classes.err}>Заполинте это поле!!!</span>;
            }
          })}
      </div>
      <div className={classes.blockInput}>
        <div className={classes.titleBlock}>
          <span className={classes.inputTitle}>Описание</span>
          <span className={classes.text}>2000</span>
        </div>
        <textarea
          className={classes.inputDescrip}
          placeholder="Описание"
          name="description_kg"
          value={data.description_kg}
          onChange={inputValue}
        />
        {arrErrRu &&
          arrErrRu.map((item) => {
            if (item == "description_kg") {
              return <span className={classes.err}>Заполинте это поле!!!</span>;
            }
          })}
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
          <Dropdown
            name="Выберите категорию"
            lang="kg"
              dataList={dataList}
            dataSubRu={data.category_kg}
            changeData={(e, category) => changeData(e, category)}
          />
          {arrErrRu &&
            arrErrRu.map((item) => {
              if (item == "category_kg") {
                return (
                  <span className={classes.err}>Заполинте это поле!!!</span>
                );
              }
            })}
        </div>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Подкатегорию</span>
          <Dropdown
            name="Выберите подкатегорию"
            lang="kg"
            sub={true}
            subCategory={subCategory}
            dataSubRu={data.subCategory_kg}
            changeData={(e, category) => changeData(e, category)}
          />
          {arrErrRu &&
            arrErrRu.map((item) => {
              if (item == "subCategory_kg") {
                return (
                  <span className={classes.err}>Заполинте это поле!!!</span>
                );
              }
            })}
        </div>
      </div>
      <div className={classes.blockDropdown}>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Страны</span>
          <Country
            name="Выберите страны"
            lang="kg"
            data={data.country_kg}
            changeCountry={(e) => changeCountry(e)}
          />
          {arrErrRu &&
            arrErrRu.map((item) => {
              if (item == "country_kg") {
                return (
                  <span className={classes.err}>Заполинте это поле!!!</span>
                );
              }
            })}
        </div>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Ключевые слова</span>
          <CreatableInputOnly
            lang="kg"
            changeHashtag={(e) => changeHashtag(e)}
            data={hashtag}
          />
          {errHashtag &&
          
                  <span className={classes.err}>Заполинте это поле!!!</span>
      }
        </div>
      </div>
      <div className={classes.blockBtn}>
        <button className={classes.btn} onClick={() => further()}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default Step1Kg;
