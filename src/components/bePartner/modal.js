import React from "react";
import Modal from "react-modal";
import classes from "./modal.module.css";
import {  useSelector } from "react-redux";
import img1 from "./1.png"
import img2 from "./2.png"
import { Link } from "react-router-dom";
import { afterPosted } from '../../redux/reducers/bePartner/bePartner';
import { useDispatch } from "react-redux";

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
  const afterPosted1 = () =>{
    dispatch(afterPosted())
}


  const isModal = useSelector((state) => state.bePartnerReducer.isModal);
  return (
    <Modal isOpen={isModal !== "" ? true:false} style={customStyles}>
      <div className={classes.modal}>
        <span className={classes.title}>Поздравляю</span>
        <div className={classes.content}>
          <img alt="img" src={isModal == 1 ? img1 : img2}/>
          <div className={classes.blockText}>
          <span className={classes.descr}>
              {
                  isModal === 1 &&  "Вы успешно отправили данные"
              }
              {
                  isModal === 2 &&  "Произошло ошибка! Попробуйте снова"
              }
           
          </span>
          </div>
        </div>
        <Link to="/" onClick={afterPosted1} >
          <span className={classes.ok}>OK</span>
          </Link>
      </div>
    </Modal>
  );
}
export default RegistrModal;
