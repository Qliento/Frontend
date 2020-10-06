import React from "react";
import { useForm } from "react-hook-form";
import classes from "./registClient.module.css";

import cancel from "./img/cancel.png";
import { Link } from "react-router-dom";
import capcha from "./img/capcha.png";

const RegistClient = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <div className={classes.regist}>
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
            <label>Название организации</label>
            <input
              name="name2"
              className={classes.inputs}
              placeholder="Название"
              type="text"
            />

          </div>
          <div className={classes.blockInput}>
            <label>Имя</label>
            <input
              name="name"
              className={classes.inputs}
              placeholder="Ваше имя"
              type="text"
            />
          </div>
          <div className={classes.blockInput}>
            <label>Фамилия</label>
            <input
              name="lastName"
              className={classes.inputs}
              placeholder="Ваша фамилия"
              type="text"
            />
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
              name="phone"
              className={classes.inputs}
              placeholder="+996 (___) __ - __ - __"
              type="number"
            />
          </div>
          <div className={classes.blockInput}>
            <label>Пароль</label>
            <input
              name="password"
              className={classes.inputs}
              placeholder="Ваш пароль"
              type="password"
            />
          </div>
          <div className={classes.blockInput}>
            <label>Повторит пароль</label>
            <input
              name="repeatPasssword"
              className={classes.inputs}
              placeholder="Ваш пароль"
              type="password"
            />
          </div>
          <div className={classes.blockChecket}>
            <input
              className={classes.checkbox}
              type="checkbox"
              name="checkbox"
            />
            <div className={classes.text}>
              <span>Подтверждаю, что ознакомлен и согласен с </span>
              <span>Пользовательским соглашением</span>
            </div>
          </div>
          <div className={classes.blockCapcha}>
            <img alt="img" src={capcha} className={classes.imgCapcha} />
            <input
              name="capcha"
              className={classes.inputCapcha}
              placeholder="Введите текст "
            />
          </div>
          <button type="submit" className={classes.btnRegist}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegistClient;
