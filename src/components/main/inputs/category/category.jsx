import React from "react";
import "./category.scss";

import Select from "react-select";

const Category = ({ arrCategory,installCategory }) => {
 
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
      <Select
        options={options}
        placeholder="Все категории"
       onChange={(e) => installCategory(e.value)}
       maxMenuHeight={200}
      />
    </div>
  );
};

export default Category;
