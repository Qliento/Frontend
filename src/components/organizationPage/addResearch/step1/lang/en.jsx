import React from "react";
import Dropdown from "../select/select";
import classes from "../step1.module.css";
import { Link } from "react-router-dom";
import Country from "../country/country";
import CreatableInputOnly from "../heshtag/hashtag";

const Step1En = ({
  inputValue,
  data,
  changeData,
  changeCountry,
  changeHashtag,
  further,
  hashtag,
  arrErrRu,
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
          <span className={classes.step} onClick={() => further()}>
            Шаг 2
          </span>
          <span className={classes.step}>Шаг 3</span>
        </div>
      </div>
      <div className={classes.blockInput}>
        <span className={classes.inputTitle}>Название для исследования</span>
        <input
          className={classes.input1}
          placeholder="Ваш ФИО"
          name="name_en"
          value={data.name_en}
          onChange={inputValue}
        />
        {arrErrRu &&
          arrErrRu.map((item) => {
            if (item == "name_en") {
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
          name="description_en"
          value={data.description_en}
          onChange={inputValue}
        />
        {arrErrRu &&
          arrErrRu.map((item) => {
            if (item == "description_en") {
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
            lang="en"
            dataList={dataList}
            changeData={(e, category_en) => changeData(e, category_en)}
          />
          {arrErrRu &&
            arrErrRu.map((item) => {
              if (item == "category_en") {
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
            lang="en"
            subCategory={subCategory}
            changeData={(e, subCategory_en) => changeData(e, subCategory_en)}
          />
          {arrErrRu &&
            arrErrRu.map((item) => {
              if (item == "subCategory_en") {
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
            lang="en"
            changeCountry={(e) => changeCountry(e)}
          />
          {arrErrRu &&
            arrErrRu.map((item) => {
              if (item == "country_en") {
                return (
                  <span className={classes.err}>Заполинте это поле!!!</span>
                );
              }
            })}
        </div>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Ключевые слова</span>
          <CreatableInputOnly
            lang="en"
            data={hashtag}
            changeHashtag={(e) => changeHashtag(e)}
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
export default Step1En;
