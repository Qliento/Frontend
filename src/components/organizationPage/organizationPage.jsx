import React,{useEffect,useState} from "react";
import Header from "./header/header";
import classes from "./organizationPage.module.css"
import ResearchCards from "./researchCards";
import SubmitBtn from "./submitBtn/submitBtn";
import { Route, Switch } from "react-router-dom";
import Content from "./content";
import {useDispatch,useSelector} from "react-redux"
import { organData } from "../../redux/actions/actions";
import ReactDOM from 'react-dom';
import EditProfile from "./editPrifile/editProfile";
import EditPassword from "./editPrifile/editPassword";

const OrgPage=()=>{
    const [modal, setModal] = useState(0);
    const token = localStorage.getItem("user");
    const dispatch = useDispatch();
    const data = useSelector((state) => state.clientData.data.data);
    useEffect(() => {
        dispatch(organData(token));
    }, []);
    console.log(modal)
    const onModal = () =>{
        setModal(1)
        console.log("hi")
    }

    const offModal = () =>{
        setModal(0)
    }

    const changeModal = () =>{
        setModal(2)
    }
    console.log(data)
    return(
        <div className={classes.orgPage} >
            <Header data={data&&data} onModal={onModal}/>
            <Content/>
            {modal == 1 && ReactDOM.createPortal(
                <EditProfile offModal={offModal} changeModal={changeModal} data={data} />,
                document.getElementById('portal')
            )}
            {modal == 2 && ReactDOM.createPortal(
                <EditPassword offModal={offModal} />,
                document.getElementById('portal')
            )}
       
        </div>
    )
}
export default OrgPage;