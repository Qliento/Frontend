import React from "react"
import classes from "./header.module.css"
import photo1 from "./img/photo.png"
import logo from "./img/logo.png"

const Header=()=>{
    return(
        <div className={classes.blockWrapp}>
            <div className={classes.topItem}>
                <img alt="img" className={classes.logo} src={logo}/>
            </div>
            <div className={classes.headerItem}>
                <div className={classes.bloc}>
                    <div className={classes.leftBlock}>
                        <span className={classes.title}>Турдубеков Акназар</span>
                        <span className={classes.desc}>aknazar_t@gmail.com</span>
                    </div>
                    <div className={classes.centerBlock}>
                        <span className={classes.titleNumber}>+996 555 444 222</span>
                        <span></span>
                    </div>
                    <div className={classes.rightBlock}>
                        <span className={classes.redact}>Редактировать</span>
                    </div>
                </div>
            </div>
            <img alt="" className={classes.photo} src={photo1} />
        </div>
    )
}
export default Header;