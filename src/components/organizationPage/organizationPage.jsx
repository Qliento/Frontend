import React from "react";
import Header from "./header/header";
import classes from "./organizationPage.module.css"
import ResearchCards from "./researchCards";
import SubmitBtn from "./submitBtn/submitBtn";

const OrgPage=()=>{
    return(
        <div className={classes.orgPage}>
            <Header/>
            <SubmitBtn/>
            <div className={classes.cardTitle}>
                <span>Мои исследования</span>
            </div>
            <ResearchCards/>
        </div>
    )
}
export default OrgPage;