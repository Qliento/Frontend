import React, { useState } from "react";
import Modal from "react-modal";
import classes from "./modalregistr.module.css";
import img from "./img/Frame 72 (2).png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sendDemoVersion } from "../../../redux/actions/marketInreriorPage/marketInterPage";
import RegistrModalDemo from "./modal";

const ModalRegist = ({ edit, changeState, idResearch }) => {
  const language = localStorage.getItem("lang");
  const { handleSubmit, register, errors } = useForm();
  const [isModal, SetIsModal] = useState(true);

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(sendDemoVersion(values, idResearch));
  };
  return (
    <>
      <div className={classes.modal}>
        <div className={classes.blockModal}>
          <div className={classes.blockKrest}>
            <img
              alt="img"
              src={img}
              className={classes.krest}
              onClick={() => changeState()}
            />
          </div>
          <div className={classes.wrapper}>
            <div className={classes.blockText}>
              {(language == 1 || language == undefined) && <>
                <span className={classes.title}>Вы не авторизованы</span>
                <span className={classes.desc}>
                войдите или зарегистрируйтесь, чтобы скачать демоверсию
                исследования
                </span>
              </>}
              {language == 2 && <>
                <span className={classes.title}>You are not authorized</span>
                <span className={classes.desc}>
                login or register to download a demo study
                </span>
              </>}
              {language == 3 && <>
                <span className={classes.title}>Каттоосуз</span>
                <span className={classes.desc}>Изилдөөнүн демо версиясын жүктөп алуу үчүн кирүү же каттоо керек</span>
              </>}
            </div>
            {(language == 1 || language == undefined) && <>
              <Link to="/auth" className={classes.auth}>
              Войти
            </Link>
            <Link to="/registration" className={classes.regist}>
              Зарегистрироватся
            </Link>
            </>}
            {language == 2 && <>
              <Link to="/auth" className={classes.auth}>
              Login
            </Link>
            <Link to="/registration" className={classes.regist}>
              Registration
            </Link>
            </>}
            {language == 3 && <>
              <Link to="/auth" className={classes.auth}>
              Кирүү
            </Link>
            <Link to="/registration" className={classes.regist}>
              Каттоо
            </Link>
            </>}
            <div className={classes.blockText2}>
              {(language == 1 || language == undefined) && <>
                <span className={classes.title}>Без регистрации</span>
                <span className={classes.desc}>
                Если у вас еще нет аккаунта и вы не хотите регистрироваться на
                сайте, оставьте свою эл.почту, чтобы мы могли выслать вам
                демоверсию исследования
                </span>
                </>}
                {language == 2 && <>
                <span className={classes.title}>Without registration</span>
                <span className={classes.desc}>
                If you do not have an account yet and do not want to register on the site, please leave your email so that we can send you a demo of the research
                </span>
                </>}
                {language == 3 && <>
                <span className={classes.title}>Каттоосуз</span>
                <span className={classes.desc}>Эгер сизде азырынча аккаунтуңуз жок болсо жана сайтка катталгыңыз келбесе, анда электрондук почтаңызды калтырыңыз, ошондо биз сизге изилдөөнүн демо версиясын жөнөтө алабыз
                </span>
                </>}
              
            </div>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            {(language == 1 || language == undefined) && <><div className={classes.blockInputs}>
                <span className={classes.inputTitle}>ФИО</span>
                <input
                  name="name"
                  className={classes.inputs}
                  placeholder="ФИО"
                  ref={register({
                    validate: (name) => name && name.length > 2,
                  })}
                />
              </div>
              {errors.name && (
                <span className={classes.error}>Не корректно велли данные</span>
              )}</>} 
              {language == 2 && <><div className={classes.blockInputs}>
                <span className={classes.inputTitle}>Full name</span>
                <input
                  name="name"
                  className={classes.inputs}
                  placeholder="name"
                  ref={register({
                    validate: (name) => name && name.length > 2,
                  })}
                />
              </div>
              {errors.name && (
                <span className={classes.error}>Fill input</span>
              )}</>} 
              {language == 3 && <><div className={classes.blockInputs}>
                <span className={classes.inputTitle}>Сиздин атыңыз</span>
                <input
                  name="name"
                  className={classes.inputs}
                  placeholder="Сиздин атыңыз"
                  ref={register({
                    validate: (name) => name && name.length > 2,
                  })}
                />
              </div>
              {errors.name && (
                <span className={classes.error}>Талааны толтуруңуз</span>
              )}</>} 
              
              <div className={classes.blockInputs}>
                {(language == 1 || language == 3 || language == undefined) && <span className={classes.inputTitle}>Почта</span>}
                {language == 2 && <span className={classes.inputTitle}>Email</span>}
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
              </div>
              {errors.email && language == 1 && (<span className={classes.error}>Неверный адрес электронной почты</span>)}
              {errors.email && language == undefined && (<span className={classes.error}>Неверный адрес электронной почты</span>)}
              {errors.email && language == 2 && (<span className={classes.error}>Fill input</span>)}
              {errors.email && language == 3 && (<span className={classes.error}>Талааны толтуруңуз</span>)}
              <div className={classes.blockInputs}>
                {(language == 1 || language == 3 || language == undefined) && <span className={classes.inputTitle}>Телефон</span>}
                {language == 2 && <span className={classes.inputTitle}>Phone</span>}
                <input
                  name="phone"
                  className={classes.inputs}
                  placeholder="+996 (___) __ - __ - __"
                  ref={register({
                    validate: (phone) => phone && phone.length > 2,
                  })}
                />
              </div>

              {language == 1 && errors.phone && (<span className={classes.error}>Не корректно велли данные</span>)}
              {language == 2 && errors.phone && (<span className={classes.error}>Fill input</span>)}
              {language == 3 && errors.phone && (<span className={classes.error}>Талааны толтуруңуз</span>)}
              {(language == 1 || language == undefined) &&<button type="submit" className={classes.btnSubmit}>
                Отправить на почту
              </button>}
              {language == 2 &&<button type="submit" className={classes.btnSubmit}>
              Send by mail
              </button>}
              {language == 3 &&<button type="submit" className={classes.btnSubmit}>
              Почтага жөнөтүү
              </button>}
            </form>
          </div>
        </div>
      </div>

    </>
  );
};
export default ModalRegist;
