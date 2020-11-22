import React from 'react';
import st from './modal.module.css';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {updateClient} from '../../../redux/actions/actions';
import Modal1 from "./modal_window/modal";
import noPhoto from '../header/img/noPhoto.jpg';

const Modal = ({offModal, changeModal, data}) =>{
    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (values) =>{
        dispatch(updateClient(values))
    }

    return(
        <div className={st.modal}>
            <Modal1 />
            <div className={st.modal_content}>
                <span className={st.strike} onClick={offModal}></span>
                    <div className={st.profile}>
                        <h3>Профиль</h3>
                        <div className={st.profile_img}>
                            <img src={noPhoto} alt="3
                            img"></img>
                        </div>
                        <h2>{data && data.surname + ' ' + data.name}</h2>
                        <span>{data && data.email}</span>
                    </div>
                    <form className={st.form}>
                        <label>Имя</label>
                        <input defaultValue={data && data.name} name="name"
              placeholder="Ваше имя"
              type="text"
              ref={register({
                validate: (name) => name && name.length > 2,
              })}></input>
              {errors.name && (
              <span className={st.error}>Заполните поле</span>
            )}
                        <label>Фамилия</label>
                        <input defaultValue={data && data.surname} name="surname"
              placeholder="Ваша фамилия"
              type="text"
              ref={register({
                validate: (surname) => surname && surname.length > 2,
              })}></input>
              {errors.surname && (
              <span className={st.error}>Заполните поле</span>
            )}
                        <label>Номер телефона</label>
                        <input defaultValue={data && data.phone_number} name="phone_number"
              placeholder="+996 (___) __ - __ - __"
              type="text"
              ref={register({
                validate: (phone_number) => phone_number && phone_number.length > 6,
              })}></input>
              {errors.phone_number && (
              <span className={st.error}>Более 6-ти символов</span>
            )}
                        <button className={st.changePass} onClick={changeModal}>Сменить пароль</button>
                        <button onClick={handleSubmit(onSubmit)}>Сохранить</button>
                    </form>
            </div>
        </div>
    )
}

export default Modal;