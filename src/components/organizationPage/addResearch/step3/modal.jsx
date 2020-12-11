import React from "react";
import Modal from "react-modal";
import classes from "./step3.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./modal.scss";
import img1 from "./img/1.png";
import img2 from "./img/2.png";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Spiner } from "../../../../redux/actions/organizationPage/action";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "auto",
    width: "40%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function PostResearchModal() {
  const isModal = useSelector((state) => state.ResearchList.isModal);
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem("lang");
  const dispatch = useDispatch();
  const secces = () => {dispatch(Spiner(""))};

  return (
    <Modal isOpen={isModal !== "" ? true : false} style={customStyles}>
      {isModal == 0 ? (
        <div className={classes.modal1}>
          <CircularIndeterminate />
        </div>
      ) : (
        <></>
      )}
      {isModal == 1 ? (
        <div className={classes.modalSeccess}>
          <div className={classes.content_modal}>
            <img alt="img" src={img1} />
            <span>Исследование оформленно!!!</span>
          </div>
          <Link to="/organization-page" className={classes.link} onClick={secces}>
            <span className={classes.ok}>OK</span>
          </Link>
        </div>
      ) : (
        <></>
      )}
    {isModal == 2 ? (
        <div className={classes.modalSeccess}>
          <div className={classes.content_modal}>
            <img alt="img" src={img2} />
            <span>Произошла ошибка</span>
          </div>
          <Link to="/organization-page" className={classes.link} onClick={secces}>
            <span className={classes.ok}>OK</span>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </Modal>
  );
}
export default PostResearchModal;

function CircularIndeterminate() {
  return (
    <div className="root">
      <CircularProgress color="secondary" />
    </div>
  );
}
