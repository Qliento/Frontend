import React, { useState } from "react";
import Category from "./category/category";
import classes from "./inputs.module.css";
import { Redirect } from "react-router";
import {useSelector} from 'react-redux';


const Inputs = ({ arrCategory }) => {
  const [dataSearch, setDataSearch] = useState({
    category: "",
    text: "",
  });
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem('lang');
  const [market, setMarket] = useState();
  const upadateData = (e) => {
    setDataSearch({
      ...dataSearch,
      category: e,
    });
  };

  console.log(dataSearch.text)
  const btnSearch = () => {
    if (dataSearch.category) {
      if(dataSearch.text===""){
        setMarket(1)
      }
 
    }
    if (dataSearch.text) {
      if(dataSearch.category===""){
        setMarket(2)
      }
    }
    if(dataSearch.category!=="" && dataSearch.text !==""){
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
        {(language == 1 || language == undefined) && <><input className={classes.search} placeholder="Поиск" value={dataSearch.text}
          onChange={(e) =>
            setDataSearch({ ...dataSearch, text: e.target.value })
          }
        />
        <button className={classes.btn} onClick={() => btnSearch()}>Найти</button></>}
        {language == 2 && <><input className={classes.search} placeholder="Search" value={dataSearch.text}
          onChange={(e) =>
            setDataSearch({ ...dataSearch, text: e.target.value })
          }
        />
        <button className={classes.btn} onClick={() => btnSearch()}>Find</button></>}
        {language == 3 && <><input className={classes.search} placeholder="Издөө" value={dataSearch.text}
          onChange={(e) =>
            setDataSearch({ ...dataSearch, text: e.target.value })
          }
        />
        <button className={classes.btn} onClick={() => btnSearch()}>Табуу</button></>}
        
      </div>
    </>
  );
};
export default Inputs; //<Link to={`/market-research/${dataSearch.category}/${dataSearch.text}`} className={classes.btn}>
