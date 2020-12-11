import React from 'react';
import st from './auth_network.module.css';




const Auth_network = ({chooseModal, offModal}) =>{
    const language = localStorage.getItem('lang');
    return(
        <div className={st.modal}>
            
            <div className={st.modal_content}>
            <h3>Кем вы являетесь</h3>
            <div className={st.blockBtn}>
                    <div onClick={chooseModal}>
                        {(language == 1 || language == undefined) && <button className={st.btn}>Частное лицо</button>}
                        {language == 2 && <button className={st.btn}>Individual</button>}
                        {language == 3 && <button className={st.btn}>Жеке кардар</button>}
                    </div>
                    <div onClick={chooseModal}>
                        {(language == 1 || language == undefined) && <button className={st.btn}>Организация</button>}
                        {language == 2 && <button className={st.btn}>Legal entity</button>}
                        {language == 3 && <button className={st.btn}>Уюм</button>}
                    </div>
                  
                </div>
                <div onClick={offModal}>
                    {(language == 1 || language == undefined) && <button className={st.btnCancel}>Отмена</button>}
                    {language == 2 && <button className={st.btnCancel}>Сancel</button>}
                    {language == 3 && <button className={st.btnCancel}>Жокко чыгаруу</button>}
                </div>
            </div>
        </div>
    )
}

export default Auth_network;