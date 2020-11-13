import React, { useState, useEffect } from "react";
import "./select.scss";

import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Dropdown = ({name}) => {
  return (
    <div className="dropdown1">
      <Select options={options} placeholder={name} />
    </div>
  );
};

export default Dropdown;
