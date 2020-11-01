import React, { useState } from "react";
import Category from "./category/category";
import classes from "./inputs.module.css";
import { Redirect } from "react-router";

const Inputs = ({ arrCategory }) => {
  const [dataSearch, setDataSearch] = useState({
    category: "",
    text: "",
  });
  const [market, setMarket] = useState(false);
  const upadateData = (e) => {
    setDataSearch({
      ...dataSearch,
      category: e,
    });
  };


  const btnSearch = () => {
    if (dataSearch.category!==" " || dataSearch.text !==" ") {
      setMarket(true);
    }
  };
  console.log(dataSearch);
  return (
    <>
      {market ? (
        <Redirect
          to={`/market-research/${dataSearch.category}/${dataSearch.text}`}
        />
      ) : null}
      <div className={classes.blockInputs}>
        <div className={classes.categories}>
          <Category
            arrCategory={arrCategory && arrCategory}
            installCategory={upadateData}
          />
        </div>

        <input
          className={classes.search}
          placeholder="Поиск"
          value={dataSearch.text}
          onChange={(e) =>
            setDataSearch({ ...dataSearch, text: e.target.value })
          }
        />
        <button className={classes.btn} onClick={() => btnSearch()}>
          Найти
        </button>
      </div>
    </>
  );
};
export default Inputs; //<Link to={`/market-research/${dataSearch.category}/${dataSearch.text}`} className={classes.btn}>
