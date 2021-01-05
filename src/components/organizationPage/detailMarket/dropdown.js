import React,{useEffect} from "react"
import classes from "./detailMarket.module.css"
import Select from "react-select";
import {useDispatch,useSelector} from "react-redux"
import { StaticResearch } from "../../../redux/actions/organizationPage/action";


const language = localStorage.getItem('lang');
const options = [
  { value: "За день", label: "За день", key:"1" },
  { value: "За неделю", label: "За неделю", key:"2" },
  { value: "За месяц", label: "За месяц" , key:"3"},
  { value: "За год", label: "За год", key:"4" },
  { value: "За все время", label: "За все время", key:"5" },
];
const optionsEn = [
  { value: "Day", label: "Day", key:"1" },
  { value: "Week", label: "Week", key:"2" },
  { value: "Month", label: "Month" , key:"3"},
  { value: "Year", label: "Year", key:"4" },
  { value: "All time", label: "All time", key:"5" },
];
const optionsKg = [
  { value: "Күнгө", label: "Күнгө", key:"1" },
  { value: "Жумага", label: "Жумага", key:"2" },
  { value: "Aйга", label: "Aйга" , key:"3"},
  { value: "Бир жылга", label: "Бир жылга", key:"4" },
  { value: "Бардык убакытка", label: "Бардык убакытка", key:"5" },
];

const Dropdown=({id})=>{
  const dispatch= useDispatch();
useEffect(()=>{
  dispatch(StaticResearch(id,5))
},[])

const getStatic=(key)=>{
  dispatch(StaticResearch(id,key));
  console.log(key)
}

    return(
      <>
      {language == 1 &&  <Select
        options={options}
        onChange={(e)=>getStatic(e.key)}
        defaultValue={options[4]}
      />}
        {
          language == 2 && <Select
          options={optionsEn}
          onChange={(e)=>getStatic(e.key)}
          defaultValue={optionsEn[4]}
        />
        }
        {
          language == 3 && <Select
          options={optionsKg}
          onChange={(e)=>getStatic(e.key)}
          defaultValue={optionsKg[4]}
        />
        }
      </> 
    )
}
export default Dropdown;