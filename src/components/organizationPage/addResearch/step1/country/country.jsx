import React, { Component } from "react";
import "./country.scss";

import CreatableSelect from "react-select/creatable";

const Country = ({ name ,changeCountry,lang,data}) => {
  const handleChange = (newValue, actionMeta) => {
      
        changeCountry(newValue)
      

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
        defaultValue={data?data:""}
        onChange={handleChange}
        options={colourOptions}
      />
    </div>
  );
};
export default Country;
