import React from "react";
import Header from "./header/header";
import classes from "./clientPage.module.css"
import Content from "./content/content";

const ClientPage=()=>{
    return(
        <div className={classes.clientPage}>
            <Header/>
            <Content/>
        </div>
    )
}
export default ClientPage;