import React, {useState} from 'react';
import st from './modal.module.css';
import photo from '../header/img/photo.png'

const ModalChange = ({offModal}) =>{

    return(
        <div className={st.modal}>
            <div className={st.modal_content}>
                <span className={st.strike} onClick={offModal}></span>
                    <form className={st.form}>
                        <label>Имя</label>
                        <input></input>
                        <label>Фамилия</label>
                        <input></input>
                        <label>Номер телефона</label>
                        <input></input>
                        <button className={st.changePass}>Сменить пароль</button>
                        <button>Сохранить</button>
                    </form>
            </div>
        </div>
    )
}

export default ModalChange;