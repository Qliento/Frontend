import React,{useEffect} from "react";
import Header from "./header/header";
import classes from "./organizationPage.module.css"
import ResearchCards from "./researchCards";
import SubmitBtn from "./submitBtn/submitBtn";
import { Route, Switch } from "react-router-dom";
import Content from "./content";
import {useDispatch,useSelector} from "react-redux"
import { clientData } from "../../redux/actions/actions";

const OrgPage=()=>{
    const token = localStorage.getItem("user");
    const dispatch = useDispatch();
    const data = useSelector((state) => state.clientData.data.data);
    useEffect(() => {
        dispatch(clientData(token));
    }, []);
    console.log(data)
    return(
        <div className={classes.orgPage}>
            <Header data={data&&data}/>
            <Content/>
       
        </div>
    )
}
export default OrgPage;