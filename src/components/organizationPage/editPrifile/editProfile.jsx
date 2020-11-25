import classes from "./editProfile.module.css";

import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";

import img from "./img/Frame 72 (2).png";
import photo from "./img/photo.png";
import { useForm } from "react-hook-form";
import {useDispatch,useSelector} from "react-redux"
import { updateOrganization } from "../../../redux/actions/actions";
import UbdateModal from "./modal/modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "80%",
    width: "40%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const EditProfile = ({  changeModal, onModalPassword, data ,offModal}) => {
  // useEffect(() => {
  //   dispatch(errorMesseg());
  // }, []);
  const dispatch=useDispatch();
  const { handleSubmit, register, errors } = useForm();
  const [isModal, SetIsModal] = useState(true);
  const onSubmit = (values) => {
    console.log(values);
    dispatch(updateOrganization(values));
  };
  return (
    <div  className={classes.modal}>
      <UbdateModal/>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.blockImg}>
          <div className={classes.left}></div>
          <span className={classes.title}>Профиль</span>
          <img
            alt="img"
            className={classes.img}
            src={img}
            onClick={() => offModal()}
          />
        </div>
        <img alt="img" src={photo} className={classes.photo} />
        <div className={classes.userInfo}>
          <span className={classes.name}>
            {data && data.admin_status.name} {data && data.admin_status.surname}
          </span>
          <span className={classes.position}>{data && data.position}</span>
          <span className={classes.companyName}>{data && data.logo}</span>
          <span className={classes.login}>
            {data && data.admin_status.email}
          </span>
        </div>
        <div className={classes.blockInput}>
          <span className={classes.titleInput}>Имя</span>
          <input
            name="name"
            className={classes.input}
            defaultValue={data && data.admin_status.name}
            type="text"
            ref={register({
              validate: (name) => name && name.length > 2,
            })}
          />
          {errors.name && (
            <span className={classes.error}>Не корректно велли данные</span>
          )}
        </div>
        <div className={classes.blockInput}>
          <span className={classes.titleInput}>Фамилия</span>
          <input
            name="surname"
            className={classes.input}
            defaultValue={data && data.admin_status.surname}
            type="text"
            ref={register({
              validate: (surname) => surname && surname.length > 2,
            })}
          />
          {errors.surname && (
            <span className={classes.error}>Не корректно велли данные</span>
          )}
        </div>
        <div className={classes.blockInput}>
          <span className={classes.titleInput}>Должность</span>
         
          <input
            name="position"
            className={classes.input}
            defaultValue={data && data.position}
            type="text"
            ref={register({
              validate: (position) => position && position.length > 4,
            })}
          />
          {errors.position && (
            <span className={classes.error}>Не корректно велли данные</span>
          )}
          
        </div>
       
        <div className={classes.blockInput}>
          <span className={classes.titleInput}>Номер телефона</span>
         
          <input
            name="phone"
            className={classes.input}
            defaultValue={data && data.admin_status.phone_number}
            type="number"
            ref={register({
              validate: (phone) => phone && phone.length > 4,
            })}
          />
          {errors.phone && (
            <span className={classes.error}>Не корректно велли данные</span>
          )}
          
        </div>
        <div className={classes.blockInput}>
          <span className={classes.titleInput}>О компании</span>
          <textarea
            name="about"
            className={classes.input2}
            type="text"
            defaultValue={data && data.about_me}
            ref={register({
              validate: (about) => about && about.length > 4,
            })}
          />
          {errors.about && (
            <span className={classes.error}>Не корректно велли данные</span>
          )}
        </div>
        <button
          className={classes.changeBtn}
          onClick={() => {
            changeModal();
            
          }}
        >
          Сменить пароль
        </button>
        <button type="submit" className={classes.saveBtn}>
          Сохранить
        </button>
      </form>
    </div>
  );
};
export default EditProfile;
