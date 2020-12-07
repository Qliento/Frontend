import React, { Component } from "react";
import "./country.scss";
import {useSelector} from "react-redux"

import CreatableSelect from "react-select/creatable";

const Country = ({ name ,changeCountry,lang,data}) => {
  const handleChange = (newValue, actionMeta) => {
      
        changeCountry(newValue)
      

  };
  const dataCountry=useSelector((state)=>state.FilterMarket.listData);
  console.log(dataCountry)
  let colourOptions=[];
  if(dataCountry.Country){
    colourOptions=dataCountry.Country.map((item)=>{
        return{
            value:item.name,
            label:item.name
        }
    })
  }
  
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
