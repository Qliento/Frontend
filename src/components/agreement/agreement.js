import React, {useEffect} from 'react';
import st from './agreement.module.css';
import { useDispatch, useSelector } from "react-redux";
import {AgreementData} from '../../redux/actions/actions'


const Agreement = () =>{
    const dispatch = useDispatch();

    const data = useSelector((state) => state.Agreement.data.data);
    console.log(data);
    useEffect(() => {
        dispatch(AgreementData());
      }, []);

    return(
        <div className={st.agreement}>
            <h2>Пользовательское соглашение</h2>
            {
                data && data.map(elem =>(
                    <p>{elem.text}</p>
                ))
            }
        </div>
    )
}

export default Agreement;