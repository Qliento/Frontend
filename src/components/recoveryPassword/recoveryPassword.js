import React from 'react';
import st from './recoveryPassword.module.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { recoveryPassword } from '../../redux/actions/actions';

const RecoveryPassword = () =>{
    const { handleSubmit, register, errors } = useForm();
    const language = useSelector(state => state.langReducer.lang)
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
                {language === 1 &&<h2>Восстановление пароля</h2>}
                {language === 2 &&<h2>Recovery password</h2>}
                {language === 3 &&<h2>Восстановление пароля</h2>}
                <form>
                    <label>E-mail</label>
                    <input placeholder="e-mail" name="email" ref={register({
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          },
                        validate: (email) => email && email.length > 4
                        })}></input>
                     {errors.email && (
                         <>
                            {language === 1 &&<span className={st.errorString}>Неверный адрес электронной почты</span>}
                            {language === 2 &&<span className={st.errorString}>Invalid email</span>}
                            {language === 3 &&<span className={st.errorString}>Электрондук почта жараксыз</span>}
                        </>
                        )}
                    {language === 1 &&<button onClick={handleSubmit(onSubmit)}>Отправить письмо</button>}
                    {language === 2 &&<button onClick={handleSubmit(onSubmit)}>Send a messege</button>}
                    {language === 3 &&<button onClick={handleSubmit(onSubmit)}>Жөнөтүү</button>}
                </form>
            </div>
        </div>
    )
}

export default RecoveryPassword;