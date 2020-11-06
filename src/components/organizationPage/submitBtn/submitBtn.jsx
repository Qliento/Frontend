import React from "react"
import classes from "./submitBtn.module.css"
import icon from "./img/plus.png"

const SubmitBtn=()=>{
    return(
        <div className={classes.blockSubmit}>
<button className={classes.btn}><img alt="" src={icon}/> Подать  исследование</button>
        </div>
    )
}
export default SubmitBtn;