import React from 'react';
import st from './modal.module.css';
import photo from '../header/img/photo.png'

const Modal = ({offModal, changeModal}) =>{

    return(
        <div className={st.modal}>
            <div className={st.modal_content}>
                <span className={st.strike} onClick={offModal}></span>
                    <div className={st.profile}>
                        <h3>Профиль</h3>
                        <div className={st.profile_img}>
                            <img src={photo} alt="img"></img>
                        </div>
                        <h2>Турбудеков Садыр</h2>
                        <span>эмэйыл@gmail.com</span>
                    </div>
                    <form className={st.form}>
                        <label>Имя</label>
                        <input></input>
                        <label>Фамилия</label>
                        <input></input>
                        <label>Номер телефона</label>
                        <input></input>
                        <button className={st.changePass} onClick={changeModal}>Сменить пароль</button>
                        <button>Сохранить</button>
                    </form>
            </div>
        </div>
    )
}

export default Modal;