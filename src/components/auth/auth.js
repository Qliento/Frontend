import React, { useState } from "react";
import st from './auth.module.css';
import { Link } from "react-router-dom";
import { authClient } from '../../redux/actions/actions';
import { authSocialFace } from '../../redux/actions/actions';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Modal from './modal';
import FacebookLogin from 'react-facebook-login';
import {authSocial} from '../../redux/actions/actions';
import noVis from "./image/noVisibility.png"
import vis from "./image/visibility 1.png"
import GoogleLogin from 'react-google-login';

const Auth = () => {
    const dispatch = useDispatch();
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values) =>{dispatch(authClient(values))} 
    const [visibility,setVisibility]=useState(false)
    const language = localStorage.getItem('lang');
    const [modal, setModal] = useState(1);
    const [network, setNetwork] = useState();
    const responseFacebook = (response) => {
        console.log(response)
        dispatch(authSocialFace(response.accessToken))
      }
    const success = (res) =>{
        dispatch(authSocial(res.tokenId))
    }
    const failure = (res) =>{
        console.log(res)
    }

    return(
    <div className={st.auth_bg}>
        <Modal />
        <div className={st.auth_content}>
            <Link to = '/' className = {st.strikeLink} >
                <div className={st.strike}></div>
            </Link>
            {(language == 1 || language == undefined) && <h2>Вход</h2>}
            {language == 2 && <h2>Login</h2>}
            {language == 3 && <h2>Кирүү</h2>}
            <div className={st.form}>
                <label for="email">E-mail</label>
                {(language == 1 || language == undefined) && <input name="email" id="email" placeholder="e-mail"  ref={register({
                required: "Это поле обязательное",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неверный адрес электронной почты",
                },
              })}/>}
                {language == 2 && <input name="email" id="email" placeholder="e-mail"  ref={register({
                    required: "Это поле обязательное",
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Неверный адрес электронной почты",
                    },
                })}/>}
                {language == 3 && <input name="email" id="email" placeholder="Сиздин электрондук почтаңыз"  ref={register({
                    required: "Это поле обязательное",
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Неверный адрес электронной почты",
                    },
                })}/>}
            {
                (language == 1 || language == undefined) &&<>
                {errors.email && (
              <span className={st.error}>Неверный адрес электронной почты</span>
                )}
                </>
            }
            {
                language == 2 &&<>
                {errors.email && (
              <span className={st.error}>Invalid email</span>
                )}
                </>
            }
            {
                language == 3 &&<>
                {errors.email && (
              <span className={st.error}>Электрондук почта жараксыз</span>
                )}
                </>
            }
            
                {(language == 1 || language == undefined) && <label>Пароль</label>}
                {language == 2 && <label>Password</label>}
                {language == 3 && <label>Сыр сөз</label>}
                <div className={st.inputs_password_block}>
                    {(language == 1 || language == undefined) && <input
                        name="password"
                        className={st.inputs}
                        placeholder="Ваш пароль"
                        type={visibility? "text":"password"}
                        ref={register({
                        validate: (password) => password && password.length > 8,
                        })}
                    />}
                    {language == 2 && <input
                        name="password"
                        className={st.inputs}
                        placeholder="Password"
                        type={visibility? "text":"password"}
                        ref={register({
                        validate: (password) => password && password.length > 8,
                        })}
                    />}
                    {language == 3 && <input
                        name="password"
                        className={st.inputs}
                        placeholder="Сыр сөз"
                        type={visibility? "text":"password"}
                        ref={register({
                        validate: (password) => password && password.length > 8,
                        })}
                    />}
                    <img className={st.imgVisib} alt="img" onClick={()=>setVisibility(!visibility)} src={visibility? vis : noVis} />
                </div>
                {(language == 1 || language == undefined) && errors.password && (
              <span className={st.error}>Пароль менее 8 символов</span>
            )}
            {language == 2 && errors.password && (
              <span className={st.error}>Password less than 8 characters</span>
            )}
            {language == 3 && errors.password && (
              <span className={st.error}>8 белгиден кем пароль</span>
            )}
            </div>
            {(language == 1 || language == undefined) && <Link to="/recovery-password" className={st.forgetPass}>Забыл пароль</Link>}
            {language == 2 && <Link to="/recovery-password" className={st.forgetPass}>Forgot your password</Link>}
            {language == 3 && <Link to="/recovery-password" className={st.forgetPass}>Сыр сөздү унуттуңузбу</Link>}
            <div className={st.auth_btn}>
                {(language == 1 || language == undefined) && <><button onClick={handleSubmit(onSubmit)}>Войти</button>
                <Link to="/Registration">
                    Регистрация
                </Link></>}
                {language == 2 && <><button onClick={handleSubmit(onSubmit)}>Login</button>
                <Link to="/Registration">
                    Sign up
                </Link></>}
                {language == 3 && <><button onClick={handleSubmit(onSubmit)}>Кирүү</button>
                <Link to="/Registration">
                    Каттоо
                </Link></>}
            </div>
            <div className={st.social_auth}>
                {(language == 1 || language == undefined) && <span>Войти через</span>}
                {language == 2 && <span>Login with</span>}
                {language == 3 && <span>Аркылуу кирүү</span>}
                <div className={st.social_auth_icons}>
                <GoogleLogin 
                    clientId="1032556798687-6427pbbpse1jm5ho5is64cja01bad94u.apps.googleusercontent.com"
                    buttonText=""
                    onSuccess={success}
                    onFailure={failure}
                    cookiePolicy={'single_host_origin'}
                    />
                <FacebookLogin
                    appId="845882496211969"
                    // autoLoad={true}
                    fields="name,email,picture"
                    icon="fa-facebook"
                    textButton=""
                    // onClick={componentClicked}
                    callback={responseFacebook} />
                    <img src={require('./image/vk.png')} alt="icon" />
                    <img src={require('./image/twitter.png')} alt="icon" />
                </div>
            </div>
            
        </div>
    </div>
    )}

export default Auth;