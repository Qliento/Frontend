import React from 'react';
import st from './modal.module.css';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {updateClient} from '../../../redux/actions/actions';
import Modal1 from "./modal_window/modal";
import noPhoto from '../header/img/noPhoto.jpg';

const Modal = ({offModal, changeModal, data}) =>{
    const { handleSubmit, register, errors } = useForm();
    const language = useSelector(state => state.langReducer.lang)
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
                        {language === 1 && <h3>Профиль</h3>}
                        {language === 2 && <h3>Profile</h3>}
                        {language === 3 && <h3>Профиль</h3>}
                        <div className={st.profile_img}>
                            <img src={noPhoto} alt="3
                            img"></img>
                        </div>
                        <h2>{data && data.surname + ' ' + data.name}</h2>
                        <span>{data && data.email}</span>
                    </div>
                    <form className={st.form}>
                        {language === 1 && <>
                          <label>Имя</label>
                        <input defaultValue={data && data.name} name="name" placeholder="Ваше имя"
                          ref={register({
                            validate: (name) => name && name.length > 2,
                          })}></input>
                          {errors.name && (
                          <span className={st.error}>Заполните поле</span>
                        )}
                        <label>Фамилия</label>
                        <input defaultValue={data && data.surname} name="surname" placeholder="Ваша фамилия"
                          ref={register({
                            validate: (surname) => surname && surname.length > 2,
                          })}></input>
                          {errors.surname && (
                          <span className={st.error}>Заполните поле</span>
                        )}
                        </>}
                        {language === 2 && <>
                          <label>Name</label>
                        <input defaultValue={data && data.name} name="name" placeholder="Name"
                          ref={register({
                            validate: (name) => name && name.length > 2,
                          })}></input>
                          {errors.name && (
                          <span className={st.error}>Заполните поле</span>
                        )}
                        <label>Last name</label>
                        <input defaultValue={data && data.surname} name="surname" placeholder="Last name"
                          ref={register({
                            validate: (surname) => surname && surname.length > 2,
                          })}></input>
                          {errors.surname && (
                          <span className={st.error}>Заполните поле</span>
                        )}
                        </>}
                        {language === 3 && <>
                          <label>Сиздин атыңыз</label>
                        <input defaultValue={data && data.name} name="name" placeholder="Сиздин атыңыз"
                          ref={register({
                            validate: (name) => name && name.length > 2,
                          })}></input>
                          {errors.name && (
                          <span className={st.error}>Заполните поле</span>
                        )}
                        <label>Сиздин фамилияңыз</label>
                        <input defaultValue={data && data.surname} name="surname" placeholder="Сиздин фамилияңыз"
                          ref={register({
                            validate: (surname) => surname && surname.length > 2,
                          })}></input>
                          {errors.surname && (
                          <span className={st.error}>Заполните поле</span>
                        )}
                        </>}
                {language === 1 && <label>Номер телефона</label>}
                {language === 2 && <label>Phone number</label>}
                {language === 3 && <label>Телефон номуру</label>}
                <input defaultValue={data && data.phone_number} name="phone_number"
              placeholder="+996 (___) __ - __ - __"
              type="text"
              ref={register({
                validate: (phone_number) => phone_number && phone_number.length > 6,
              })}></input>
              {errors.phone_number && (<>
                {language === 1 && <span className={st.error}>Более 6-ти символов</span>}
                {language === 2 && <span className={st.error}>Less than 6 characters</span>}
                {language === 3 && <span className={st.error}>6 белгиден кем</span>}
              </>
              
            )}
                        {language === 1 &&<><button className={st.changePass} onClick={changeModal}>Сменить пароль</button>
                        <button onClick={handleSubmit(onSubmit)}>Сохранить</button></>}
                        {language === 2 &&<><button className={st.changePass} onClick={changeModal}>Change password</button>
                        <button onClick={handleSubmit(onSubmit)}>Save</button></>}
                        {language === 3 &&<><button className={st.changePass} onClick={changeModal}>Сыр сөздү өзгөртүү</button>
                        <button onClick={handleSubmit(onSubmit)}>Cfrnjj</button></>}
                    </form>
            </div>
        </div>
    )
}

export default Modal;