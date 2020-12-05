import React,{useState} from "react";
import { Switch, Route } from "react-router-dom";
import Step1 from "./addResearch/step1/step1";
import Step2 from "./addResearch/step2/step2";
import Step3 from "./addResearch/step3/step3";

const AddReseach = () => {
  let lang=[]
  const [isLang,setIsLang]=useState([1,2,3])
  
  const langUpdate=(e)=>{
    setIsLang(e)
    lang=[...e]
  }
  return (
    <Switch>
      <Route exact path="/organization-page/submit-research"><Step1 langChange={(e)=>langUpdate(e)}/></Route>
      <Route  path="/organization-page/submit-research/step2" ><Step2 isLang={isLang}/></Route>
      <Route  path="/organization-page/submit-research/step3"><Step3/></Route>
    </Switch>
  );
};
export default AddReseach;
