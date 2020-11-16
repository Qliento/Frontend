
import classes from "./editProfile.module.css"

import React,{useState} from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";

import img from "./img/Frame 72 (2).png"
import photo from "./img/photo.png"
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height:"80%",
    width:"40%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const EditProfile=({edit,changeState,onModalPassword})=> {
  // useEffect(() => {
  //   dispatch(errorMesseg());
  // }, []);

const [isModal,SetIsModal]=useState(true)


  return (
    <Modal isOpen={edit } style={customStyles}>
      <div className={classes.modal}>
          <div className={classes.blockImg}>
              <div className={classes.left}></div>
              <span className={classes.title}>Профиль</span>
              <img alt="img" className={classes.img} src={img} onClick={()=>changeState(false)}/>
          </div>
          <img alt="img" src={photo} className={classes.photo}/>
          <div className={classes.userInfo}>
              <span className={classes.name}>Турдубеков Акназар</span>
              <span className={classes.position}>Директор</span>
              <span className={classes.companyName}>ОсОО “Бимед Фарм”</span>
              <span className={classes.login}>aknazar_t@gmail.com</span>
          </div>
          <div className={classes.blockInput}>
              <span className={classes.titleInput}>Имя</span>
              <input className={classes.input} value="Акназар"/>
          </div>
          <div className={classes.blockInput}>
              <span className={classes.titleInput}>Фамилия</span>
              <input className={classes.input} value="Турдубеков"/>
          </div>
          <div className={classes.blockInput}>
              <span className={classes.titleInput}>Номер телефона</span>
              <input className={classes.input} value="+996 555 444 222"/>
          </div>
          <div className={classes.blockInput}>
              <span className={classes.titleInput}>О компании</span>
              <textarea className={classes.input2} />
          </div>
          <button className={classes.changeBtn} onClick={()=>{changeState(false);onModalPassword(true)}} >Сменить пароль</button>
          <button className={classes.saveBtn} onClick={()=>changeState(false)}>Сохранить</button>



      </div>
    </Modal>
  );
}
export default EditProfile;
