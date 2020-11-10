import React, {useState} from 'react';
import st from './modal.module.css';
import photo from '../header/img/photo.png'

const ModalChange = ({offModal}) =>{

    return(
        <div className={st.modal}>
            <div className={st.modal_content}>
                <span className={st.strike} onClick={offModal}></span>
                    <form className={st.form}>
                        <label>Старый пароль</label>
                        <input placeholder='Ваш пароль'></input>
                        <label>Новый пароль</label>
                        <input placeholder='Придумайте пароль'></input>
                        <label>Повторите пароль</label>
                        <input placeholder='Повторите пароль'></input>
                        <button className={st.change_btn}>Сохранить</button>
                    </form>
            </div>
        </div>
    )
}

export default ModalChange;