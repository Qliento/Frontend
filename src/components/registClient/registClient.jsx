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
  const language = useSelector(state => state.langReducer.lang)
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
      }   
      else{
        setVerified(false);
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
            {language === 1 && <>
              <span className={classes.title}>Регистрация</span>
              <span className={classes.step}>Шаг 2</span>
            </>}
            {language === 2 && <>
              <span className={classes.title}>Sign up</span>
              <span className={classes.step}>Step 2</span>
            </>}
            {language === 3 && <>
              <span className={classes.title}>Катто</span>
              <span className={classes.step}>2 кадам</span>
            </>}
            
          </div>
        </div>
        <form className={classes.blockForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.blockInput}>
            {language === 1 && <> <label>Имя*</label>
            <input
              name="name"
              className={classes.inputs}
              placeholder="Ваше имя"
              ref={register({
                validate: (name) => name && name.length > 2,
              })}
            />
            {errors.name && (
              <span className={classes.error}>Заполните поле</span>
            )}</>}
            {language === 2 && <> <label>Name*</label>
            <input
              name="name"
              className={classes.inputs}
              placeholder="Name"
              ref={register({
                validate: (name) => name && name.length > 2,
              })}
            />
            {errors.name && (
              <span className={classes.error}>Fill input</span>
            )}</>}
            {language === 3 && <> <label>Сиздин атыңыз*</label>
            <input name="name" className={classes.inputs} placeholder="Сиздин атыңыз"
              ref={register({
                validate: (name) => name && name.length > 2,
              })}
            />
            {errors.name && (
              <span className={classes.error}>Талааны толтуруңуз</span>
            )}</>}
          </div>
          <div className={classes.blockInput}>
            {language === 1 && <><label>Фамилия*</label>
            <input
              name="surname"
              className={classes.inputs}
              placeholder="Ваша фамилия"
              ref={register({
                validate: (surname) => surname && surname.length > 2,
              })}
            />
            {errors.surname && (
              <span className={classes.error}>Заполните поле</span>
            )}</>}
            {language === 2 && <><label>Surname*</label>
            <input
              name="surname"
              className={classes.inputs}
              placeholder="Surname"
              ref={register({
                validate: (surname) => surname && surname.length > 2,
              })}
            />
            {errors.surname && (
              <span className={classes.error}>Fill in the field</span>
            )}</>}
            {language === 3 && <><label>Фамилияңыз*</label>
            <input
              name="surname"
              className={classes.inputs}
              placeholder="Фамилияңыз"
              ref={register({
                validate: (surname) => surname && surname.length > 2,
              })}
            />
            {errors.surname && (
              <span className={classes.error}>Талааны толтуруңуз</span>
            )}</>}
          </div>
          <div className={classes.blockInput}>
            <label>E-mail</label>
            <input
              name="email"
              className={classes.inputs}
              placeholder="email"
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
            {language === 1 && <>
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
            )}</>}
            {language === 2 && <>
              <label>Phone number</label>
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
              <span className={classes.error}>Less then 6 characters</span>
            )}</>}
            {language === 3 && <>
              <label>Телефон номуру</label>
            <input
              name="phone_number"
              className={classes.inputs}
              placeholder="+996 (___) __ - __ - __"
              type="text"
              ref={register({
                validate: (phone_number) => phone_number && phone_number.length > 8,
              })}
            />
            {errors.phone_number && (
              <span className={classes.error}>6 белгиден кем</span>
            )}</>}
          </div>
          <div className={classes.blockInput}>
            {language === 1 && <label>Пароль</label>}
            {language === 2 && <label>Password</label>}
            {language === 3 && <label>Сыр соз</label>}
            <div className={classes.inputs_password_block}>
              <input
                name="password"
                className={classes.inputs}
                // placeholder="Ваш пароль"
                type={visibility? "text":"password"}
                ref={register({
                  validate: (password) => password && password.length > 8,
                })}
              />
              <img className={classes.imgVisib} alt="img" onClick={()=>setVisibility(!visibility)} src={visibility? vis : noVis} />
            </div>
            {language === 1 && errors.password && (
              <span className={classes.error}>Пароль менее 6 символов</span>
            )}
            {language === 2 && errors.password && (
              <span className={classes.error}>Less than 8 characters</span>
            )}
            {language === 3 && errors.password && (
              <span className={classes.error}>8 белгиден кем</span>
            )}
          </div>
          <div className={classes.blockInput}>
            {language === 1 && <label>Повторить пароль</label>}
            {language === 2 && <label>Repeat password</label>}
            {language === 3 && <label>Паролду кайталаңыз</label>}
            <div className={classes.inputs_password_block}>
              <input
                name="password_check"
                className={classes.inputs}
                // placeholder="Ваш пароль"
                type={visibility2? "text":"password"}
                ref={register({
                  validate: (password_check) => password_check && password_check.length > 8,
                })}
              />
              <img className={classes.imgVisib} alt="img" onClick={()=>setVisibility2(!visibility2)} src={visibility2? vis : noVis} />
            </div>
            {errors.password_check && language === 1 && (
              <span className={classes.error}>Пароль менее 8 символов</span>
            )}
            {errors.password_check && language === 2 && (
              <span className={classes.error}>Less than 8 characters</span>
            )}
            {errors.password_check && language === 3 && (
              <span className={classes.error}>8 белгиден кем</span>
            )}
            {language === 1 && err && (
                <span className={classes.error}>Пароли не совподают</span>
              )}
            {language === 2 && err && (
                <span className={classes.error}>Passwords do not match</span>
              )}
            {language === 3 && err && (
                <span className={classes.error}>Сырсөздөр дал келген жок</span>
              )}
          </div>
          <div className={classes.blockChecket}>
            <input
              className={classes.checkbox}
              type="checkbox"
              name="checkbox"
              required
            />
            <div className={classes.text}>
              {language === 1 && <>
                <span>Подтверждаю, что ознакомлен и согласен с </span>
              <Link to='/agreement' className={classes.agreement}>Пользовательским соглашением</Link>
              </>}
              {language === 2 && <>
                <span>I confirm that I have read and agree with the </span>
              <Link to='/agreement' className={classes.agreement}>User Agreement</Link>
              </>}
              {language === 3 && <>
                <Link to='/agreement' className={classes.agreement}>Колдонуучунун келишимин</Link>
                <span> окуп чыкканымды жана аны менен макул экенимди ырастайм</span>
              </>}
            </div>
          </div>
          <div className={classes.blockCapcha}>
            <ReCAPTCHA
              sitekey="6LfQZ-EZAAAAAC4RQyi7GCqJyiWXXDcIdsRVV0n4"
              render="explicit"
              onChange={verifiedCallback}
            />
            {
              verified == false && (<>
                {language === 1 && <span className={classes.error}>Подтвердите что вы не бот</span>}
                {language === 2 && <span className={classes.error}>Confirm that you are not a robot</span>}
                {language === 3 && <span className={classes.error}>Бот эмес экениңизди тастыктаңыз</span>}
              </>)
            }
          </div>
          {language === 1 && <button type="submit" className={classes.btnRegist} onClick={handleSubmit(onSubmit)}>
            Зарегистрироваться
          </button>}
          {language === 2 && <button type="submit" className={classes.btnRegist} onClick={handleSubmit(onSubmit)}>
            Registration
          </button>}
          {language === 3 && <button type="submit" className={classes.btnRegist} onClick={handleSubmit(onSubmit)}>
            Каттоо
          </button>}
        </form>
      </div>
    </div>
  );
};
export default RegistClient;
