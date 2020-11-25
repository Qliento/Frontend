import classes from "./editPassword.module.css";

import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
import noVis from "./img/noVisibility.png";
import vis from "./img/visibility 1.png";
import img from "./img/Frame 72 (2).png";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux"
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
            <span className={classes.title}>Старый пароль</span>
            <div className={classes.inputWrapper}>
              <input
                name="old_password"
                type={visibility ? "text" : "password"}
                placeholder="Ваш пароль"
                className={classes.input}
                ref={register({
                  validate: (old_password) =>
                    old_password && old_password.length > 6,
                })}
              />

              <img
                alt="img"
                className={classes.imgVisib}
                onClick={() => setVisibility(!visibility)}
                src={visibility ? vis : noVis}
              />
            </div>
            {errors.old_password && (
              <span className={classes.error}>Не корректно велли данные</span>
            )}
          </div>
          <div className={classes.blockInput}>
            <span className={classes.title}>Новый пароль</span>
            <div className={classes.inputWrapper}>
              <input
                name="new_password"
                type={visibility2 ? "text" : "password"}
                placeholder="Придумайте пароль"
                className={classes.input}
                ref={register({
                  validate: (new_password) =>
                    new_password && new_password.length > 6,
                })}
              />
              <img
                alt="img"
                className={classes.imgVisib}
                onClick={() => setVisibility2(!visibility2)}
                src={visibility2 ? vis : noVis}
              />
            </div>
            {errors.new_password && (
              <span className={classes.error}>Не корректно велли данные</span>
            )}
          </div>
          <div className={classes.blockInput}>
            <span className={classes.title}>Повторите пароль</span>
            <div className={classes.inputWrapper}>
              <input
                name="password_check"
                type={visibility ? "text" : "password"}
                placeholder="Повторите пароль"
                className={classes.input}
                ref={register({
                  validate: (password_check) =>
                    password_check && password_check.length > 6,
                })}
              />
              <img
                alt="img"
                className={classes.imgVisib}
                onClick={() => setVisibility3(!visibility3)}
                src={visibility3 ? vis : noVis}
              />
            </div>
            {errors.password_check && (
              <span className={classes.error}>Не корректно велли данные</span>
            )}
          </div>
          <button type="submit" className={classes.btn}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditPassword;
