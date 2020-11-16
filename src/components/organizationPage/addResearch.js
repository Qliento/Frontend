import React from "react";
import { Switch, Route } from "react-router-dom";
import Step1 from "./addResearch/step1/step1";
import Step2 from "./addResearch/step2/step2";
import Step3 from "./addResearch/step3/step3";

const AddReseach = () => {
  return (
    <Switch>
      <Route exact path="/organization-page/submit-research" component={Step1} />
      <Route  path="/organization-page/submit-research/step2" component={Step2} />
      <Route  path="/organization-page/submit-research/step3" component={Step3} />
    </Switch>
  );
};
export default AddReseach;
