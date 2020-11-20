import React from "react";
import Modal from "react-modal";
import classes from "./modal.module.css";
import {  useSelector } from "react-redux";
import img1 from "./1.png"
import img2 from "./2.png"
import { Link } from "react-router-dom";
import {updateClientAfter} from '../../../../redux/actions/actions';

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


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function RegistrModal() {

  const isModal = useSelector((state) => state.updateClient.isModal);
  return (
    <Modal isOpen={isModal !== "" ? true:false} style={customStyles}>
      <div className={classes.modal}>
        <span className={classes.title}>Поздравляю</span>
        <div className={classes.content}>
          <img alt="img" src={isModal == 1 ? img1 : img2}/>
          <div className={classes.blockText}>
          <span className={classes.descr}>
              {
                  isModal === 1 &&  "Вы успешно изменили данные"
              }
              {
                  isModal === 2 &&  "Произошло ошибка! Попробуйте снова"
              }
           
          </span>
          </div>
        </div>
        {
                  isModal === 1 &&  
                  <Link to="/" onClick={updateClientAfter} >
                    <span className={classes.ok}>OK</span>
                  </Link>
        }
              {
                  isModal === 2 &&  <div onClick={updateClientAfter} >
                  <span className={classes.ok}>OK</span>
                </div>
              }
      </div>
    </Modal>
  );
}
export default RegistrModal;
