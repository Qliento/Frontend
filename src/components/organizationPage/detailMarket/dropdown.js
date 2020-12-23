import React,{useEffect} from "react"
import classes from "./detailMarket.module.css"
import Select from "react-select";
import {useDispatch,useSelector} from "react-redux"
import { StaticResearch } from "../../../redux/actions/organizationPage/action";

const options = [
  { value: "За день", label: "За день", key:"1" },
  { value: "За неделю", label: "За неделю", key:"2" },
  { value: "За месяц", label: "За месяц" , key:"3"},
  { value: "За год", label: "За год", key:"4" },
  { value: "За все время", label: "За все время", key:"5" },
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
        <Select
        options={options}
        onChange={(e)=>getStatic(e.key)}
        defaultValue={options[4]}
      />
    )
}
export default Dropdown;