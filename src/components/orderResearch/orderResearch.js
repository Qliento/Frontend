import React, { useEffect } from 'react';
import st from './orderResearch.module.css';
import { useDispatch, useSelector  } from "react-redux";
import { orderResearch } from '../../redux/reducers/orderResearch/orderResearch';
import { useForm } from "react-hook-form";
import { orderResearchData } from '../../redux/actions/actions';


const OrderResearch = () =>{
    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.orderResearchData.data.data);
    useEffect(() => {
        dispatch(orderResearchData());
    }, []);
    const onSubmit = (data) =>{
        dispatch(orderResearch(data));
    }

    return(
        <div className={st.order_block}>
            <div className={st.order_block_anchor}>
                <img src={require('./target.png')} alt="img" />
                <div className={st.order_anchor_text}>
                    <h3>Заказать исследование</h3>
                    <p>Не нашли нужное исследование? Закажите ваше персональное исследование у нас</p>
                    <a href="#form">Заказать исследование</a>
                </div>
            </div>
            <div className={st.order_instruct}>
                <img src={require('./Rectangle 55.png')} alt="img"></img>
                <div className={st.order_instruct_descrip}>
                    <h2>Краткая инструкция</h2>
                    <p>Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития.
                    </p>
                </div>
                <div className={st.order_instruct_descrip}>
                    <h2>Краткая инструкция</h2>
                    <p>Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности играет важную роль в формировании направлений прогрессивного развития.
                    </p>
                </div>
                <img src={require('./Rectangle 55.png')}></img>
            </div>
            <div className={st.order_form} id="form">
                <h3>Заявка на исследование</h3>
                <p>Оставьте свои контактные данные и мы пришлем вам на почту анкету, заполнив которую, вы сможете заказать исследование</p>
                <form>
                    <div className={st.form_input_block}>
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
                        <input id="companyName" placeholder="Название организации" name="logo" ref={register({
                        validate: (logo) => logo && logo.length > 4,
                        })}></input>
                         {errors.logo && (
                            <span className={st.errorString}>Заполните это поле</span>
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
                        <label for="phone_number">Телефон*</label>
                        <input id="phone_number" placeholder="+996___-__-__-__" name="phone_number" ref={register({
                        validate: (phone_number) => phone_number && phone_number > 6
                        })}></input>
                        {errors.phone_number && (
                            <span className={st.errorString}>Заполните поле корректно</span>
                        )}
                    </div>
                    <div className={st.form_textarea_block}>
                        <label for="description">Дополнительная информация*</label>
                        <textarea id="description" placeholder="Краткое описание продукта\услуги, рынка, отрасли, географии охвата" name="description" ref={register({
                        validate: (description) => description && description.length > 10
                        })}></textarea>
                        {errors.description && (
                            <span className={st.errorString}>Заполните поле</span>
                        )}
                    </div>
                    <button onClick={handleSubmit(onSubmit)}>Отправить</button>
                </form>
            </div>
        </div>
    )

}

export default OrderResearch;