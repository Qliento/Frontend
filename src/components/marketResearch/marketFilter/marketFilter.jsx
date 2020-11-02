import React, { useEffect, useState } from "react";
import Category from "./category/category";
import classes from "./marketFilter.module.css";
import sort from "./img/sort.png";
import { useDispatch, useSelector } from "react-redux";
import { listDataFilter } from "../../../redux/actions/filterMarket/filterMarket";

const MarketFilter = ({ category ,sort1}) => {
  const dispatch = useDispatch();
  console.log(category)
  const data = useSelector((state) => state.FilterMarket.listData);
  const [categor, setCategor] = useState(category && category.name);
  const [inputCategory, setInputCategory] = useState(category ? category : "");
  const [inputSubCategory, setInputSubCategory] = useState("");
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputCountry, setInputCountry] = useState("");
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    dispatch(listDataFilter());
  }, []);
  let subCategory = [];
  if (data.Category) {
    subCategory = data.Category.filter((item) => {
      return item.name == categor;
    });
  }

  const ubdateData = (name, e) => {
    if (name === "Все котегории") {
      setInputCategory(e.value);
    } else if (name === "Подкотегории") {
      setInputSubCategory(e.value);
    } else if (name === "Выберите автора") {
      setInputAuthor(e.value);
    } else if (name === "Выбрать страну") {
      setInputCountry(e.value);
    }
  };
  const search=()=>{
console.log(inputCategory);
console.log(inputSubCategory);
console.log(inputAuthor);
console.log(inputCountry);
console.log(inputText);
  }
   console.log(inputText)
  return (
    <div className={classes.blockFilter}>
      <div className={classes.blockRow}>
        <div className={classes.inputs}>
          <Category
            name="Все котегории"
            category={category}
            listCategory={data && data.Category}
            changeCategory={(e) => setCategor(e.value)}
            ubdateData={ubdateData}
          />
        </div>
        <div className={classes.inputs}>
          <Category
            name="Подкотегории"
            subCategory={subCategory && subCategory[0]}
            ubdateData={ubdateData}
          />
        </div>

        <input
          className={classes.inputSearch}
          type="text"
          placeholder="Поиск по ключевым словам"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          value={inputText}
        />
        <button className={classes.btn} onClick={search}>Поиск</button>
      </div>
      <div className={classes.blockRow}>
        <div className={classes.inputs}>
          <Category
            name="Выберите автора"
            authors={data && data.QAdmins}
            ubdateData={ubdateData}
          />
        </div>
        <div className={classes.inputs}>
          <Category
            name="Выбрать страну"
            country={data && data.Country}
            ubdateData={ubdateData}
          />
        </div>
        <button className={classes.btnSort}  onDoubleClick={()=>console.log("hi2")}>
          Сортировка по цене <img alt="img" src={sort} />
        </button>
        <button className={classes.btnSort}>
          Сортировка по дате <img alt="img" src={sort} />
        </button>
      </div>
    </div>
  );
};
export default MarketFilter;
