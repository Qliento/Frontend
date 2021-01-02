import React, { useState } from "react";
import Dropdown from "../select/select";
import classes from "../step1.module.css";
import { Link } from "react-router-dom";
import Country from "../country/country";
import CreatableInputOnly from "../heshtag/hashtag";
import {useSelector} from "react-redux"

const Step1Ru = ({
  inputValue,
  data,
  changeData,
  changeCountry,
  changeHashtag,
  arrErrRu,
  further,
  hashtag,
  errHashtag,
  dataList,
  subCategory
}) => {
  console.log(arrErrRu);
  const data1 = useSelector((state) => state.clientData.data.data);
  console.log(data1)
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
          placeholder="Название для исследования"
          name="name"
          value={data.name}
          onChange={inputValue}
        />
        {arrErrRu &&
          arrErrRu.map((item) => {
            if (item == "name") {
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
          name="description"
          value={data.description}
          onChange={inputValue}
        />
        {arrErrRu &&
          arrErrRu.map((item) => {
            if (item == "description") {
              return <span className={classes.err}>Заполинте это поле!!!</span>;
            }
          })}
      </div>
      <div className={classes.blockInput}>
        <span className={classes.inputTitle}>О компании</span>
        <div className={classes.blockDescrip}>
        <span>{data1 && data1.about_me}</span>
        </div>
      </div>
      <div className={classes.blockDropdown}>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Категория</span>
          <Dropdown
            name="Выберите категорию"
            lang="ru"
            dataList={dataList}
            dataSubRu={data.category}
            changeData={(e, category) => changeData(e, category)}
          />
          {arrErrRu &&
            arrErrRu.map((item) => {
              if (item == "category") {
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
            lang="ru"
            subCategory={subCategory}
            changeData={(e, category) => changeData(e, category)}
            dataSubRu={data.subCategory}
          />
          {arrErrRu &&
            arrErrRu.map((item) => {
              if (item == "subCategory") {
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
            lang="ru"
            data={data.country}
            changeCountry={(e) => changeCountry(e)}
          />
          {arrErrRu &&
            arrErrRu.map((item) => {
              if (item == "country") {
                return (
                  <span className={classes.err}>Заполинте это поле!!!</span>
                );
              }
            })}
        </div>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Ключевые слова</span>
          <CreatableInputOnly
            lang="ru"
            changeHashtag={(e) => changeHashtag(e)}
            data={hashtag}
          />
          { errHashtag&&
    
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
export default Step1Ru;
