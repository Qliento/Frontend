import React from 'react';
import st from './modal.module.css';
import photo from '../header/img/photo.png';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Modal = ({offModal, changeModal, data}) =>{

    return(
        <div className={st.modal}>
            <div className={st.modal_content}>
                <span className={st.strike} onClick={offModal}></span>
                    <div className={st.profile}>
                        <h3>Профиль</h3>
                        <div className={st.profile_img}>
                            <img src={photo} alt="3
                            img"></img>
                        </div>
                        <h2>{data && data.admin_status.surname + ' ' + data.admin_status.name}</h2>
                        <span>{data && data.admin_status.email}</span>
                    </div>
                    <form className={st.form}>
                        <label>Имя</label>
                        <input defaultValue={data && data.admin_status.name}></input>
                        <label>Фамилия</label>
                        <input defaultValue={data && data.admin_status.surname}></input>
                        <label>Номер телефона</label>
                        <input defaultValue={data && data.admin_status.phone_number}></input>
                        <button className={st.changePass} onClick={changeModal}>Сменить пароль</button>
                        <button>Сохранить</button>
                    </form>
            </div>
        </div>
    )
}

export default Modal;