import React, {useState} from 'react';
import st from './modal.module.css';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {changePassword} from '../../../redux/actions/actions';
import Modal from './modal_window_change/modal';

const ModalChange = ({offModal}) =>{
    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();
    const[err,setErr]=useState(false);
    const language = useSelector(state => state.langReducer.lang)

    const onSubmit = (values) =>{
        if(values.password_check != values.new_password){
          setErr(true)
        }
        else{
            setErr(false);
            dispatch(changePassword(values));
        }
      } 

    return(
        <div className={st.modal}>
            <Modal />
            <div className={st.modal_content}>
                <span className={st.strike} onClick={offModal}></span>
                    <form className={st.form}>
                        {language === 1 &&<>
                            <label>Старый пароль</label>
                        <input name="old_password" placeholder="Ваш пароль"
                            ref={register({
                            validate: (password) => password && password.length > 8,
                            })} />
                            {errors.old_password && (
                                <span className={st.error}>Пароль менее 8 символов</span>
                                )} 
                        <label>Новый пароль</label>
                        <input name="new_password" placeholder="Придумайте пароль"
                            ref={register({
                            validate: (password) => password && password.length > 8,
                            })} />
                            {errors.new_password && (
                                <span className={st.error}>Пароль менее 8 символов</span>
                                )} 
                        <label>Повторите пароль</label>
                        <input name="password_check" placeholder="Придумайте пароль"
                            ref={register({
                            validate: (password) => password && password.length > 8,
                            })} />
                            {errors.password_check && (
                                <span className={st.error}>Пароль менее 8 символов</span>
                                )}
                        </>}
                        {language === 2 &&<>
                        <label>Old password</label>
                        <input name="old_password" placeholder="Old password"
                            ref={register({
                            validate: (password) => password && password.length > 8,
                            })} />
                            {errors.old_password && (
                                <span className={st.error}>Password less than 8 characters</span>
                                )} 
                        <label>New password</label>
                        <input name="new_password" placeholder="New password"
                            ref={register({
                            validate: (password) => password && password.length > 8,
                            })} />
                            {errors.new_password && (
                                <span className={st.error}>Password less than 8 characters</span>
                                )} 
                        <label>Repeat password</label>
                        <input name="password_check" placeholder="Repeat password"
                            ref={register({
                            validate: (password) => password && password.length > 8,
                            })} />
                            {errors.password_check && (
                                <span className={st.error}>Password less than 8 characters</span>
                                )}
                        </>}
                        {language === 3 &&<>
                            <label>Эски сыр сөз</label>
                        <input name="old_password" placeholder="Эски сыр сөз"
                            ref={register({
                            validate: (password) => password && password.length > 8,
                            })} />
                            {errors.old_password && (
                                <span className={st.error}>8 белгиден кем пароль</span>
                                )} 
                        <label>Жаны сыр сөз</label>
                        <input name="new_password" placeholder="Жаны сыр сөз"
                            ref={register({
                            validate: (password) => password && password.length > 8,
                            })} />
                            {errors.new_password && (
                                <span className={st.error}>8 белгиден кем пароль</span>
                                )} 
                        <label>Сыр сөз кайталныз</label>
                        <input name="password_check" placeholder="Сыр сөз кайталныз"
                            ref={register({
                            validate: (password) => password && password.length > 8,
                            })} />
                            {errors.password_check && (
                                <span className={st.error}>8 белгиден кем пароль</span>
                                )}
                        </>}
                            {err && language === 1 && <span className={st.error}>Пароли не совпадают</span>}
                            {err && language === 1 && <span className={st.error}>Passwords do not match</span>}
                            {err && language === 1 && <span className={st.error}>Сырсөздөр дал келген жок</span>}
                            {language === 1 &&<button className={st.change_btn} onClick={handleSubmit(onSubmit)}>Сохранить</button>}
                            {language === 2 &&<button className={st.change_btn} onClick={handleSubmit(onSubmit)}>Save</button>}
                            {language === 3 &&<button className={st.change_btn} onClick={handleSubmit(onSubmit)}>Сактоо</button>}
                    </form>
            </div>
        </div>
    )
}

export default ModalChange;