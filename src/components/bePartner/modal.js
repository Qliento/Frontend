import React from "react";
import Modal from "react-modal";
import classes from "./modal.module.css";
import img1 from "./1.png"
import img2 from "./2.png"
import { Link } from "react-router-dom";
import { afterPosted } from '../../redux/reducers/bePartner/bePartner';
import { useDispatch, useSelector } from "react-redux";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     height:"auto",
//     width:"100%",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };


Modal.setAppElement("#root");

function RegistrModal() {
  
  const dispatch = useDispatch();
  const afterPosted1 = () =>{
    dispatch(afterPosted())
}
  const isModal = useSelector((state) => state.bePartnerReducer.isModal);
  // const language = useSelector(state => state.langReducer.lang);
  const language = localStorage.getItem('lang');

  return (
    <Modal isOpen={isModal !== "" ? true:false} className={classes.modal_main}>
      <div className={classes.modal}>
        {isModal ==1 && (language == 1 || language == undefined) && <span className={classes.title}>Поздравляю</span>}
        {isModal == 1 && language == 2 && <span className={classes.title}>Congratulations</span>}
        {isModal == 1 && language == 3 && <span className={classes.title}>Куттуктайм</span>}
        <div className={classes.content}>
          <img alt="img" src={isModal == 1 ? img1 : img2}/>
          <div className={classes.blockText}>
          <span className={classes.descr}>
              {isModal == 1 && (language == 1 || language == undefined) && "Вы успешно отправили данные"}
              {isModal == 1 && language == 2 && "You have successfully submitted data"}
              {isModal == 1 && language == 3 && "Дайындарды ийгиликтүү тапшырдыңыз"}
              {isModal == 2 && (language == 1 || language == undefined) &&  "Произошла ошибка! Попробуйте снова"}
              {isModal == 2 && language == 2 &&  "An error has occurred! Try again"}
              {isModal == 2 && language == 3 &&  "Ката кетти! Кайра аракет кылыңыз"}
          </span>
          </div>
        </div>
        {
                  isModal === 1 &&  
                  <Link to="/" onClick={afterPosted1} >
                    <span className={classes.ok}>OK</span>
                  </Link>
        }
              {
                  isModal === 2 &&  <div onClick={afterPosted1} >
                  <span className={classes.ok}>OK</span>
                </div>
              }
      </div>
    </Modal>
  );
}
export default RegistrModal;
