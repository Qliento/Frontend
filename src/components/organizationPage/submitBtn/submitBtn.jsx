import React from "react"
import classes from "./submitBtn.module.css"
import icon from "./img/plus.png"
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux';

const SubmitBtn=()=>{
    // const language = useSelector(state => state.langReducer.lang)
    const language = localStorage.getItem('lang');
    return(
        <div className={classes.blockSubmit}>
        <Link to="/organization-page/submit-research" className={classes.linkBtn}>
            {(language == 1 || language == undefined) &&<button className={classes.btn}><img alt="" src={icon}/> Подать  исследование</button>}
            {language == 2 &&<button className={classes.btn}><img alt="" src={icon}/> Submit product</button>}
            {language == 3 &&<button className={classes.btn}><img alt="" src={icon}/> Изилдөө тапшыруу</button>}
        </Link>
        </div>
    )
}
export default SubmitBtn;