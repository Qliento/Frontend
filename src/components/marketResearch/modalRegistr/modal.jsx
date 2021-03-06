import React from "react";
import Modal from "react-modal";
import classes from "./modal.module.css";
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { errorMesseg } from "../../../redux/actions/marketInreriorPage/marketInterPage";
const customStyles = {
    overlay: {
        position: 'fixed',
        zIndex: 10
      },

};

Modal.setAppElement("#root");

function RegistrModalDemo() {
const dispatch = useDispatch();
  const isModal = useSelector((state) => state.RegistrOrg.isModal);
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem('lang');
const isOpenModal=()=>{
    dispatch(errorMesseg())
}
  return (
    <Modal isOpen={isModal !== "" ? true:false} style={customStyles} className={classes.modal_main}>
      <div className={classes.modal}>
        {(language == 1 || language == undefined) && <span className={classes.title}></span>}
        {language == 2 && <span className={classes.title}>Registration</span>}
        {language == 3 && <span className={classes.title}>Каттоо</span>}
        <div className={classes.content}>
          <img alt="img" src={isModal ===1 ? img1 : img2}/>
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
        <Link  onClick={()=>isOpenModal()}>OK</Link>
      </div>
    </Modal>
  );
}
export default RegistrModalDemo;
