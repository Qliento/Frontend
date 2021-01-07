import React, { useState, useEffect } from "react";
import "./select.scss";
import {useSelector} from "react-redux";

import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Dropdown = ({ name,lang,changeData,dataSubRu ,dataList,subCategory,mainCategory}) => {

  let arr = [];
  
  console.log(subCategory)
  if(subCategory){
    arr = subCategory.subcategories.map((item) => {
      return {
        value: item.name,
        label: item.name,
        id:item.id,
      };
    });
  }
    if (dataList) {
      arr = dataList.map((item) => {
        return {
          value: item.name,
          label: item.name,
          id: item.id,
        };
      });
    }


  const chengeData = (e) => {
    if(lang==="ru"){
      if(name==="Выберите категорию"){
        changeData(e,"category")
      }
      if(name==="Выберите подкатегорию"){
        changeData(e,"subCategory1")
        console.log(e)
      }

  
    }
    if(lang==="kg"){
      if(name==='Категория'){
        changeData(e,"category")
      }
      if(name==="Подкатегориялар"){
        changeData(e,"subCategory1")
      
      }
      

  
    }
    if(lang==="en"){
      if(name==="Choose category"){
        changeData(e,"category")
      }
      if(name==="Choose subcategory"){
        changeData(e,"subCategory1")
      }
    }
 
  };
  console.log(dataSubRu)
  return (
    <div className="dropdown1">
      <Select
        options={arr}
        placeholder={name}
        defaultValue={
          dataSubRu ? dataSubRu : ""
        }
        onChange={(e) => chengeData(e)}
      />
    </div>
  );
};

export default Dropdown;
