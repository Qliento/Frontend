import React, { useEffect } from 'react';
import st from './orderResearch.module.css';
import { useDispatch, useSelector  } from "react-redux";
import { orderResearch } from '../../redux/reducers/orderResearch/orderResearch';
import { useForm } from "react-hook-form";
import { orderResearchData } from '../../redux/actions/actions';
import Modal from "./modal";


const OrderResearch = () =>{
    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.orderResearchData.data.data);
    // const language = useSelector(state => state.langReducer.lang)
    const language = localStorage.getItem('lang');
    useEffect(() => {
        dispatch(orderResearchData());
    }, []);
    const onSubmit = (data) =>{
        dispatch(orderResearch(data));
    }

    return(
        <div className={st.order_block}>
            <Modal />
            <div className={st.order_block_anchor}>
                <img src={require('./target.png')} alt="img" />
                <div className={st.order_anchor_text}>
                    {(language == 1 || language == undefined) && <>
                        <h3>Заказать исследование</h3>
                        <p>Не нашли нужное исследование? Закажите ваше персональное исследование у нас</p>
                        <a href="#form">Заказать исследование</a>
                    </>}
                    {language == 2 && <>
                        <h3>Order research</h3>
                        <p>Didn't find the research you were looking for? Order your personal research</p>
                        <a href="#form">Order research</a>
                    </>}
                    {language == 3 && <>
                        <h3>Изилдөөгө заказ бериңиз</h3>
                        <p>Издеп жаткан изилдөөнү тапкан жоксузбу? Жеке изилдөөнү бизден заказ бериңиз</p>
                        <a href="#form">Изилдөөгө заказ бериңиз</a>
                    </>}
                    
                </div>
            </div>
            <div className={st.order_instruct}>
                {data && data.map(elem => (
                    <div className={st.order_instruct_block}>
                    <img src={elem.picture1} alt="img"></img>
                    <div className={st.order_instruct_descrip}>
                        <h2>{elem.title}</h2>
                        <p>{elem.text1}</p>
                    </div>
                    </div>
                ))}
            </div>
            <div className={st.order_form} id="form">
                {(language == 1 || language == undefined) && <h3>Заявка на исследование</h3>}
                {language == 2 && <h3>Research application</h3>}
                {language == 3 && <h3>Изилдөө заявкасы</h3>}
                {(language == 1 || language == undefined) && <p>Оставьте свои контактные данные и мы пришлем вам на почту анкету, заполнив которую, вы сможете заказать исследование</p>}
                {language == 2 && <p>Leave your contact details and we will send you a questionnaire by mail that you need to fill out to order a research</p>}
                {language == 3 && <p>Байланыш маалыматтарыңызды калтырыңыз, биз сизге почта аркылуу анкета жөнөткөндөн кийин изилдөөгө заказ кыла аласынар</p>}
                <form>
                    {(language == 1 || language == undefined) && <div className={st.form_input_block}>
                        <label for="name">Имя*</label>
                        <input id="name" placeholder="Ваше имя" name="name" ref={register({
                        validate: (name) => name && name.length > 4,
                        })}></input>
                        {errors.name && (
                            <span className={st.errorString}>Не корректно ввели данные</span>
                        )}
                        <label for="surname">Фамилия*</label>
                        <input id="surname" placeholder="Ваша фамилия" name="surname" ref={register({
                        validate: (surname) => surname && surname.length > 4,
                        })}></input>
                        {errors.surname && (
                            <span className={st.errorString}>Не корректно ввели данные</span>
                        )}
                        <label for="companyName">Название организации</label>
                        <input id="companyName" placeholder="Название организации" name="logo" ></input>
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
                        <label for="phone_number">Телефон*</label>
                        <input id="phone_number" placeholder="+996___-__-__-__" name="phone_number" ref={register({
                        validate: (phone_number) => phone_number && phone_number > 6
                        })}></input>
                        {errors.phone_number && (
                            <span className={st.errorString}>Заполните поле корректно</span>
                        )}
                    </div>}
                    {language == 2 && <div className={st.form_input_block}>
                        <label for="name">Name*</label>
                        <input id="name" placeholder="Your name" name="name" ref={register({
                        validate: (name) => name && name.length > 3,
                        })}></input>
                        {errors.name && (
                            <span className={st.errorString}>Data incorrectly entered</span>
                        )}
                        <label for="surname">Surname*</label>
                        <input id="surname" placeholder="Your surname" name="surname" ref={register({
                        validate: (surname) => surname && surname.length > 3,
                        })}></input>
                        {errors.surname && (
                            <span className={st.errorString}>Data incorrectly entered</span>
                        )}
                        <label for="companyName">Name of the organization</label>
                        <input id="companyName" placeholder="Name of the organization" name="logo"></input>
                        <label for="mail">Email*</label>
                        <input id="mail" placeholder="email" name="email" ref={register({
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email",
                          }
                        })}></input>
                        {errors.email && (
                            <span className={st.errorString}>{errors.email.message}</span>
                        )}
                        <label for="phone_number">Phone_number*</label>
                        <input id="phone_number" placeholder="+996___-__-__-__" name="phone_number" ref={register({
                        validate: (phone_number) => phone_number && phone_number > 6
                        })}></input>
                        {errors.phone_number && (
                            <span className={st.errorString}>Data incorrectly entered</span>
                        )}
                    </div>}
                    {language == 3 && <div className={st.form_input_block}>
                        <label for="name">Сиздин атыңыз*</label>
                        <input id="name" placeholder="Сиздин атыңыз" name="name" ref={register({
                        validate: (name) => name && name.length > 4,
                        })}></input>
                        {errors.name && (
                            <span className={st.errorString}>Маалыматтар туура эмес киргизилген</span>
                        )}
                        <label for="surname">Сиздин фамилияңыз*</label>
                        <input id="surname" placeholder="Сиздин фамилияңыз" name="surname" ref={register({
                        validate: (surname) => surname && surname.length > 4,
                        })}></input>
                        {errors.surname && (
                            <span className={st.errorString}>Маалыматтар туура эмес киргизилген</span>
                        )}
                        <label for="companyName">Уюмдун аталышы</label>
                        <input id="companyName" placeholder="Уюмдун аталышы" name="logo"></input>
                        <label for="mail">Email*</label>
                        <input id="mail" placeholder="email" name="email" ref={register({
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Неверный адрес электронной почты",
                          }
                        })}></input>
                        {errors.email && (
                            <span className={st.errorString}>{errors.email.message}</span>
                        )}
                        <label for="phone_number">Телефон*</label>
                        <input id="phone_number" placeholder="+996___-__-__-__" name="phone_number" ref={register({
                        validate: (phone_number) => phone_number && phone_number > 6
                        })}></input>
                        {errors.phone_number && (
                            <span className={st.errorString}>Маалыматтар туура эмес киргизилген</span>
                        )}
                    </div>}
                    <div className={st.form_textarea_block}>
                        {(language == 1 || language == undefined) && <>
                            <label for="description">Дополнительная информация*</label>
                        <textarea id="description" placeholder="Краткое описание продукта\услуги, рынка, отрасли, географии охвата" name="description" ref={register({
                        validate: (description) => description && description.length > 10
                        })}></textarea>
                        {errors.description && (
                            <span className={st.errorString}>Заполните поле (Более 10 символов)</span>
                        )}</>}
                        {language == 2 && <>
                            <label for="description">Additional Information*</label>
                        <textarea id="description" placeholder="А short description of the product / service, market, industry, geography of coverage" name="description" ref={register({
                        validate: (description) => description && description.length > 10
                        })}></textarea>
                        {errors.description && (
                            <span className={st.errorString}>Less than 10 characters</span>
                        )}</>}
                        {language == 3 && <>
                            <label for="description">Кошумча маалымат*</label>
                        <textarea id="description" placeholder="Онүмдүн / кызматтын, базардын, тармактын кыскача сүрөттөлүшү, камтуу географиясы" ref={register({
                        validate: (description) => description && description.length > 10
                        })}></textarea>
                        {errors.description && (
                            <span className={st.errorString}>10 белгиден кем</span>
                        )}</>}
                        
                        
                    </div>
                    {(language == 1 || language == undefined) && <button onClick={handleSubmit(onSubmit)}>Отправить</button>}
                    {language == 2 && <button onClick={handleSubmit(onSubmit)}>Send</button>}
                    {language == 3 && <button onClick={handleSubmit(onSubmit)}>Жөнөтүү</button>}
                </form>
            </div>
        </div>
    )

}

export default OrderResearch;