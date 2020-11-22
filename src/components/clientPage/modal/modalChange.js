import React, {useState} from 'react';
import st from './modal.module.css';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {changePassword} from '../../../redux/actions/actions';
import Modal from './modal_window_change/modal';

const ModalChange = ({offModal}) =>{
    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();
    const[err,setErr]=useState(false);


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
                        <label>Старый пароль</label>
                        <input
                            name="old_password"
                            placeholder="Ваш пароль"
                            type="text"
                            ref={register({
                            validate: (password) => password && password.length > 6,
                            })} />
                            {errors.old_password && (
                                <span className={st.error}>Пароль менее 6 символов</span>
                                )} 
                        <label>Новый пароль</label>
                        <input
                            name="new_password"
                            placeholder="Придумайте пароль"
                            type="text"
                            ref={register({
                            validate: (password) => password && password.length > 6,
                            })} />
                            {errors.new_password && (
                                <span className={st.error}>Пароль менее 6 символов</span>
                                )} 
                        <label>Повторите пароль</label>
                        <input
                            name="password_check"
                            placeholder="Придумайте пароль"
                            type="text"
                            ref={register({
                            validate: (password) => password && password.length > 6,
                            })} />
                            {errors.password_check && (
                                <span className={st.error}>Пароль менее 6 символов</span>
                                )} 
                            {
                                err && <span className={st.error}>Пароли не совпадают</span>
                            }
                        <button className={st.change_btn} onClick={handleSubmit(onSubmit)}>Сохранить</button>
                    </form>
            </div>
        </div>
    )
}

export default ModalChange;