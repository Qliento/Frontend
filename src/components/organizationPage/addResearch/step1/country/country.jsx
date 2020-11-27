import React, { Component } from "react";
import "./country.scss";

import CreatableSelect from "react-select/creatable";

const Country = ({ name }) => {
  const handleChange = (newValue, actionMeta) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const colourOptions = [
    { value: "ocean", label: "Ocean"},
    { value: "blue", label: "Blue"},
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange"},
    { value: "yellow", label: "Yellow"},
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
    { value: "slate", label: "Slate" },
    { value: "silver", label: "Silver" },
  ];
  return (
    <div className="country">
      <CreatableSelect
        placeholder={name}
        isMulti
        onChange={handleChange}
        options={colourOptions}
      />
    </div>
  );
};
export default Country;
