import React from "react";
import Modal from "react-modal";
import classes from "./modal.module.css";
import {  useSelector } from "react-redux";
import img1 from "./1.png"
import img2 from "./2.png"
import { Link } from "react-router-dom";
import {updateClientAfter} from '../../../../redux/actions/actions';
import { useDispatch } from "react-redux";

const customStyles = {
  overlay: {
    position: 'fixed',
    zIndex: 10
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height:"auto",
    width:"40%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: 'fixed',
    zIndex: '10'
  },
};


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function UbdateModal() {
  const dispatch = useDispatch();
  const updateClientAfter1 = () =>{
    dispatch(updateClientAfter())
}

  const isModal = useSelector((state) => state.updateClient.isModal);
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem('lang');
  return (
    <Modal isOpen={isModal !== "" ? true:false} style={customStyles}>
      <div className={classes.modal}>
        {(language == 1 || language == undefined) && <span className={classes.title}>Поздравляю</span>}
        {language == 2 && <span className={classes.title}>Congratulations</span>}
        {language == 3 && <span className={classes.title}>Куттуктайм</span>}
        <div className={classes.content}>
          <img alt="img" src={isModal == 1 ? img1 : img2}/>
          <div className={classes.blockText}>
          <span className={classes.descr}>
              {isModal === 1,(language == 1 || language == undefined) && "Вы успешно изменили данные"}
              {isModal === 1,language == 2 && "You have successfully edited data"}
              {isModal === 1,language == 3 && "Вы успешно отправили данныеДайындарды ийгиликтүү тапшырдыңыз"}
              {isModal === 2,(language == 1 || language == undefined) &&  "Произошла ошибка! Попробуйте снова"}
              {isModal === 2,language == 2 &&  "An error has occurred! Try again"}
              {isModal === 2,language == 3 &&  "Ката кетти! Кайра аракет кылыңыз"}
          </span>
          </div>
        </div>
        {
                  isModal === 1 &&  
                  <Link to="/" onClick={updateClientAfter1} >
                    <span className={classes.ok}>OK</span>
                  </Link>
        }
              {
                  isModal === 2 &&  <div onClick={updateClientAfter1} >
                  <span className={classes.ok}>OK</span>
                </div>
              }
      </div>
    </Modal>
  );
}
export default UbdateModal;
