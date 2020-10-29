import React, { useState } from "react";
import Category from "./category/category";
import classes from "./inputs.module.css";
import {Link} from "react-router-dom"

const Inputs = ({ arrCategory }) => {
  const [dataSearch, setDataSearch] = useState({
    category: " ",
    text: " ",
  });
  const upadateData = (e) => {
    setDataSearch({
      ...dataSearch,
      category: e,
    });
  };
  console.log(dataSearch);
  return (
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
        onChange={(e) => setDataSearch({ ...dataSearch, text: e.target.value })}
      />
      <Link to={`/market-research/${dataSearch.category}/${dataSearch.text}`} className={classes.btn}> <button className={classes.btn2}>Найти</button></Link>
     
    </div>
  );
};
export default Inputs;
