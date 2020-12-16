import React from 'react';
import st from './auth_network.module.css';
import GoogleLogin from 'react-google-login';
import {authSocial} from '../../../redux/actions/actions';
import { useDispatch} from "react-redux";

const NetworkChoose = ({offModal, network}) =>{
    const dispatch = useDispatch();
    const language = localStorage.getItem('lang');
    const success = (res) =>{
        console.log(res);
        dispatch(authSocial('client', res.tokenObj.id_token))
    }
    const failure = (res) =>{
        console.log(res)
    }

    return(
        <div className={st.modal}>
            <div className={st.modal_content}>
            <div className={st.blockBtn}>
                    <GoogleLogin 
                    clientId="1032556798687-6427pbbpse1jm5ho5is64cja01bad94u.apps.googleusercontent.com"
                    buttonText="login"
                    onSuccess={success}
                    onFailure={failure}
                    cookiePolicy={'single_host_origin'}
                    />
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


export default NetworkChoose;