import React from 'react';
import st from './recoveryPassword.module.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { recoveryPassword } from '../../redux/actions/actions';

const RecoveryPassword = () =>{
    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) =>{
        dispatch(recoveryPassword(data));
    }
    return(
        <div className={st.recoveryBlock}>
            <div className={st.recoveryBlock_content}>
                <Link to = '/' className = {st.strikeLink} >
                    <div className={st.strike}></div>
                </Link>
                <h2>Восстановление пароля</h2>
                <form>
                    <label>E-mail</label>
                    <input placeholder="Ваш e-mail" name="email" ref={register({
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          },
                        validate: (email) => email && email.length > 4
                        })}></input>
                     {errors.email && (
                            <span className={st.errorString}>Неверный адрес электронной почты</span>
                        )}
                    <button onClick={handleSubmit(onSubmit)}>Отправить письмо</button>
                </form>
            </div>
        </div>
    )
}

export default RecoveryPassword;