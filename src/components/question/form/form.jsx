import React, { useState } from "react";
import classes from "./form.module.css";
import { useForm } from "react-hook-form";
import { sendQuestions } from "../../../redux/actions/sendQuestion/question";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (values) => dispatch(sendQuestions(values));
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} MutationObserverunregister shouldUnregister>
      <div className={classes.leftColumn}>
        <div className={classes.inputs}>
          <label>ФИО*</label>
          <input
            type="text"
            className={classes.input}
            placeholder="Ваш ФИО"
            name="fio"
            ref={register({
              validate: (fio) => fio && fio.length > 4,
            })}
          />
          {errors.fio && (
            <span className={classes.error}>Не корректно велли данные</span>
          )}
        </div>
        <div className={classes.inputs}>
          <label>Название организации</label>
          <input
            type="text"
            className={classes.input}
            placeholder="Название организации"
            name="name"
            ref={register({
              validate: (name) => name && name.length > 2,
            })}
          />
          {errors.name && (
            <span className={classes.error}>
              Название огранизации меньше 2 символов
            </span>
          )}
        </div>
        <div className={classes.inputs}>
          <label>Почта*</label>
          <input
            type="text"
            className={classes.input}
            placeholder="Ваш email"
            name="email"
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
        <div className={classes.inputs}>
          <label>Телефон*</label>
          <input
            type="text"
            className={classes.input}
            placeholder="+996 ___ - __ - __ - __"
            name="phone"
            ref={register({
              validate: (phone) => phone && phone.length > 6,
            })}
          />
          {errors.phone && (
            <span className={classes.error}>
              Название огранизации меньше 6 символов
            </span>
          )}
        </div>
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.inputs}>
          <label>Ваш вопрос</label>
          <textarea
            type="text"
            className={classes.inputTextarea}
            placeholder="Ваш вопрос"
            name="question"
            ref={register({
              required: "Это поле обязательное",
              pattern: {
                message: "Введите вопрос",
              },
            })}
          />
          {errors.question && (
            <span className={classes.error}>{errors.question.message}</span>
          )}
        </div>
        <button type="submit" className={classes.btn}>
          Отправить
        </button>
      </div>
    </form>
  );
};
export default Form;
