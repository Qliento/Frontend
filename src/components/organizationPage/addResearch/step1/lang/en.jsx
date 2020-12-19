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
        <span className={classes.title}>Research</span>

        <div className={classes.blockStep}>
          <span className={classes.step11}>Step 1</span>
          <span className={classes.step} onClick={() => further()}>
            Step 2
          </span>
          <span className={classes.step}>Step 3</span>
        </div>
      </div>
      <div className={classes.blockInput}>
        <span className={classes.inputTitle}>Name of research</span>
        <input
          className={classes.input1}
          placeholder="Name"
          name="name_en"
          value={data.name_en}
          onChange={inputValue}
        />
        {arrErrRu &&
          arrErrRu.map((item) => {
            if (item == "name_en") {
              return <span className={classes.err}>Fill the field!!!</span>;
            }
          })}
      </div>
      <div className={classes.blockInput}>
        <div className={classes.titleBlock}>
          <span className={classes.inputTitle}>Description</span>
          <span className={classes.text}>2000</span>
        </div>
        <textarea
          className={classes.inputDescrip}
          placeholder="Description"
          name="description_en"
          value={data.description_en}
          onChange={inputValue}
        />
        {arrErrRu &&
          arrErrRu.map((item) => {
            if (item == "description_en") {
              return <span className={classes.err}>Fill this field!!!</span>;
            }
          })}
      </div>
      <div className={classes.blockInput}>
        <span className={classes.inputTitle}>About company</span>
        <div className={classes.blockDescrip}>
          <span>About Company</span>
        </div>
      </div>
      <div className={classes.blockDropdown}>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Category</span>
          <Dropdown
            name="Choose category"
            lang="en"
            dataList={dataList}
            changeData={(e, category_en) => changeData(e, category_en)}
          />
          {arrErrRu &&
            arrErrRu.map((item) => {
              if (item == "category_en") {
                return (
                  <span className={classes.err}>Fill this field!!!</span>
                );
              }
            })}
        </div>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Subcategory</span>
          <Dropdown
            name="Choose subcategory"
            lang="en"
            subCategory={subCategory}
            changeData={(e, subCategory_en) => changeData(e, subCategory_en)}
          />
          {arrErrRu &&
            arrErrRu.map((item) => {
              if (item == "subCategory_en") {
                return (
                  <span className={classes.err}>Fill this field!!!</span>
                );
              }
            })}
        </div>
      </div>
      <div className={classes.blockDropdown}>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Country</span>
          <Country
            name="Choose country"
            lang="en"
            changeCountry={(e) => changeCountry(e)}
          />
          {arrErrRu &&
            arrErrRu.map((item) => {
              if (item == "country_en") {
                return (
                  <span className={classes.err}>Fill this field!!!</span>
                );
              }
            })}
        </div>
        <div className={classes.dropdown}>
          <span className={classes.dropdownTitle}>Keywords</span>
          <CreatableInputOnly
            lang="en"
            data={hashtag}
            changeHashtag={(e) => changeHashtag(e)}
          />
          {errHashtag &&

                  <span className={classes.err}>Fill this field!!!</span>
    }
        </div>
      </div>
      <div className={classes.blockBtn}>
        <button className={classes.btn} onClick={() => further()}>
          Next
        </button>
      </div>
    </div>
  );
};
export default Step1En;
