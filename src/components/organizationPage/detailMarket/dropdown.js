import React from "react"
import classes from "./detailMarket.module.css"
import Select from "react-select";

const options = [
  { value: "За все время", label: "За все время" },
  { value: "За год", label: "За год" },
  { value: "За месяц", label: "За месяц" },
  { value: "За неделю", label: "За неделю" },
];

const Dropdown=()=>{
    return(
        <Select
        options={options}
  
        defaultValue={options[0]}
      />
    )
}
export default Dropdown;