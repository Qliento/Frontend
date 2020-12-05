import React, { useState } from "react";
import Modal from "react-modal";
import classes from "./edirResearch.module.css";
import { useSelector } from "react-redux";
import krest from "./img/Frame 72 (2).png";
import galka from "./img/Group 66.png";

const customStyles = {
  overlay: {
    position: "fixed",
    zIndex: 10,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "auto",
    width: "40%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "fixed",
    zIndex: "10",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function ModalChangeResearch() {
  const [edit, setedit] = useState(true);
  const isModal = useSelector((state) => state.ResearchList.ubdateResearch);
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem('lang');

  return (
    <Modal isOpen={isModal && edit} style={customStyles}>
      <div className={classes.modal}>
        <div className={classes.blockTop}>
          <img
            alt="img"
            src={krest}
            className={classes.krestik}
            onClick={() => setedit(false)}
          />
        </div>
        <img alt="img" src={galka} className={classes.galka1} />
        {(language == 1 || language == undefined) && <span className={classes.text}>Скидочная цена </span>}
        {language == 2 && <span className={classes.text}>Discount price </span>}
        {language == 3 && <span className={classes.text}>Aрзандатылган баа </span>}
        {(language == 1 || language == undefined) && <span className={classes.text}>отправлена на рассмотрение.</span>}
        {language == 2 && <span className={classes.text}>sent for review.</span>}
        {language == 3 && <span className={classes.text}>кароого жиберилген.</span>}
      </div>
    </Modal>
  );
}
export default ModalChangeResearch;
