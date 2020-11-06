import React, { useState, useEffect } from "react";
import "./category.css";

import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Category = ({
  name,
  category,
  listCategory,
  country,
  authors,
  changeCategory,
  subCategory,
  ubdateData,
}) => {
  const [values, setValues] = useState(
    category
      ? {
          value: category,
          label: category,
        }
      : ""
  );
  console.log(category)
  useEffect(() => {
    if (name === "Все котегории") {
      changeCategory(values);
    }
  }, [values]);
  let arr = [];
  if (listCategory) {
    arr = listCategory.map((item) => {
      return {
        value: item.name,
        label: item.name,
        id: item.id,
      };
    });
  }
  if (country) {
    arr = country.map((item) => {
      return {
        value: item.name,
        label: item.name,
      };
    });
  }
  if (authors) {
    arr = authors.map((item) => {
      return {
        value: item.logo,
        label: item.logo,
      };
    });
  }
  if (subCategory) {
    arr = subCategory.subcategories.map((item) => {
      return {
        value: item.name,
        label: item.name,
      };
    });
  }

  const chengeData = (e) => {
    setValues(e);
    console.log(e);
    if (name === "Все котегории") {
      ubdateData(name, e.id);
    } else {
      ubdateData(name, e);
    }
  };

  return (
    <Select
      options={arr}
      placeholder={name}
      onChange={(e) => chengeData(e)}
      value={values}
      defaultValue={
        category ? { value: category.name, label: category.name } : ""
      }
    />
  );
};

export default Category;
