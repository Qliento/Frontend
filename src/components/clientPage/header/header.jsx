import React from "react"
import classes from "./header.module.css"
import photo1 from "./img/photo.png"
import logo from "./img/logo.png"

const Header=({onModal, data})=>{

    return(
        <div className={classes.blockWrapp}>
            <div className={classes.topItem}>
                <img alt="img" className={classes.logo} src={logo}/>
            </div>
            <div className={classes.headerItem}>
                <div className={classes.bloc}>
                    <div className={classes.leftBlock}>
                    <span className={classes.title}>{data && data.admin_status.surname + ' ' + data.admin_status.name}</span>
                        <span className={classes.desc}>{data && data.admin_status.email}</span>
                    </div>
                    <div className={classes.centerBlock}>
                        <span className={classes.titleNumber}>{data && data.admin_status.phone_number}</span>
                        <span></span>
                    </div>
                    <div className={classes.rightBlock}>
                        <span className={classes.redact} onClick={() => onModal()}>Редактировать</span>
                    </div>
                </div>
            </div>
            <img alt="" className={classes.photo} src={photo1} />
        </div>
    )
}
export default Header;