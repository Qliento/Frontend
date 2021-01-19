import React, {useEffect} from 'react';
import st from './agreement.module.css';
import { useDispatch, useSelector } from "react-redux";
import {AgreementData} from '../../redux/actions/actions'


const Agreement = () =>{

    const dispatch = useDispatch();
    const data = useSelector((state) => state.Agreement.data.data);
    // const language = useSelector(state => state.langReducer.lang);
    const language = localStorage.getItem('lang');
    useEffect(() => {dispatch(AgreementData())}, []);
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return(
        <div className={st.agreement}>
            {(language == 1 || language == undefined) && <h2>Пользовательское соглашение</h2>}
            {language == 2 && <h2>Terms of use</h2>}
            {language == 3 && <h2>Пайдалануу шарттары</h2>}
            {data && data.map(elem =>(<p>{elem.text}</p>))}
        </div>
    )
}

export default Agreement;