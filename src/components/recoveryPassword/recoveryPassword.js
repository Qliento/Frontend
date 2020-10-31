import React from 'react';
import st from './recoveryPassword.module.css';
import { Link } from "react-router-dom";

const RecoveryPassword = () =>{


    return(
        <div className={st.recoveryBlock}>
            <div className={st.recoveryBlock_content}>
                <Link to = '/' className = {st.strikeLink} >
                    <div className={st.strike}></div>
                </Link>
                <h2>Восстановление пароля</h2>
                <form>
                    <label>E-mail</label>
                    <input placeholder="Ваш e-mail"></input>
                    <button>Отправить письмо</button>
                </form>
            </div>
        </div>
    )
}

export default RecoveryPassword;