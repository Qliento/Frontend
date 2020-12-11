import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "./regisrtOrganization.module.css";
import { useDispatch, useSelector } from "react-redux";
import cancel from "./img/cancel.png";
import { Link } from "react-router-dom";
import noVis from "./img/noVisibility.png";
import vis from "./img/visibility 1.png";
import Recaptcha from 'react-recaptcha';
import {
  error,
  errorMesseg,
  registrationOrg,
} from "../../redux/actions/registrationOrg/registrationOrg";
import RegistrModal from "./modal";
const RegistOrganization = () => {
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem('lang');
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const isModal = useSelector((state) => state.RegistrOrg.isModal);
  const [verified, setVerified]=useState(false)
  const verifiedCallback = () =>{
    setVerified(true);
  }

  useEffect(() => {
    dispatch(errorMesseg());
  }, []);
  const onSubmit = (values) => {
    if (values.repeatPassword !== values.password) {
      setErr(true);
    } else {
      setErr(false);
      if(verified){
        dispatch(registrationOrg(values));
      }
      else{
        setVerified(false)
      }
    
    
    }
    if(!verified){
      setVerified(false)
    }
  };
  const [err, setErr] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  return (
    <>
    <RegistrModal />

      <div className={classes.regist}>
        <div className={classes.blockRegist}>
          <div className={classes.blockTop}>
            <div className={classes.canceling}>
              <Link to="/">
                <img alt="img" src={cancel} className={classes.img} />
              </Link>
            </div>
            <div className={classes.blockTitle}>
              {(language == 1 || language == undefined) && <>
                <span className={classes.title}>Регистрация</span>
                <span className={classes.step}>Шаг 2</span>
              </>}
              {language == 2 && <>
                <span className={classes.title}>Registration</span>
                <span className={classes.step}>Step 2</span>
              </>}
              {language == 3 && <>
                <span className={classes.title}>Катто</span>
                <span className={classes.step}>1 кадам</span>
              </>}
            </div>
          </div>
          <form className={classes.blockForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.blockInput}>
              {(language == 1 || language == undefined) && <><label>Название организации*</label>
              <input name="name2" className={classes.inputs} placeholder="Название"
                ref={register({
                  validate: (name2) => name2 && name2.length > 2,
                })}/>
              {errors.name2 && (
                <span className={classes.error}>Не корректно велли данные</span>
              )}</>}
              {language == 2 && <><label>*Name of the organization</label>
              <input name="name2" className={classes.inputs} placeholder="Name of the organization"
                ref={register({
                  validate: (name2) => name2 && name2.length > 2,
                })}/>
              {errors.name2 && (
                <span className={classes.error}>Data incorrectly entered</span>
              )}</>}
              {language == 3 && <><label>Уюмдун аталышы*</label>
              <input name="name2" className={classes.inputs} placeholder="Уюмдун аталышы"
                ref={register({
                  validate: (name2) => name2 && name2.length > 2,
                })}/>
              {errors.name2 && (
                <span className={classes.error}>Маалыматтар туура эмес киргизилген</span>
              )}</>}
            </div>
            <div className={classes.blockInput}>
              {(language == 1 || language == undefined) && <><label>Должность</label>
              <input name="position" className={classes.inputs} placeholder="Должность" ref={register}/></>}
              {language == 2 && <><label>Position</label>
              <input name="position" className={classes.inputs} placeholder="Position" ref={register}/></>}
              {language == 3 && <><label>Кызмат</label>
              <input name="position" className={classes.inputs} placeholder="Кызмат" ref={register}/></>}
            </div>
            <div className={classes.blockInput}>
              {(language == 1 || language == undefined) && <><label>Имя*</label>
              <input name="name" className={classes.inputs} placeholder="Ваше имя" ref={register({
                  validate: (name) => name && name.length > 2,
                })}/>
              {errors.name && (
                <span className={classes.error}>Не корректно велли данные</span>
              )}</>}
              {language == 2 && <><label>Name*</label>
              <input name="name" className={classes.inputs} placeholder="Name" ref={register({
                  validate: (name) => name && name.length > 2,
                })}/>
              {errors.name && (
                <span className={classes.error}>Data incorrectly entered</span>
              )}</>}
              {language == 3 && <><label>Сиздин атыңыз*</label>
              <input name="name" className={classes.inputs} placeholder="Сиздин атыңыз" ref={register({
                  validate: (name) => name && name.length > 2,
                })}/>
              {errors.name && (
                <span className={classes.error}>Маалыматтар туура эмес киргизилген</span>
              )}</>}
            </div>
            <div className={classes.blockInput}>
              {(language == 1 || language == undefined) && <>
                <label>Фамилия*</label>
              <input name="lastName" className={classes.inputs} placeholder="Ваша фамилия" ref={register({
                  validate: (lastName) => lastName && lastName.length > 2,
                })}/>
              {errors.lastName && (
                <span className={classes.error}>Не корректно велли данные</span>)}
              </>}
              {language == 2 && <>
                <label>Surname*</label>
              <input name="lastName" className={classes.inputs} placeholder="Surname" ref={register({
                  validate: (lastName) => lastName && lastName.length > 2,
                })}/>
              {errors.lastName && (
                <span className={classes.error}>Data incorrectly entered</span>)}
              </>}
              {language == 3 && <>
                <label>Сиздин фамилияңыз*</label>
              <input name="lastName" className={classes.inputs} placeholder="Сиздин фамилияңыз" ref={register({
                  validate: (lastName) => lastName && lastName.length > 2,
                })}/>
              {errors.lastName && (
                <span className={classes.error}>Маалыматтар туура эмес киргизилген</span>)}
              </>}
            </div>
            <div className={classes.blockInput}>
              <label>E-mail*</label>
              <input
                name="email"
                className={classes.inputs}
                placeholder="email"
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
              {(language == 1 || language == undefined) && <label>Номер телефона*</label>}
              {language == 2 && <label>Phone number*</label>}
              {language == 3 && <label>Телефон номуру*</label>}
              <input name="phone" className={classes.inputs} placeholder="+996 (___) __ - __ - __" type="number"
                ref={register({
                  validate: (phone) => phone && phone.length > 2,
                })}/>
              {errors.phone && (<>
                {(language == 1 || language == undefined) && <span className={classes.error}>Не корректно велли данные</span>}
                {language == 2 && <span className={classes.error}>Data incorrectly entered</span>}
                {language == 3 && <span className={classes.error}>Маалыматтар туура эмес киргизилген</span>}
              </>)}
            </div>
            <div className={classes.blockInput}>
              {(language == 1 || language == undefined) && <label>Пароль*</label>}
              {language == 2 && <label>Password*</label>}
              {language == 3 && <label>Сыр сөз*</label>}
              <div className={classes.blockVisibil}>
                {(language == 1 || language == undefined) && <input name="password" className={classes.inputs1} placeholder="Ваш пароль" type={visibility ? "text" : "password"}
                  ref={register({
                    validate: (password) => password && password.length > 8,
                  })} />}
                {language == 2 && <input name="password" className={classes.inputs1} placeholder="Password" type={visibility ? "text" : "password"}
                  ref={register({
                    validate: (password) => password && password.length > 8,
                  })} />}
                  {language == 3 && <input name="password" className={classes.inputs1} placeholder="Сыр сөз" type={visibility ? "text" : "password"}
                  ref={register({
                    validate: (password) => password && password.length > 8,
                  })} />}
                <img
                  className={classes.imgVisib}
                  alt="img"
                  onClick={() => setVisibility(!visibility)}
                  src={visibility ? vis : noVis}
                />
              </div>
              {(language == 1 || language == undefined) && <>
                {errors.password && (
                <span className={classes.error}>Пароль менее 8 символов</span>
              )}
              {err && (
                <span className={classes.error}>Пароли не совподают</span>
              )}</>}
              {language == 2 && <>
                {errors.password && (
                <span className={classes.error}>Password less than 8 characters</span>
              )}
              {err && (
                <span className={classes.error}>Пароли не совподают</span>
              )}</>}
              {language == 3 && <>
                {errors.password && (
                <span className={classes.error}>8 белгиден кем пароль</span>
              )}
              {err && (
                <span className={classes.error}>Пароли не совподают</span>
              )}</>}
            </div>
            <div className={classes.blockInput}>
              {(language == 1 || language == undefined) && <label>Повторите пароль*</label>}
              {language == 2 && <label>Repeat password*</label>}
              {language == 3 && <label>Паролду кайталаңыз*</label>}
              <div className={classes.blockVisibil}>
                {(language == 1 || language == undefined) && <input name="repeatPassword" className={classes.inputs1} placeholder="Ваш пароль" type={visibility2 ? "text" : "password"}
                  ref={register({
                    validate: (repeatPassword) =>
                      repeatPassword && repeatPassword.length > 8,
                  })}/>}
                  {language == 2 && <input name="repeatPassword" className={classes.inputs1} placeholder="Password" type={visibility2 ? "text" : "password"}
                  ref={register({
                    validate: (repeatPassword) =>
                      repeatPassword && repeatPassword.length > 8,
                  })}/>}
                  {language == 3 && <input name="repeatPassword" className={classes.inputs1} placeholder="Сыр соз" type={visibility2 ? "text" : "password"}
                  ref={register({
                    validate: (repeatPassword) =>
                      repeatPassword && repeatPassword.length > 8,
                  })}/>}
                <img
                  className={classes.imgVisib}
                  alt="img"
                  onClick={() => setVisibility2(!visibility2)}
                  src={visibility2 ? vis : noVis}
                />
              </div>
              {(language == 1 || language == undefined) && <>{errors.repeatPassword && (
                <span className={classes.error}>Пароль менее 8 символов</span>
              )}
              {err && (
                <span className={classes.error}>Пароли не совподают</span>
              )}</>}
              {language == 2 && <>{errors.repeatPassword && (
                <span className={classes.error}>Password less than 8 characters</span>
              )}
              {err && (
                <span className={classes.error}>Пароли не совподают</span>
              )}</>}
              {language == 3 && <>{errors.repeatPassword && (
                <span className={classes.error}>8 белгиден кем пароль</span>
              )}
              {err && (
                <span className={classes.error}>Пароли не совподают</span>
              )}</>}
            </div>
            <div className={classes.blockChecket}>
              <input
                className={classes.checkbox}
                type="checkbox"
                name="checkbox"
                required
              />
              <div className={classes.text}>
                {(language == 1 || language == undefined) && <>
                  <span>Подтверждаю, что ознакомлен и согласен с </span>
                <Link to='/agreement'>Пользовательским соглашением</Link></>}
                {language == 2 && <>
                  <span>I confirm that I have read and agree with the</span>
                <Link to='/agreement'>User Agreement</Link></>}
                {language == 3 && <>
                  <Link to='/agreement'>Колдонуучунун келишимин</Link>
                  <span> окуп чыкканымды жана аны менен макул экенимди ырастайм</span></>}
              </div>
            </div>
            <div className={classes.blockCapcha}>
            <Recaptcha
              sitekey="6LfQZ-EZAAAAAC4RQyi7GCqJyiWXXDcIdsRVV0n4"
              render="explicit"
              verifyCallback={verifiedCallback}
            />
            {
              verified=== false ?  (<>
                {(language == 1 || language == undefined) &&<span className={classes.error}>Подтвердите что вы не бот</span>}
                {language == 2 &&<span className={classes.error}>Сonfirm that you are not a robot</span>}
                {language == 3 &&<span className={classes.error}>Бот эмес экениңизди тастыктаңыз</span>}
              </>)
              : <></>
            }
          </div>
            {(language == 1 || language == undefined) && <button type="submit" className={classes.btnRegist}>Зарегистрироваться</button>}
            {language == 2 && <button type="submit" className={classes.btnRegist}>Registration</button>}
            {language == 3 && <button type="submit" className={classes.btnRegist}>Катто</button>}
          </form>
        </div>
      </div>
    </>
  );
};
export default RegistOrganization;
