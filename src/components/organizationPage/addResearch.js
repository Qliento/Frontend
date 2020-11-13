import React from "react";
import { Switch, Route } from "react-router-dom";
import Step1 from "./addResearch/step1/step1";
import Step2 from "./addResearch/step2/step2";

const AddReseach = () => {
  return (
    <Switch>
      <Route exact path="/organization-page/submit-research" component={Step1} />
      <Route exact path="/organization-page/submit-research/step2" component={Step2} />
    </Switch>
  );
};
export default AddReseach;
