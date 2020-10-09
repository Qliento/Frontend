import React from "react";
import Category from "./category/category";
import classes from "./marketFilter.module.css";
import sort from "./img/sort.png"

const MarketFilter = () => {
  return (
    <div className={classes.blockFilter}>
      <div className={classes.blockRow}>
        <div className={classes.inputs}>
          <Category name="Все котегории"/>
        </div>
        <div className={classes.inputs}>
          <Category name="Подкотегории" />
        </div>

        <input className={classes.inputSearch} type="text" placeholder="Поиск по ключевым словам"/>
        <button className={classes.btn}>Поиск</button>
      </div>
      <div className={classes.blockRow}>
      <div className={classes.inputs}>
          <Category name="Выберите автора"/>
        </div>
        <div className={classes.inputs}>
          <Category name="Выбрать страну" />
        </div>
        <button className={classes.btnSort}>Сортировка по цене <img alt="img" src={sort}/></button>
        <button className={classes.btnSort}>Сортировка по дате <img alt="img" src={sort}/></button>
      </div>
    </div>
  );
};
export default MarketFilter;
