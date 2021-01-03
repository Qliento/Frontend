import classes from "./editPassword.module.css";

import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
import noVis from "./img/noVisibility.png";
import vis from "./img/visibility 1.png";
import img from "./img/Frame 72 (2).png";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux"
import { changePassword } from "../../../redux/actions/actions";
import ModalPassword from "./modal/modal2";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "80%",
    width: "40%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const EditPassword = ({ edit, changeState2,offModal }) => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(errorMesseg());
  // }, []);changePassword
  const [isModal, SetIsModal] = useState(true);
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem('lang');
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [visibility3, setVisibility3] = useState(false);

  const onSubmit = (values) => {
    console.log(values);
    dispatch(changePassword(values))
   
  };
  return (
    <div  className={classes.changePassword}>
      <ModalPassword/>
      <div className={classes.modal}>
        <div className={classes.blockImg}>
          <img
            alt="img"
            className={classes.img}
            src={img}
            onClick={() =>offModal()}
          />
        </div>
        <form className={classes.content} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.blockInput}>
            {(language == 1 || language == undefined) && <span className={classes.title}>Старый пароль</span>}
            {language == 2 && <span className={classes.title}>Old password</span>}
            {language == 3 && <span className={classes.title}>Эски сыр</span>}
            <div className={classes.inputWrapper}>
              {(language == 1 || language == undefined) && <input name="old_password" type={visibility ? "text" : "password"} placeholder="Ваш пароль" className={classes.input}
                ref={register({
                  validate: (old_password) =>
                    old_password && old_password.length > 6,
                })}
              />}
              {language == 2 && <input name="old_password" type={visibility ? "text" : "password"} placeholder="Old password" className={classes.input}
                ref={register({
                  validate: (old_password) =>
                    old_password && old_password.length > 6,
                })}
              />}
              {language == 3 && <input name="old_password" type={visibility ? "text" : "password"} placeholder="Сыр соз" className={classes.input}
                ref={register({
                  validate: (old_password) =>
                    old_password && old_password.length > 6,
                })}
              />}
              <img
                alt="img"
                className={classes.imgVisib}
                onClick={() => setVisibility(!visibility)}
                src={visibility ? vis : noVis}
              />
            </div>
            {errors.old_password && (<>
              {(language == 1 || language == undefined) && <span className={classes.error}>Не корректно ввели данные</span>}
              {language == 2 && <span className={classes.error}>Data incorrectly entered</span>}
              {language == 3 && <span className={classes.error}>Маалыматтар туура эмес киргизилген</span>}
            </>)}
          </div>
          <div className={classes.blockInput}>
            {(language == 1 || language == undefined) && <span className={classes.title}>Новый пароль</span>}
            {language == 2 && <span className={classes.title}>New password</span>}
            {language == 3 && <span className={classes.title}>Жаны сыр соз</span>}
            <div className={classes.inputWrapper}>
              {(language == 1 || language == undefined) && <input name="new_password" type={visibility2 ? "text" : "password"} placeholder="Придумайте пароль"
                className={classes.input}
                ref={register({
                  validate: (new_password) =>
                    new_password && new_password.length > 6,
                })}
              />}
              {language == 2 && <input name="new_password" type={visibility2 ? "text" : "password"} placeholder="Придумайте пароль"
                className={classes.input}
                ref={register({
                  validate: (new_password) =>
                    new_password && new_password.length > 6,
                })}
              />}
              {language == 3 && <input name="new_password" type={visibility2 ? "text" : "password"} placeholder="Придумайте пароль"
                className={classes.input}
                ref={register({
                  validate: (new_password) =>
                    new_password && new_password.length > 6,
                })}
              />}
              <img
                alt="img"
                className={classes.imgVisib}
                onClick={() => setVisibility2(!visibility2)}
                src={visibility2 ? vis : noVis}
              />
            </div>
            {errors.new_password && (<>
              {(language == 1 || language == undefined) && <span className={classes.error}>Не корректно ввели данные</span>}
              {language == 2 && <span className={classes.error}>Data incorrectly entered</span>}
              {language == 3 && <span className={classes.error}>Маалыматтар туура эмес киргизилген</span>}
            </>)}
          </div>
          <div className={classes.blockInput}>
            {(language == 1 || language == undefined) &&<span className={classes.title}>Повторите пароль</span>}
            {language == 2 &&<span className={classes.title}>Repeat password</span>}
            {language == 3 &&<span className={classes.title}>Сыр соз</span>}
            <div className={classes.inputWrapper}>
             {(language == 1 || language == undefined) && <input name="password_check" type={visibility3 ? "text" : "password"}  placeholder="Повторите пароль"
                className={classes.input}
                ref={register({
                  validate: (password_check) =>
                    password_check && password_check.length > 8,
                })}
              />}
               {language == 2 && <input name="password_check" type={visibility3 ? "text" : "password"}  placeholder="Repeat password"
                className={classes.input}
                ref={register({
                  validate: (password_check) =>
                    password_check && password_check.length > 8,
                })}
              />}
               {language == 3 && <input name="password_check" type={visibility3 ? "text" : "password"}  placeholder="Сыр соз"
                className={classes.input}
                ref={register({
                  validate: (password_check) =>
                    password_check && password_check.length > 8,
                })}
              />}
              <img
                alt="img"
                className={classes.imgVisib}
                onClick={() => setVisibility3(!visibility3)}
                src={visibility3 ? vis : noVis}
              />
            </div>
            {errors.password_check && (<>
              {(language == 1 || language == undefined) && <span className={classes.error}>Не корректно ввели данные</span>}
              {language == 2 && <span className={classes.error}>Data incorrectly entered</span>}
              {language == 3 && <span className={classes.error}>Маалыматтар туура эмес киргизилген</span>}
            </>)}
          </div>
          {(language == 1 || language == undefined) && <button type="submit" className={classes.btn}>Сохранить</button>}
          {language == 2 && <button type="submit" className={classes.btn}>Save</button>}
          {language == 3 && <button type="submit" className={classes.btn}>Сактоо</button>}
        </form>
      </div>
    </div>
  );
};
export default EditPassword;
