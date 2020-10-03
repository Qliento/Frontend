import React from "react"
import classes from "./registration.module.css"
import cancel from "./img/cancel.png"
import {Link} from "react-router-dom"

const Registration =()=>{
    return(
        <div className={classes.registration}>
            <div className={classes.blockRegist}>
                <div className={classes.blockTop}>
                <div className={classes.canceling}>
                    <Link to="/">
                    <img alt="img" src={cancel}  className={classes.img}/>
                    </Link>
                   
                </div>
                <div className={classes.blockTitle}>
                    <span className={classes.title}>Регистрация</span>
                    <span className={classes.step}>Шаг 1</span>
                </div>
                </div>

                <div className={classes.blockBtn}>
                    <button className={classes.btn}>Частное лицо</button>
                    <Link to="/registration-organization">
                    <button className={classes.btn}>Организация</button>
                    </Link>
                  
                </div>
                <Link to="/" className={classes.linkCancel}><button className={classes.btnCancel}>Отмена</button></Link>
               
            </div>
        </div>
    )
}
export default Registration;