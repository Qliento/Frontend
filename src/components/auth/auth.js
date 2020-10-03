import React from "react";
import st from './auth.module.css';
import { Link } from "react-router-dom";

const Auth = () => (
    <div className={st.auth_bg}>
        <div className={st.auth_content}>
            <div className={st.strike}></div>
            <h2>Вход</h2>
            <div className={st.form}>
                <label for="sing_in">E-mail</label>
                <input name="sing_in" id="sing_in" type="input" value="" placeholder="Ваш e-mail"/>
                <label for="sing_in">Пароль</label>
                <input name="sing_in" id="sing_in" type="input" value="" placeholder="Ваш пароль"/>
            </div>
            <Link to="/">
                Забыли пароль?
            </Link>
            <div className={st.auth_btn}>
                <button>Войти</button>
                <button>Регистрация</button>
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
)

export default Auth;