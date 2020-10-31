import React, { useState } from "react";
import st from './auth.module.css';
import { Link } from "react-router-dom";
import { authClient } from '../../redux/actions/actions';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import noVis from "./image/noVisibility.png"
import vis from "./image/visibility 1.png"

const Auth = () => {
    const dispatch = useDispatch();
    const { handleSubmit, register, errors } = useForm();

    const authBtn = () =>{
        dispatch(authClient('nurlanuulushama@gmail.com', '123456789'))
    }

    const [visibility,setVisibility]=useState(false)

    return(
    <div className={st.auth_bg}>
        <div className={st.auth_content}>
            <Link to = '/' className = {st.strikeLink} >
                <div className={st.strike}></div>
            </Link>
            <h2>Вход</h2>
            <div className={st.form}>
                <label for="email">E-mail</label>
                <input name="email" id="email" type="input" placeholder="Ваш e-mail"  ref={register({
                required: "Это поле обязательное",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неверный адрес электронной почты",
                },
              })}/>
              {errors.email && (
              <span className={st.error}>Неверный адрес электронной почты</span>
            )}
                <label>Пароль</label>
                <div className={st.inputs_password_block}>
                    <input
                        name="password"
                        className={st.inputs}
                        placeholder="Ваш пароль"
                        type={visibility? "text":"password"}
                        ref={register({
                        validate: (password) => password && password.length > 6,
                        })}
                    />
                    <img className={st.imgVisib} alt="img" onClick={()=>setVisibility(!visibility)} src={visibility? vis : noVis} />
                </div>
                {errors.password && (
              <span className={st.error}>Пароль менее 6 символов</span>
            )}
            </div>
            <Link to="/recovery-password" className={st.forgetPass}>
                Забыл пароль
            </Link>
            <div className={st.auth_btn}>
                <button onClick={handleSubmit(authBtn)}>Войти</button>
                <Link to="/Registration">
                    Регистрация
                </Link>
            </div>
            <div className={st.social_auth}>
                <span>Войти через</span>
                <div className={st.social_auth_icons}>
                    <img src={require('./image/vk.png')} alt="icon" />
                    <img src={require('./image/fc_icon.png')} alt="icon" />
                    <img src={require('./image/Group 59.png')} alt="icon" />
                    <img src={require('./image/twitter.png')} alt="icon" />
                </div>
            </div>
            
        </div>
    </div>
    )}

export default Auth;