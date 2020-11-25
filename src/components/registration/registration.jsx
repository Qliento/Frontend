import React from "react"
import classes from "./registration.module.css"
import cancel from "./img/cancel.png"
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux';


const Registration =()=>{
    const language = useSelector(state => state.langReducer.lang)
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
                    {language === 1 && <><span className={classes.title}>Регистрация</span>
                    <span className={classes.step}>Шаг 1</span></>}
                    {language === 2 && <><span className={classes.title}>Sign up</span>
                    <span className={classes.step}>Step 1</span></>}
                    {language === 3 && <><span className={classes.title}>Каттоо</span>
                    <span className={classes.step}>1 кадам</span></>}
                </div>
                </div>

                <div className={classes.blockBtn}>
                    <Link to = '/registration-client'>
                        {language === 1 && <button className={classes.btn}>Частное лицо</button>}
                        {language === 2 && <button className={classes.btn}>Individual</button>}
                        {language === 3 && <button className={classes.btn}>Жеке кардар</button>}
                    </Link>
                    <Link to="/registration-organization">
                        {language === 1 && <button className={classes.btn}>Организация</button>}
                        {language === 2 && <button className={classes.btn}>Legal entity</button>}
                        {language === 3 && <button className={classes.btn}>Уюм</button>}
                    </Link>
                  
                </div>
                <Link to="/" className={classes.linkCancel}>
                    {language === 1 && <button className={classes.btnCancel}>Отмена</button>}
                    {language === 2 && <button className={classes.btnCancel}>Сancel</button>}
                    {language === 3 && <button className={classes.btnCancel}>Жокко чыгаруу</button>}
                </Link>
               
            </div>
        </div>
    )
}
export default Registration;