import React from "react";
import Modal from "react-modal";
import classes from "./form.module.css";
import {  useSelector } from "react-redux";
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { seccesPost } from "../../../redux/actions/getQuestion/getQuestion";

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
  const dispatch = useDispatch();

const registSuccess=()=>{
    dispatch(seccesPost())
}

  const isModal = useSelector((state) => state.ListQuestion.triger);
  // const language = useSelector(state => state.langReducer.lang);
  const language = localStorage.getItem('lang');
  return (
    <Modal isOpen={isModal !== "" ? true:false} style={customStyles}>
      <div className={classes.modal}>
        {(language == 1 || language == undefined) && <span className={classes.title}></span>}
        {language == 2 && <span className={classes.title}>Registration</span>}
        {language == 3 && <span className={classes.title}>Каттоо</span>}
        <div className={classes.content}>
          <img alt="img" src={isModal == 1 ? img1 : img2}/>
          <div className={classes.blockText}>
          <span className={classes.descr}>
              {(language == 1 || language == undefined) && isModal === 1 &&  "Вопрос отправлен!! Ожидайте ответа!"}
              {language == 2 && isModal === 1 &&  "You have successfully submitted data"}
              {language == 3 && isModal === 1 &&  "Дайындарды ийгиликтүү тапшырдыңыз"}
              {(language == 1 || language == undefined) && isModal === 2 &&  "Произошла ошибка попробуйте снова"}
              {language == 2 && isModal === 2 &&  "An error has occurred! Try again"}
              {language == 3 && isModal === 2 &&  "Ката кетти! Кайра аракет кылыңыз"}
          </span>
          </div>
        </div>
        {
                  isModal === 1 &&  
                  <Link to="/" onClick={registSuccess} >
                    <span className={classes.ok}>OK</span>
                  </Link>
        }
              {
                  isModal === 2 &&  <div onClick={registSuccess} >
                  <span className={classes.ok}>OK</span>
                </div>
              }
      </div>
    </Modal>
  );
}
export default RegistrModal;
