import React from "react";
import "./category.scss";
import Select from "react-select";
import {useSelector} from 'react-redux';

const Category = ({ arrCategory,installCategory }) => {
  const language = useSelector(state => state.langReducer.lang)
  let options = [];
  if (arrCategory) {
    options = arrCategory.map((item) => {
      return {
        value: item.name,
        label: item.name,
      };
    });
  }
  
  return (
    <div className="inputSearch1">
      {language === 1 && <Select
        options={options}
        placeholder="Все категории"
       onChange={(e) => installCategory(e.value)}
       maxMenuHeight={200}
      />}
      {language === 2 && <Select
        options={options}
        placeholder="All categories"
       onChange={(e) => installCategory(e.value)}
       maxMenuHeight={200}
      />}
      {language === 3 && <Select
        options={options}
        placeholder="Бардык категориялар"
       onChange={(e) => installCategory(e.value)}
       maxMenuHeight={200}
      />}
    </div>
  );
};

export default Category;
