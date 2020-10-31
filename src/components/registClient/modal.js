import React from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
import classes from "./registClient.module.css";
import {  useSelector } from "react-redux";
// import { errorMesseg } from "../../redux/actions/registrationOrg/registrationOrg";
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

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function RegistrModal() {
  // useEffect(() => {
  //   dispatch(errorMesseg());
  // }, []);

  // const dispatch = useDispatch();
  const isModal = useSelector((state) => state.RegistrationClient.isModal);
  console.log(isModal);
  return (
    <Modal isOpen={isModal !== "" ? true:false} style={customStyles}>
      <div className={classes.modal}>
        <span className={classes.title}>Регистрация</span>
        <div className={classes.content}>
          <img alt="img" src={isModal ===1 ? img1 : img2}/>
          <div className={classes.blockText}>
          <span className={classes.descr}>
              {
                  isModal ===1 ?  "Прошла успешно. На почту отправлена ссылка для подтверждения"
                  : "Ошибка регистрации"
              }
           
          </span>
          </div>
        </div>
        <Link to="/">OK</Link>
      </div>
    </Modal>
  );
}
export default RegistrModal;
