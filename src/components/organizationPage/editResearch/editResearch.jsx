import React,{useState} from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
import classes from "./edirResearch.module.css";
import img from "./img/Frame 72 (2).png"

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

const EditModal=({edit,changeState})=> {
  // useEffect(() => {
  //   dispatch(errorMesseg());
  // }, []);

const [isModal,SetIsModal]=useState(true)

const updateState=()=>{
  
    SetIsModal(!isModal) ;
  
}
  return (
    <Modal isOpen={edit } style={customStyles}>
      <div className={classes.modal}>
          <div className={classes.blockImg}>
              <img alt="img" className={classes.img} src={img} onClick={()=>changeState(false)}/>
          </div>
          <div className={classes.blockInputs}>
              <span className={classes.title}>Цена</span>
              <input className={classes.input} type="text" placeholder="Цена"/>
          </div>
          <div className={classes.blockInputs}>
              <span className={classes.title}>Скидочная цена</span>
              <input className={classes.input} type="text" placeholder="Цена"/>
          </div>
          <button className={classes.btn} onClick={()=>changeState(false)}>Сохранить</button>

      </div>
    </Modal>
  );
}
export default EditModal;
