import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classes from "./registClient.module.css";
import { useDispatch } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";

import cancel from "./img/cancel.png";
import { Link } from "react-router-dom";
import { registrationClient } from '../../redux/actions/actions';
import { useSelector } from "react-redux";
import noVis from "./img/noVisibility.png"
import vis from "./img/visibility 1.png";
import RegistrModal from "./modal";

const RegistClient = () => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();

  const isModal = useSelector((state) => state.RegistrationClient.isModal);
  // console.log(isModal.RegistrationClient.isModal)
  const[err,setErr]=useState(false)
  const [visibility,setVisibility]=useState(false)
  const [visibility2,setVisibility2]=useState(false)
  const [verified, setVerified]=useState(false)
  const verifiedCallback = () =>{
    setVerified(true)
  }

  const onSubmit = (values) =>{
    if(values.password_check != values.password){
      setErr(true)
    }
    else{
      if(verified){
        setErr(false);
        dispatch(registrationClient(values))
        console.log(1)
      }
        
        else{
          setVerified(false);
          console.log(2)
        }
    }
  } 

  return (
    <div className={classes.regist}>
      <RegistrModal />
      <div className={classes.blockRegist}>
        <div className={classes.blockTop}>
          <div className={classes.canceling}>
            <Link to="/">
              <img alt="img" src={cancel} className={classes.img} />
            </Link>
          </div>
          <div className={classes.blockTitle}>
            <span className={classes.title}>Регистрация</span>
            <span className={classes.step}>Шаг 2</span>
          </div>
        </div>
        <form className={classes.blockForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.blockInput}>
            <label>Имя*</label>
            <input
              name="name"
              className={classes.inputs}
              placeholder="Ваше имя"
              type="text"
              ref={register({
                validate: (name) => name && name.length > 2,
              })}
            />
            {errors.name && (
              <span className={classes.error}>Заполните поле</span>
            )}
          </div>
          <div className={classes.blockInput}>
            <label>Фамилия*</label>
            <input
              name="surname"
              className={classes.inputs}
              placeholder="Ваша фамилия"
              type="text"
              ref={register({
                validate: (surname) => surname && surname.length > 2,
              })}
            />
            {errors.surname && (
              <span className={classes.error}>Заполните поле</span>
            )}
          </div>
          <div className={classes.blockInput}>
            <label>E-mail</label>
            <input
              name="email"
              className={classes.inputs}
              placeholder="Ваш email"
              type="text"
              ref={register({
                required: "Это поле обязательное",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неверный адрес электронной почты",
                },
              })}
            />
            {errors.email && (
              <span className={classes.error}>{errors.email.message}</span>
            )}
          </div>
          <div className={classes.blockInput}>
            <label>Номер телефона</label>
            <input
              name="phone_number"
              className={classes.inputs}
              placeholder="+996 (___) __ - __ - __"
              type="text"
              ref={register({
                validate: (phone_number) => phone_number && phone_number.length > 6,
              })}
            />
            {errors.phone_number && (
              <span className={classes.error}>Более 6-ти символов</span>
            )}
          </div>
          <div className={classes.blockInput}>
            <label>Пароль</label>
            <div className={classes.inputs_password_block}>
              <input
                name="password"
                className={classes.inputs}
                placeholder="Ваш пароль"
                type={visibility? "text":"password"}
                ref={register({
                  validate: (password) => password && password.length > 6,
                })}
              />
              <img className={classes.imgVisib} alt="img" onClick={()=>setVisibility(!visibility)} src={visibility? vis : noVis} />
            </div>
            {errors.password && (
              <span className={classes.error}>Пароль менее 6 символов</span>
            )}
          </div>
          <div className={classes.blockInput}>
            <label>Повторит пароль</label>
            <div className={classes.inputs_password_block}>
              <input
                name="password_check"
                className={classes.inputs}
                placeholder="Ваш пароль"
                type={visibility2? "text":"password"}
                ref={register({
                  validate: (password_check) => password_check && password_check.length > 6,
                })}
              />
              <img className={classes.imgVisib} alt="img" onClick={()=>setVisibility2(!visibility2)} src={visibility2? vis : noVis} />
            </div>
            {errors.password_check && (
              <span className={classes.error}>Пароль менее 6 символов</span>
            )}
            {
              err && (
                <span className={classes.error}>Пароли не совподают</span>
              )
            }
          </div>
          <div className={classes.blockChecket}>
            <input
              className={classes.checkbox}
              type="checkbox"
              name="checkbox"
              required
            />
            <div className={classes.text}>
              <span>Подтверждаю, что ознакомлен и согласен с </span>
              <Link to='/agreement'>Пользовательским соглашением</Link>
            </div>
          </div>
          <div className={classes.blockCapcha}>
            <ReCAPTCHA
              sitekey="6LcajdoZAAAAAFOgC8_IQd25j4QdCaMJBK4dfK52"
              render="explicit"
              onChange={verifiedCallback}
            />
            {
              verified == false && (
                <span className={classes.error}>Подтвердите что вы не бот</span>
              )
            }
          </div>
          <button type="submit" className={classes.btnRegist} onClick={handleSubmit(onSubmit)}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegistClient;
