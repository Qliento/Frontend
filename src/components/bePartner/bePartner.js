import React, {useEffect} from 'react';
import st from './bePartner.module.css';
import { bePartner } from '../../redux/reducers/bePartner/bePartner';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { BePartnerData } from '../../redux/actions/actions';
import Modal from "./modal";

const BePartner = () =>{

    const dispatch = useDispatch();
    const data = useSelector((state) => state.BePartnerData.data.data);
    // const language = useSelector(state => state.langReducer.lang);
    const language = localStorage.getItem('lang');
    useEffect(() => {
        dispatch(BePartnerData());
        window.scrollTo(0, 0)
    }, []);

    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (data) =>{
        dispatch(bePartner(data));
    }


    return(
        <div className={st.be_partner}>
            <Modal />
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
                {(language == 1 || language == undefined) && <h3>Обратная связь</h3>}
                {language == 2 && <h3>Feedback form</h3>}
                {language == 3 && <h3>Байланыш формасы</h3>}
                <form>
                    {(language == 1 || language == undefined) && <div className={st.form_input_block}>
                        <label for="name">ФИО*</label>
                        <input id="name" placeholder="Ваш Ф.И.О" name="name" ref={register({
                        validate: (name) => name && name.length > 4,
                        })}></input>
                        {errors.name && (
                            <span className={st.errorString}>Заполните поле</span>
                        )}
                        <label for="name_of_organization">Название организации</label>
                        <input id="name_of_organization" placeholder="Название организации" name="name_of_organization"></input>
                        <label for="position">Должность</label>
                        <input id="position" placeholder="Должность" name="position"></input>
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
                            <span className={st.errorString}>Введите данные</span>
                        )}
                    </div>}

                    {language == 2 && <div className={st.form_input_block}>
                        <label for="name">Full name*</label>
                        <input id="name" placeholder="Full name" name="name" ref={register({
                        validate: (name) => name && name.length > 3,
                        })}></input>
                        {errors.name && (
                            <span className={st.errorString}>Fill form (less then 8 charecters)</span>
                        )}
                        <label for="name_of_organization">Name of the organization</label>
                        <input id="name_of_organization" placeholder="Name of the organization" name="name_of_organization"></input>
                        <label for="position">Position</label>
                        <input id="position" placeholder="Position" name="position"></input>
                        <label for="mail">Email*</label>
                        <input id="mail" placeholder="email" name="email" ref={register({
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Incorrect mail data",
                          }
                        })}></input>
                        {errors.email && (
                            <span className={st.errorString}>{errors.email.message}</span>
                        )}
                        <label for="phone">Phone number*</label>
                        <input id="phone" placeholder="+996___-__-__-__"  name="phone" ref={register({
                        validate: (phone) => phone && phone > 6
                        })}></input>
                        {errors.phone && (
                            <span className={st.errorString}>Fill in the field
                            </span>
                        )}
                    </div>}
                    {language == 3 && <div className={st.form_input_block}>
                        <label for="name">Аты-жөнүңүз*</label>
                        <input id="name" placeholder="Аты-жөнүңүз" name="name" ref={register({
                        validate: (name) => name && name.length > 3,
                        })}></input>
                        {errors.name && (
                            <span className={st.errorString}>Талааны толтуруңуз
                            </span>
                        )}
                        <label for="name_of_organization">Уюмдун аталышы</label>
                        <input id="name_of_organization" placeholder="Уюмдун аталышы" name="name_of_organization"></input>
                        <label for="position">Кызмат</label>
                        <input id="position" placeholder="Кызмат" name="position"></input>
                        <label for="mail">Сиздин электрондук почтаңыз*</label>
                        <input id="mail" placeholder="Сиздин электрондук почтаңыз" name="email" ref={register({
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Электрондук почта жараксыз",
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
                            <span className={st.errorString}>Талааны толтуруңуз
                            </span>
                        )}
                    </div>}
                    
                    <div className={st.form_textarea_block}>
                        {(language == 1 || language == undefined) &&<>
                            <label for="description">Описание*</label>
                        <textarea id="description" placeholder="Описание"  name="extra" ref={register({
                        validate: (extra) => extra && extra.length > 10
                        })}></textarea>
                        {errors.extra && (
                            <span className={st.errorString}>Заполните поле</span>
                        )}
                        <button onClick={handleSubmit(onSubmit)}>Отправить</button></>}

                        {language == 2 &&<>
                            <label for="description">Description *</label>
                        <textarea id="description" placeholder="Description"  name="extra" ref={register({
                        validate: (extra) => extra && extra.length > 8
                        })}></textarea>
                        {errors.extra && (
                            <span className={st.errorString}>Fill form (less then 8 charecters)</span>
                        )}
                        <button onClick={handleSubmit(onSubmit)}>Send</button></>}

                        {language == 3 &&<>
                            <label for="description">Сурөттөө*</label>
                        <textarea id="description" placeholder="Сурөттөө"  name="extra" ref={register({
                        validate: (extra) => extra && extra.length > 10
                        })}></textarea>
                        {errors.extra && (
                            <span className={st.errorString}>Талааны толтуруңуз</span>
                        )}
                        <button onClick={handleSubmit(onSubmit)}>Жөнөтүү</button></>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BePartner;