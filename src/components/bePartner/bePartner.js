import React, {useEffect} from 'react';
import st from './bePartner.module.css';
import { bePartner } from '../../redux/reducers/bePartner/bePartner';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { BePartnerData } from '../../redux/actions/actions';

const BePartner = () =>{

    const dispatch = useDispatch();
    const data = useSelector((state) => state.BePartnerData.data.data);
        useEffect(() => {
        dispatch(BePartnerData());
    }, []);

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (data) =>{
        dispatch(bePartner(data));
    }


    return(
        <div className={st.be_partner}>
            <img src={require('./bePartner.png')} alt="img"></img>
            <div className={st.be_partner_container}>
                {data &&(data.map(elem =>(
                    <div>
                        <h2>{elem.header}</h2>
                        <p>{elem.description}</p>
                    </div>
                )))}
            </div>
            <div className={st.order_form}>
                <h3>Обратная связь</h3>
                <form>
                    <div className={st.form_input_block}>
                        <label for="name">ФИО*</label>
                        <input id="name" placeholder="Ваш Ф.И.О" name="name" ref={register({
                        validate: (name) => name && name.length > 4,
                        })}></input>
                        {errors.name && (
                            <span className={st.errorString}>Не корректно ввели данные</span>
                        )}
                        <label for="name_of_organization">Название организации</label>
                        <input id="name_of_organization" placeholder="Название организации" name="name_of_organization" ref={register({
                        validate: (name_of_organization) => name_of_organization && name_of_organization.length > 2,
                        })}></input>
                        {errors.name_of_organization && (
                            <span className={st.errorString}>Не корректно ввели данные</span>
                        )}
                        <label for="position">Должность</label>
                        <input id="position" placeholder="Должность" name="position" ref={register({
                        validate: (position) => position && position.length > 2,
                        })}></input>
                        {errors.position && (
                            <span className={st.errorString}>Не корректно ввели данные</span>
                        )}
                        <label for="mail">Почта*</label>
                        <input id="mail" placeholder="Ваш email" name="email" ref={register({
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Неверный адрес электронной почты",
                          }
                        })}></input>
                        {errors.email && (
                            <span className={st.errorString}>{errors.email.message}</span>
                        )}
                        <label for="phone">Телефон*</label>
                        <input id="phone" placeholder="+996___-__-__-__"  name="phone" ref={register({
                        validate: (phone) => phone && phone > 6
                        })}></input>
                        {errors.phone && (
                            <span className={st.errorString}>Заполните поле корректно</span>
                        )}
                    </div>
                    <div className={st.form_textarea_block}>
                        <label for="description">Дополнительная информация*</label>
                        <textarea id="description" placeholder="Допольнительная информация"  name="extra" ref={register({
                        validate: (extra) => extra && extra.length > 10
                        })}></textarea>
                        {errors.extra && (
                            <span className={st.errorString}>Заполните поле</span>
                        )}
                        <button onClick={handleSubmit(onSubmit)}>Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BePartner;