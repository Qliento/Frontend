import classes from "./editProfile.module.css";

import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";

import img from "./img/Frame 72 (2).png";
import photo from "./img/photo.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateOrganization } from "../../../redux/actions/actions";
import UbdateModal from "./modal/modal";
import noPhoto from "./img/noPhoto.jpg"

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

const EditProfile = ({ changeModal, onModalPassword, data, offModal }) => {
  // useEffect(() => {
  //   dispatch(errorMesseg());
  // }, []);
  const dispatch = useDispatch();
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem("lang");
  const { handleSubmit, register, errors } = useForm();
  const [isModal, SetIsModal] = useState(true);
  const [imageUrl,setImageUrl]=useState("")
  const [file, setFile] = useState([]);
  const [image, setImage] = useState('');
  const onSubmit = (values) => {
    let formClient = document.getElementById('formOrganization')
    let form = new FormData(formClient);
    form.append('photo', image);
    dispatch(updateOrganization(form));
  };
  const setProfile = (e) => {
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFile(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className={classes.modal}>
      <UbdateModal />
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)} id="formOrganization">
        <div className={classes.blockImg}>
          <div className={classes.left}></div>
          {(language == 1 || language == undefined) && (
            <span className={classes.title}>Профиль</span>
          )}
          {language == 2 && <span className={classes.title}>Profile</span>}
          {language == 3 && <span className={classes.title}>Профиль</span>}
          <img
            alt="img"
            className={classes.img}
            src={img}
            onClick={() => offModal()}
          />
        </div>
        <div className={classes.profile_img}>
          <label for="file">
            <img
              src={
                data.admin_status.photo
                  ? "https://qliento.com" + data.admin_status.photo
                  : file == ""
                  ? noPhoto
                  : file
              }
              alt="img"
              className={classes.img_photo}
            ></img>
          </label>
          <input
            type="file"
            accept="image/*"
            id="file"
            className={classes.input_photo}
            onChange={setProfile}
          ></input>
        </div>

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
          {(language == 1 || language == undefined) && (
            <span className={classes.titleInput}>Имя</span>
          )}
          {language == 2 && <span className={classes.titleInput}>Name</span>}
          {language == 3 && (
            <span className={classes.titleInput}>Сиздин атыңыз</span>
          )}
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
            <>
              {(language == 1 || language == undefined) && (
                <span className={classes.error}>Не корректно велли данные</span>
              )}
              {language == 2 && (
                <span className={classes.error}>Data incorrectly entered</span>
              )}
              {language == 3 && (
                <span className={classes.error}>
                  Маалыматтар туура эмес киргизилген
                </span>
              )}
            </>
          )}
        </div>
        <div className={classes.blockInput}>
          {(language == 1 || language == undefined) && (
            <span className={classes.titleInput}>Фамилия</span>
          )}
          {language == 2 && <span className={classes.titleInput}>Surname</span>}
          {language == 3 && (
            <span className={classes.titleInput}>Сиздин фамилияңыз</span>
          )}
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
            <>
              {(language == 1 || language == undefined) && (
                <span className={classes.error}>Не корректно велли данные</span>
              )}
              {language == 2 && (
                <span className={classes.error}>Data incorrectly entered</span>
              )}
              {language == 3 && (
                <span className={classes.error}>
                  Маалыматтар туура эмес киргизилген
                </span>
              )}
            </>
          )}
        </div>
        <div className={classes.blockInput}>
          {(language == 1 || language == undefined) && (
            <span className={classes.titleInput}>Должность</span>
          )}
          {language == 2 && (
            <span className={classes.titleInput}>Position</span>
          )}
          {language == 3 && <span className={classes.titleInput}>Кызмат</span>}
          <input
            name="position"
            className={classes.input}
            defaultValue={data && data.position}
            type="text"
            ref={register}
          />
          {errors.position && (
            <>
              {(language == 1 || language == undefined) && (
                <span className={classes.error}>Не корректно велли данные</span>
              )}
              {language == 2 && (
                <span className={classes.error}>Data incorrectly entered</span>
              )}
              {language == 3 && (
                <span className={classes.error}>
                  Маалыматтар туура эмес киргизилген
                </span>
              )}
            </>
          )}
        </div>

        <div className={classes.blockInput}>
          {(language == 1 || language == undefined) && (
            <span className={classes.titleInput}>Номер телефона</span>
          )}
          {language == 2 && (
            <span className={classes.titleInput}>Phone number</span>
          )}
          {language == 3 && (
            <span className={classes.titleInput}>Телефон номуру</span>
          )}
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
            <>
              {(language == 1 || language == undefined) && (
                <span className={classes.error}>Не корректно велли данные</span>
              )}
              {language == 2 && (
                <span className={classes.error}>Data incorrectly entered</span>
              )}
              {language == 3 && (
                <span className={classes.error}>
                  Маалыматтар туура эмес киргизилген
                </span>
              )}
            </>
          )}
        </div>
        <div className={classes.blockInput}>
          {(language == 1 || language == undefined) && (
            <span className={classes.titleInput}>О компании</span>
          )}
          {language == 2 && (
            <span className={classes.titleInput}>About the company</span>
          )}
          {language == 3 && (
            <span className={classes.titleInput}>Компания жөнүндө</span>
          )}
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
            <>
              {(language == 1 || language == undefined) && (
                <span className={classes.error}>Не корректно велли данные</span>
              )}
              {language == 2 && (
                <span className={classes.error}>Data incorrectly entered</span>
              )}
              {language == 3 && (
                <span className={classes.error}>
                  Маалыматтар туура эмес киргизилген
                </span>
              )}
            </>
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
        {(language == 1 || language == undefined) && (
          <button type="submit" className={classes.saveBtn}>
            Сохранить
          </button>
        )}
        {language == 2 && (
          <button type="submit" className={classes.saveBtn}>
            Save
          </button>
        )}
        {language == 3 && (
          <button type="submit" className={classes.saveBtn}>
            Сактоо
          </button>
        )}
      </form>
    </div>
  );
};
export default EditProfile;
