import React from "react"
import classes from "./submitBtn.module.css"
import icon from "./img/plus.png"
import {Link} from "react-router-dom"

const SubmitBtn=()=>{
    return(
        <div className={classes.blockSubmit}>
<Link to="/organization-page/submit-research" className={classes.linkBtn}>
<button className={classes.btn}><img alt="" src={icon}/> Подать  исследование</button>
</Link>

        </div>
    )
}
export default SubmitBtn;