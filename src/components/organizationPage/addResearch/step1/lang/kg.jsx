import React from "react";
import Dropdown from "../select/select";
import classes from "../step1.module.css";
import { Link } from "react-router-dom";
import Country from "../country/country";
import CreatableInputOnly from "../heshtag/hashtag";
import { useSelector } from "react-redux";

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
  subCategory,
  mainCategory,
  errCategory,
  errSubCategory,
  mainCountry,
  errCountry
}) => {
  const data1 = useSelector((state) => state.clientData.data.data);
  return (
    <div className={classes.form}>
      <div className={classes.blockTitle}>
        <span className={classes.title}>Изилдөө</span>

        <div className={classes.blockStep}>
          <span className={classes.step11}>1 кадам</span>
          <span className={classes.step} onClick={() => further()}>2 кадам</span>
          <span className={classes.step}>3 кадам</span>
        </div>
      </div>
      <div className={classes.blockInput}>
        <span className={classes.inputTitle}>Изилдөө аталышы</span>
        <input
          className={classes.input1}
          placeholder="Аталыш"
          name="name_kg"
          value={data.name_kg}
          onChange={inputValue}
        />
        {arrErrRu &&
          arrErrRu.map((item) => {
            if (item == "name_kg") {
              return <span className={classes.err}>Талааны толтуруңуз!!!</span>;
            }
          })}
      </div>
      <div className={classes.blockInput}>
        <div className={classes.titleBlock}>
          <span className={classes.inputTitle}>Сүрөттөө</span>
          <span className={classes.text}>2000</span>
        </div>
        <textarea
          className={classes.inputDescrip}
          placeholder="Сүрөттөө"
          name="description_kg"
          value={data.description_kg}
          onChange={inputValue}
        />
        {arrErrRu &&
          arrErrRu.map((item) => {
            if (item == "description_kg") {
              return <span className={classes.err}>Талааны толтуруңуз!!!</span>;
            }
          })}
      </div>
      <div className={classes.blockInput}>
        <span className={classes.inputTitle}>Компания жөнүндө</span>
        <div className={classes.blockDescrip}>
          <span>{data1 && data1.about_me}</span>
        </div>
      </div>
      <div className={classes.blockDropdown}>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Категория</span>
          <Dropdown
            name="Категория"
            lang="kg"
              dataList={dataList}
              dataSubRu={mainCategory.category}
            changeData={(e, category) => changeData(e, category)}
            mainCategory={mainCategory}
          />
          {errCategory &&
                  <span className={classes.err}>Талааны толтуруңуз!!!</span>
     }
        </div>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Подкатегориялар</span>
          <Dropdown
            name="Подкатегориялар"
            lang="kg"
            sub={true}
            subCategory={subCategory}
            dataSubRu={mainCategory.subCategory1}
            changeData={(e, subCategory1) => changeData(e, subCategory1)}
            mainCategory={mainCategory}
          />
          {errSubCategory &&
                  <span className={classes.err}>Талааны толтуруңуз!!!</span>
            }
        </div>
      </div>
      <div className={classes.blockDropdown}>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Мамлекеттер</span>
          <Country
            name="Мамлекеттер"
            lang="kg"
            data={mainCountry}
            changeCountry={(e) => changeCountry(e)}
          />
          {errCountry &&
     
                  <span className={classes.err}>Талааны толтуруңуз!!!</span>
     }
        </div>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Сиздин изилдөөңүздү сүрөттөгөн сөздөр</span>
          <CreatableInputOnly
            lang="kg"
            changeHashtag={(e) => changeHashtag(e)}
            data={hashtag}
          />
          {errHashtag &&
          
                  <span className={classes.err}>Талааны толтуруңуз!!!</span>
      }
        </div>
      </div>
      <div className={classes.blockBtn}>
        <button className={classes.btn} onClick={() => further()}>
          Кийин
        </button>
      </div>
    </div>
  );
};

export default Step1Kg;
