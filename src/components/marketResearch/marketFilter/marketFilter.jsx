import React, { useEffect, useState } from "react";
import Category from "./category/category";
import classes from "./marketFilter.module.css";
import sort from "./img/sort.png";
import { useDispatch, useSelector } from "react-redux";
import { listDataFilter } from "../../../redux/actions/filterMarket/filterMarket";
import { searchMarket } from "../../../redux/actions/mainSearch/mainSearch";
import { Link } from "react-router-dom";

const MarketFilter = ({ category, sort1, sort2, text, sendDataFilter }) => {
  const dispatch = useDispatch();
  const [sort11, setSort11] = useState(false);
  const [sort22, setSort22] = useState(false);
  const data = useSelector((state) => state.FilterMarket.listData);
  const [categor, setCategor] = useState(category && category.name);
  const [inputCategory, setInputCategory] = useState(category ? category : "");
  const [inputSubCategory, setInputSubCategory] = useState("");
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputCountry, setInputCountry] = useState("");
  const [inputText, setInputText] = useState(text ? text : "");
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem("lang");
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
    console.log(name);
    if (name === "Все категории" || name === 'All categories' || name === 'Баардык категориялар') {
      setInputCategory(e.value);
    } else if (name === "Подкатегории" || name === 'Subcategories' || name === 'Подкатегориялар') {
      setInputSubCategory(e.value);
    } else if (name === "Выберите автора") {
      setInputAuthor(e.value);
    } else if (name === "Выбрать страну") {
      setInputCountry(e.value);
    }
  };
  const search = () => {
    dispatch(
      searchMarket(
        inputCategory,
        inputSubCategory,
        inputAuthor,
        inputCountry,
        inputText
      )
    );
  };
  return (
    <div className={classes.blockFilter}>
      <div className={classes.blockRow,classes.blockRow11}>
        <div className={classes.inputs}>
          {(language == 1 || language == undefined) && <Category
            name="Все категории"
            category={category}
            listCategory={data && data.Category}
            changeCategory={(e) => setCategor(e.value)}
            ubdateData={ubdateData}
          />}
          {language == 2 && <Category
            name="All categories"
            category={category}
            listCategory={data && data.Category}
            changeCategory={(e) => setCategor(e.value)}
            ubdateData={ubdateData}
          />}
          {language == 3 && <Category
            name="Баардык категориялар"
            category={category}
            listCategory={data && data.Category}
            changeCategory={(e) => setCategor(e.value)}
            ubdateData={ubdateData}
          />}
          
        </div>
        <div className={classes.inputs}>
          {(language == 1 || language == undefined) && <Category
            name="Подкатегории"
            subCategory={subCategory && subCategory[0]}
            ubdateData={ubdateData}
          />}
          {language == 2 && <Category
            name="Subcategories"
            subCategory={subCategory && subCategory[0]}
            ubdateData={ubdateData}
          />}
          {language == 3 && <Category
            name="Подкатегориялар"
            subCategory={subCategory && subCategory[0]}
            ubdateData={ubdateData}
          />}
        </div>

        {(language == 1 || language == undefined) && (
          <input
            className={(classes.inputSearch, classes.inputSearchNone)}
            placeholder="Поиск по ключевым словам"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
        )}
        {language == 2 && (
          <input
            className={classes.inputSearch , classes.inputSearchNone}
            placeholder="Keyword search"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
        )}
        {language == 3 && (
          <input
            className={classes.inputSearch, classes.inputSearchNone}
            placeholder="Негизги сөз боюнча издөө"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
        )}
        <Link
          className={(classes.linkBtn, classes.btnNone)}
          to={`/market-research-filter`}
        >
          {(language == 1 || language == undefined) && (
            <button className={classes.btn} onClick={search}>
              Поиск
            </button>
          )}
          {language == 2 && (
            <button className={classes.btn} onClick={search}>
              Search
            </button>
          )}
          {language == 3 && (
            <button className={classes.btn} onClick={search}>
              Издөө
            </button>
          )}
        </Link>
      </div>
      <div className={classes.blockRow}>
        <div className={classes.inputs}>
          {(language == 1 || language == undefined) && <Category
            name="Выберите автора"
            authors={data && data.QAdmins}
            ubdateData={ubdateData}
          />}
          {language == 2 && <Category
            name="Choose company"
            authors={data && data.QAdmins}
            ubdateData={ubdateData}
          />}
          {language == 3 && <Category
            name="Компанияны тандаңыз"
            authors={data && data.QAdmins}
            ubdateData={ubdateData}
          />}
        </div>
        <div className={classes.inputs}>
          {(language == 1 || language == undefined) && <Category
            name="Выбрать страну"
            country={data && data.Country}
            ubdateData={ubdateData}
          />}
          {language == 2 && <Category
            name="Choose country"
            country={data && data.Country}
            ubdateData={ubdateData}
          />}
          {language == 3 && <Category
            name="Мамлекетти тандаңыз"
            country={data && data.Country}
            ubdateData={ubdateData}
          />}
        </div>
        {(language == 1 || language == undefined) && (
          <>
            <button
              className={sort11 ? classes.btnSort1 : classes.btnSort}
              onClick={() => {
                sort1();
                setSort11(!sort11);
              }}
            >
              Сортировка по цене <img alt="img" src={sort} />
            </button>
            <button
              className={sort22 ? classes.btnSort1 : classes.btnSort}
              onClick={() => {
                sort2();
                setSort22(!sort22);
              }}
            >
              Сортировка по дате <img alt="img" src={sort} />
            </button>
          </>
        )}
        {language == 2 && (
          <>
            <button
              className={sort11 ? classes.btnSort1 : classes.btnSort}
              onClick={() => {
                sort1();
                setSort11(!sort11);
              }}
            >
              Sort by price <img alt="img" src={sort} />
            </button>
            <button
              className={sort22 ? classes.btnSort1 : classes.btnSort}
              onClick={() => {
                sort2();
                setSort22(!sort22);
              }}
            >
              Sort by data <img alt="img" src={sort} />
            </button>
          </>
        )}
        {language == 3 && (
          <>
            <button
              className={sort11 ? classes.btnSort1 : classes.btnSort}
              onClick={() => {
                sort1();
                setSort11(!sort11);
              }}
            >
              Баа боюнча иреттөө <img alt="img" src={sort} />
            </button>
            <button
              className={sort22 ? classes.btnSort1 : classes.btnSort}
              onClick={() => {
                sort2();
                setSort22(!sort22);
              }}
            >
              Дата боюнча иреттөө <img alt="img" src={sort} />
            </button>
          </>
        )}
      </div>
      <div className={classes.blockRow1}>
        {(language == 1 || language == undefined) && (
          <input
            className={classes.inputSearch1}
            placeholder="Поиск по ключевым словам"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
        )}
        {language == 2 && (
          <input
            className={classes.inputSearch1}
            placeholder="Keyword search"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
        )}
        {language == 3 && (
          <input
            className={classes.inputSearch1}
            placeholder="Негизги сөз боюнча издөө"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
        )}
        <Link className={classes.linkBtn1} to={`/market-research-filter`}>
          {(language == 1 || language == undefined) && (
            <button className={classes.btn1} onClick={search}>
              Поиск
            </button>
          )}
          {language == 2 && (
            <button className={classes.btn1} onClick={search}>
              Search
            </button>
          )}
          {language == 3 && (
            <button className={classes.btn1} onClick={search}>
              Издөө
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};
export default MarketFilter;
