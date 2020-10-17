import React from 'react';
import st from './orderResearch.module.css'


const OrderResearch = () =>{

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
                        <label for="name">ФИО*</label>
                        <input id="name" placeholder="Ваш Ф.И.О"></input>
                        <label for="companyName">Название организации</label>
                        <input id="companyName" placeholder="Название организации"></input>
                        <label for="mail">Почта*</label>
                        <input id="mail" placeholder="Ваш email"></input>
                        <label for="phone">Телефон*</label>
                        <input id="phone" placeholder="+996___-__-__-__"></input>
                    </div>
                    <div className={st.form_textarea_block}>
                        <label for="description">Дополнительная информация*</label>
                        <textarea id="description" placeholder="Краткое описание продукта\услуги, рынка, отрасли, географии охвата"></textarea>
                    </div>
                    <button>Отправить</button>
                </form>
            </div>
        </div>
    )

}

export default OrderResearch;