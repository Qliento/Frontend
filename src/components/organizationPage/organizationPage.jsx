import React from "react";
import Header from "./header/header";
import classes from "./organizationPage.module.css"
import ResearchCards from "./researchCards";
import SubmitBtn from "./submitBtn/submitBtn";
import { Route, Switch } from "react-router-dom";
import Content from "./content";

const OrgPage=()=>{
    return(
        <div className={classes.orgPage}>
            <Header/>
            <Content/>
       
        </div>
    )
}
export default OrgPage;