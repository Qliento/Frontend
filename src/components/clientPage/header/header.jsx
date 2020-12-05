import React from "react"
import classes from "./header.module.css"
import noPhoto from "./img/noPhoto.jpg"
import logo from "./img/logo.png"
import {useSelector} from 'react-redux';

const Header=({onModal, data})=>{
    // const language = useSelector(state => state.langReducer.lang)
    const language = localStorage.getItem('lang');

    return(
        <div className={classes.blockWrapp}>
            <div className={classes.topItem}>
                <img alt="img" className={classes.logo} src={logo}/>
            </div>
            <div className={classes.headerItem}>
                <div className={classes.bloc}>
                    <div className={classes.leftBlock}>
                    <span className={classes.title}>{data && data.surname + ' ' + data.name}</span>
                        <span className={classes.desc}>{data && data.email}</span>
                    </div>
                    <div className={classes.centerBlock}>
                        <span className={classes.titleNumber}>{data && data.phone_number}</span>
                        <span></span>
                    </div>
                    <div className={classes.rightBlock}>
                        {(language == 1 || language == undefined) &&<span className={classes.redact} onClick={() => onModal()}>Редактировать</span>}
                        {language == 2 &&<span className={classes.redact} onClick={() => onModal()}>Edit</span>}
                        {language == 3 &&<span className={classes.redact} onClick={() => onModal()}>Түзөтүү</span>}
                    </div>
                </div>
            </div>
            <div className={classes.photo}>
                <img alt="img" src={data && data.photo ? 'https://qliento.com' + data.photo : noPhoto} />
            </div>
        </div>
    )
}
export default Header;