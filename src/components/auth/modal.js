import React from "react";
import Modal from "react-modal";
import classes from "./modal.module.css";
import img1 from "./image/1.png"
import img2 from "./image/2.png"
import { Link } from "react-router-dom";
import {authAfter} from '../../redux/actions/actions';
import { useDispatch, useSelector } from "react-redux";

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
  const authPosted = () =>{dispatch(authAfter())};
  const language = useSelector(state => state.langReducer.lang);
  const isModal = useSelector((state) => state.authentication.isModal);
  
  return (
    <Modal isOpen={isModal !== "" ? true:false} style={customStyles}>
      <div className={classes.modal}>
        {language == 1 && <span className={classes.title}>Поздравляю</span>}
        {language == 2 && <span className={classes.title}>Congratulations</span>}
        {language == 3 && <span className={classes.title}>Куттуктайм</span>}
        <div className={classes.content}>
          <img alt="img" src={isModal == 1 ? img1 : img2}/>
          <div className={classes.blockText}>
          <span className={classes.descr}>
              {isModal === 1 && language == 1 && "Вы успешно отправили данные"}
              {isModal === 1 && language == 2 && "You have successfully submitted data"}
              {isModal === 1 && language == 3 && "Вы успешно отправили данные"}
              {isModal === 2 && language == 1 &&  "Произошла ошибка! Попробуйте снова"}
              {isModal === 2 && language == 2 &&  "An error has occurred! Try again"}
              {isModal === 2 && language == 3 &&  "Ката кетти! Кайра аракет кылыңыз"}
          </span>
          </div>
        </div>
        {
                  isModal === 1 &&  
                  <Link to="/" onClick={authPosted} >
                    <span className={classes.ok}>OK</span>
                  </Link>
        }
              {
                  isModal === 2 &&  <div onClick={authPosted} >
                  <span className={classes.ok}>OK</span>
                </div>
              }
        
      </div>
    </Modal>
  );
}
export default RegistrModal;