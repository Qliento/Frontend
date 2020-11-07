import React, { useState } from "react";
import Category from "./category/category";
import classes from "./inputs.module.css";
import { Redirect } from "react-router";

const Inputs = ({ arrCategory }) => {
  const [dataSearch, setDataSearch] = useState({
    category: "",
    text: "",
  });
  const [market, setMarket] = useState();
  const upadateData = (e) => {
    setDataSearch({
      ...dataSearch,
      category: e,
    });
  };


  const btnSearch = () => {
    if (dataSearch.category) {
      console.log("11")
      if(dataSearch.text===""){
        console.log("22")
        setMarket(1)
      }
 
    }
    if (dataSearch.text) {
      console.log("1")
      if(dataSearch.category===""){
        console.log("2")
        setMarket(2)
      }
    }
    if(dataSearch.category!=="" && dataSearch.text !==""){
      console.log("333")
      setMarket(3)
    }
 
  };

  return (
    <>
      {market ===1? (
        <Redirect
          to={`/market-research/${dataSearch.category}`}
        />
      ) : null}
      {market ===2? (
        <Redirect
          to={`/market-research-search/${dataSearch.text}`}
        />
      ) : null}
  
      {market ===3? (
        <Redirect
          to={`/market-research-search2/${dataSearch.category}/${dataSearch.text}`}
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
