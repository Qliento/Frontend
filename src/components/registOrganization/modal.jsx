import React from "react";
import Modal from "react-modal";
import classes from '../bePartner/modal.module.css';
import {  useSelector } from "react-redux";
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import { Link } from "react-router-dom";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height:"auto",
    width:"40%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function RegistrModal() {

  const isModal = useSelector((state) => state.RegistrOrg.isModal);
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem('lang');

  return (
    <Modal isOpen={isModal !== "" ? true:false} className={classes.modal_main}>
      <div className={classes.modal}>
        {isModal == 1 && (language == 1 || language == undefined) && <span className={classes.title}>Регистрация</span>}
        {isModal == 1 && language == 2 && <span className={classes.title}>Registration</span>}
        {isModal == 1 && language == 3 && <span className={classes.title}>Каттоо</span>}
        <div className={classes.content}>
          <img alt="img" src={isModal == 1 ? img1 : img2}/>
          <div className={classes.blockText}>
          <span className={classes.descr}>
              {(language == 1 || language == undefined) && isModal === 1 &&  "Прошла успешно. На почту отправлена ссылка для подтверждения"}
              {language == 2 && isModal === 1 &&  "Was successful. A confirmation link has been sent to the mail"}
              {language == 3 && isModal === 1 &&  "Ийгиликтүү болду. Почтага ырастоочу шилтеме жөнөтүлдү"}
              {(language == 1 || language == undefined) && isModal === 2 &&  "Произошла ошибка попробуйте снова"}
              {language == 2 && isModal === 2 &&  "An error has occurred! Try again"}
              {language == 3 && isModal === 2 &&  "Ката кетти! Кайра аракет кылыңыз"}
          </span>
          </div>
        </div>
        {
                  isModal === 1 &&  
                  <Link to="/"  >
                    <span className={classes.ok}>OK</span>
                  </Link>
        }
              {
                  isModal === 2 &&  <div  >
                  <span className={classes.ok}>OK</span>
                </div>
              }
      </div>
    </Modal>
  );
}
export default RegistrModal;
