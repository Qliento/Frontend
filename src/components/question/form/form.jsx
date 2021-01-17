import React, { useState } from "react";
import classes from "./form.module.css";
import { useForm } from "react-hook-form";
import { sendQuestions } from "../../../redux/actions/sendQuestion/question";
import { useDispatch, useSelector } from "react-redux";
import RegistrModal from "./modal";

const Form = () => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  // const language = useSelector(state => state.langReducer.lang);
  const language = localStorage.getItem("lang");
  const onSubmit = (values) => dispatch(sendQuestions(values));
  return (
    <>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        MutationObserverunregister
        shouldUnregister
      >
        <div className={classes.leftColumn}>
          <div className={classes.inputs}>
            {(language == 1 || language == undefined) && (
              <>
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
                  <span className={classes.error}>Заполните поле</span>
                )}
              </>
            )}
            {language == 2 && (
              <>
                <label>Full name*</label>
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
                  <span className={classes.error}>Fill in the field </span>
                )}
              </>
            )}
            {language == 3 && (
              <>
                <label>Сиздин атыңыз*</label>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="Сиздин атыңыз"
                  name="fio"
                  ref={register({
                    validate: (fio) => fio && fio.length > 4,
                  })}
                />
                {errors.fio && (
                  <span className={classes.error}>Талааны толтуруңуз</span>
                )}
              </>
            )}
          </div>
          <div className={classes.inputs}>
            {(language == 1 || language == undefined) && (
              <>
                <label>Название организации</label>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="Название организации"
                  name="name"
                />
              </>
            )}
            {language == 2 && (
              <>
                <label>Name of the organization</label>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="Name of the organization*"
                  name="name"
                />
              </>
            )}
            {language == 3 && (
              <>
                <label>Уюм аты</label>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="Уюм аты*"
                  name="name"
                />
              </>
            )}
          </div>
          <div className={classes.inputs}>
            <label>Email*</label>
            {(language == 1 || language == undefined) && (
              <>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="email"
                  name="email"
                  ref={register({
                    required: "Заполните поле",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Неверный адрес электронной почты",
                    },
                  })}
                />
                {errors.email && (
                  <span className={classes.error}>{errors.email.message}</span>
                )}
              </>
            )}
            {language == 2 && (
              <>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="email"
                  name="email"
                  ref={register({
                    required: "Fill in the field",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email",
                    },
                  })}
                />
                {errors.email && (
                  <span className={classes.error}>{errors.email.message}</span>
                )}
              </>
            )}
            {language == 3 && (
              <>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="email"
                  name="email"
                  ref={register({
                    required: "Талааны толтуруңуз",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Электрондук почта жараксыз",
                    },
                  })}
                />
                {errors.email && (
                  <span className={classes.error}>{errors.email.message}</span>
                )}
              </>
            )}
          </div>
          <div className={classes.inputs}>
            {(language == 1 || language == undefined) && (
              <label>Телефон*</label>
            )}
            {language == 2 && <label>Phone number*</label>}
            {language == 3 && <label>Телефон*</label>}
            <input
              type="text"
              className={classes.input}
              placeholder="+996 ___ - __ - __ - __"
              name="phone"
              ref={register({
                validate: (phone) => phone && phone.length > 9,
              })}
            />
            {(language == 1 || language == undefined) && (
              <>
                {errors.phone && (
                  <span className={classes.error}>
                    Ошибка (меньше 9 символов) 
                  </span>
                )}
              </>
            )}
            {language == 2 && (
              <>
                {errors.phone && (
                  <span className={classes.error}>Less than 9 characterss</span>
                )}
              </>
            )}
            {language == 3 && (
              <>
                {errors.phone && (
                  <span className={classes.error}>9 белгиден кем</span>
                )}
              </>
            )}
          </div>
        </div>
        <div className={classes.rightColumn}>
          <div className={classes.inputs}>
            {(language == 1 || language == undefined) && (
              <>
                <label>Ваш вопрос*</label>
                <textarea
                  className={classes.inputTextarea}
                  placeholder="Ваш вопрос"
                  name="question"
                  ref={register({
                    validate: (question) => question && question.length > 0,
                  })}
                />
                {errors.question && (
                  <span className={classes.error}>
                    Это поле обязательное
                  </span>
                )}
              </>
            )}
            {language == 2 && (
              <>
                <label>Your question*</label>
                <textarea
                  className={classes.inputTextarea}
                  placeholder="Your question"
                  name="question"
                  ref={register({
                    validate: (question) => question && question.length > 0,
                  })}
                />
                {errors.question && (
                  <span className={classes.error}>
                    This field is required
                  </span>
                )}
              </>
            )}
            {language == 3 && (
              <>
                <label>Сиздин сурооңуз*</label>
                <textarea
                  className={classes.inputTextarea}
                  placeholder="Сиздин сурооңуз"
                  name="question"

                  ref={register({
                    validate: (question) => question && question.length > 0,
                  })}
                />
                {errors.question && (
                  <span className={classes.error}>
                    Бул талаа милдеттүү түрдө
                  </span>
                )}
              </>
            )}
          </div>
          {(language == 1 || language == undefined) && (
            <button type="submit" className={classes.btn}>
              Отправить
            </button>
          )}
          {language == 2 && (
            <button type="submit" className={classes.btn}>
              Send
            </button>
          )}
          {language == 3 && (
            <button type="submit" className={classes.btn}>
              Жөнөтүү
            </button>
          )}
        </div>
      </form>
      {<RegistrModal />}
    </>
  );
};
export default Form;
