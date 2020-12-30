import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
import classes from "./modalregistr.module.css";
import img from "./img/Frame 72 (2).png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sendDemoVersion } from "../../../redux/actions/marketInreriorPage/marketInterPage";
import RegistrModalDemo from "./modal";

const ModalRegist = ({ edit, changeState, idResearch }) => {
  // const language = useSelector(state => state.langReducer.lang)
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
              <span className={classes.title}>Вы не авторизованы</span>
              <span className={classes.desc}>
                войдите или зарегистрируйтесь, чтобы скачать демоверсию
                исследования
              </span>
            </div>
            <Link to="/auth" className={classes.auth}>
              Войти
            </Link>
            <Link to="/registration" className={classes.regist}>
              Зарегистрироваться
            </Link>
            <div className={classes.blockText2}>
              <span className={classes.title}>Без регистрации</span>
              <span className={classes.desc}>
                Если у вас еще нет аккаунта и вы не хотите регистрироваться на
                сайте, оставьте свою эл.почту, чтобы мы могли выслать вам
                демоверсию исследования
              </span>
            </div>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={classes.blockInputs}>
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
              )}
              <div className={classes.blockInputs}>
                <span className={classes.inputTitle}>Почта</span>
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
              {errors.email && (
                <span className={classes.error}>{errors.email.message}</span>
              )}
              <div className={classes.blockInputs}>
                <span className={classes.inputTitle}>Телефон</span>
                <input
                  name="phone"
                  className={classes.inputs}
                  placeholder="+996 (___) __ - __ - __"
                  ref={register({
                    validate: (phone) => phone && phone.length > 2,
                  })}
                />
              </div>

              {errors.phone && (
                <span className={classes.error}>Не корректно велли данные</span>
              )}
              <button type="submit" className={classes.btnSubmit}>
                Отправить на почту
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};
export default ModalRegist;
