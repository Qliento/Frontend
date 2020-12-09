import React, { useState } from "react";
import classes from "./form.module.css";
import { useForm } from "react-hook-form";
import { sendQuestions } from "../../../redux/actions/sendQuestion/question";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  // const language = useSelector(state => state.langReducer.lang);
  const language = localStorage.getItem('lang');
  const onSubmit = (values) => dispatch(sendQuestions(values));
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} MutationObserverunregister shouldUnregister>
      <div className={classes.leftColumn}>
        <div className={classes.inputs}>
          {(language == 1 || language == undefined) && <><label>ФИО*</label>
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
          )}</>}
            {language == 2 && <><label>Full name*</label>
          <input
            type="text"
            className={classes.input}
            placeholder="Full name"
            name="fio"
            ref={register({
              validate: (fio) => fio && fio.length > 4,
            })}
          />
          {errors.fio && (
            <span className={classes.error}>Data incorrectly entered</span>
          )}</>}
          {language == 3 && <><label>ФИО*</label>
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
            <span className={classes.error}>Маалыматтар туура эмес киргизилген</span>
          )}</>}
        </div>
        <div className={classes.inputs}>
          {(language == 1 || language == undefined) &&<>
            <label>Название организации</label>
          <input
            type="text"
            className={classes.input}
            placeholder="Название организации*"
            name="name"
            ref={register({
              validate: (name) => name && name.length > 2,
            })}
          />
          {errors.name && (
            <span className={classes.error}>
              Название огранизации меньше 2 символов
            </span>
          )}</>}
          {language == 2 &&<>
            <label>Name of the organization</label>
          <input
            type="text"
            className={classes.input}
            placeholder="Name of the organization*"
            name="name"
            ref={register({
              validate: (name) => name && name.length > 2,
            })}
          />
          {errors.name && (
            <span className={classes.error}>
              Less then 2 characters
            </span>
          )}</>}
          {language == 3 &&<>
            <label>Уюм аты</label>
          <input
            type="text"
            className={classes.input}
            placeholder="Уюм аты*"
            name="name"
            ref={register({
              validate: (name) => name && name.length > 2,
            })}
          />
          {errors.name && (
            <span className={classes.error}>
              2 белгиден кем
            </span>
          )}</>}
        </div>
        <div className={classes.inputs}>
          <label>Email*</label>
          <input
            type="text"
            className={classes.input}
            placeholder="email"
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
          {(language == 1 || language == undefined) && <label>Телефон*</label>}
          {language == 2 && <label>Phone_number*</label>}
          {language == 3 && <label>Телефон*</label>}
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
            <span className={classes.error}>Это поле обязательно</span>
          )}
          {errors.phone && language === 1 &&  (
            <span className={classes.error}>
              Название огранизации меньше 6 символов
            </span>)}
            {errors.phone && language === 2 &&  (
            <span className={classes.error}>
              Less than 6 characters
            </span>)}
            {errors.phone && language === 3 &&  (
            <span className={classes.error}>
              6 белгиден кем
            </span>)}
        </div>
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.inputs}>
          {(language == 1 || language == undefined) && <>
            <label>Ваш вопрос*</label>
          <textarea className={classes.inputTextarea}  placeholder="Ваш вопрос" name="question" ref={register({
              required: "Это поле обязательное",
              pattern: {
                message: "Введите вопрос",
              },
            })}/>
          </>}
          {language == 2 && <>
            <label>Your question*</label>
          <textarea className={classes.inputTextarea}  placeholder="Ваш вопрос" name="question" ref={register({
              required: "Это поле обязательное",
              pattern: {
                message: "Fill in the field",
              },
            })}/>
          </>}
          {language == 3 && <>
            <label>Сиздин сурооңуз*</label>
          <textarea className={classes.inputTextarea}  placeholder="Ваш вопрос" name="question" ref={register({
              required: "Это поле обязательное",
              pattern: {
                message: "Талааны толтуруңуз",
              },
            })}/>
          </>}
          {errors.question && (
            <span className={classes.error}>{errors.question.message}</span>
          )}
        </div>
        {(language == 1 || language == undefined) && <button type="submit" className={classes.btn}>Отправить</button>}
        {language == 2 && <button type="submit" className={classes.btn}>Send</button>}
        {language == 3 && <button type="submit" className={classes.btn}>Жөнөтүү</button>}
      </div>
    </form>
  );
};
export default Form;
