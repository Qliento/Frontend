import classes from "./editPassword.module.css";

import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
import noVis from "./img/noVisibility.png";
import vis from "./img/visibility 1.png";
import img from "./img/Frame 72 (2).png";

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

const EditPassword = ({ edit, changeState2 }) => {
  // useEffect(() => {
  //   dispatch(errorMesseg());
  // }, []);

  const [isModal, SetIsModal] = useState(true);

  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [visibility3, setVisibility3] = useState(false);
  return (
    <Modal isOpen={edit} style={customStyles}>
      <div className={classes.modal}>
        <div className={classes.blockImg}>
          <img
            alt="img"
            className={classes.img}
            src={img}
            onClick={() => changeState2(false)}
          />
        </div>
        <div className={classes.content}>
          <div className={classes.blockInput}>
            <span className={classes.title}>Старый пароль</span>
            <div className={classes.inputWrapper}>
              <input
                type={visibility ? "text" : "password"}
                placeholder="Ваш пароль"
                className={classes.input}
              />
              <img
                alt="img"
                className={classes.imgVisib}
                onClick={() => setVisibility(!visibility)}
                src={visibility ? vis : noVis}
              />
            </div>
          </div>
          <div className={classes.blockInput}>
            <span className={classes.title}>Новый пароль</span>
            <div className={classes.inputWrapper}>
              <input
                type={visibility2 ? "text" : "password"}
                placeholder="Придумайте пароль"
                className={classes.input}
              />
              <img
                alt="img"
                className={classes.imgVisib}
                onClick={() => setVisibility2(!visibility2)}
                src={visibility2 ? vis : noVis}
              />
            </div>
          </div>
          <div className={classes.blockInput}>
            <span className={classes.title}>Повторите пароль</span>
            <div className={classes.inputWrapper}>
              <input
                type={visibility ? "text" : "password"}
                placeholder="Повторите пароль"
                className={classes.input}
              />
              <img
                alt="img"
                className={classes.imgVisib}
                onClick={() => setVisibility3(!visibility3)}
                src={visibility3 ? vis : noVis}
              />
            </div>
          </div>
          <button className={classes.btn} onClick={() => changeState2(false)}>
            Сохранить
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default EditPassword;
