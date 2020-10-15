import React, { useState } from "react";
import classes from "./news.module.css";
import st from "./news.module.css";
import { Link } from "react-router-dom";
import google from "./img/google.png";
import vk from "./img/vk.png";
import twiter from "./img/twiter.png";
import facebook from "./img/facebook.png";
import bg from "./img/newsImg.png";

const News = () => {
  const arr = [1, 2];
  const [block, setBlock] = useState();

  return (
    <div className={st.analitic_container}>
      <div className={st.analitic_way}>
        <Link to="/">Главная / </Link>
        <Link to="">Новости</Link>
      </div>
      <h2>Новости</h2>
      <div className={st.analitic_content}>
        {arr.map((elem) => (
          <div className={st.analitic_card}>
            <div className={st.blockImg}>
              <img alt="img" src={bg} className={st.img} />
              <div className={st.buttomBlock}>
                <span className={st.buttomBlockTitle}>
                  Поделится в соц сетях
                </span>
                <div className={st.icons}>
                  <img src={google} alt="" className={st.icon} />
                  <img src={vk} alt="" className={st.icon} />
                  <img src={facebook} alt="" className={st.icon} />
                  <img src={twiter} alt="" className={st.icon} />
                </div>
              </div>
            </div>

            <div className={st.content}>
              <span className={st.date}>30 сентября 2020</span>
              <span className={st.title}>
                Рынок частной медицины 2020. База сетей
              </span>
              <span className={st.description}>
                Товарищи! консультация с широким активом влечет за собой процесс
                внедрения и модернизации дальнейших направлений развития. Задача
                организации, в особенности же новая модель организационной
                деятельности влечет за собой процесс внедрения и модернизации
                соответствующий условий активизации. Товарищи! реализация
                намеченных плановых заданий позволяет оценить значение систем
                массового участия. Равным образом постоянный количественный рост
                и сфера нашей активности влечет за собой процесс внедрения и
                модернизации существенных финансовых и административных условий{" "}
                <br />
                <br />
                Товарищи! консультация с широким активом влечет за собой процесс
                внедрения и модернизации дальнейших направлений развития. Задача
                организации, в особенности же новая модель организационной
                деятельности влечет за собой процесс внедрения и модернизации
                соответствующий условий активизации. Товарищи! реализация
                намеченных плановых заданий позволяет оценить значение систем
                массового участия. Равным образом постоянный количественный рост
                и сфера нашей активности влечет за собой процесс внедрения и
                модернизации существенных финансовых и административных условий
              </span>
              <button className={st.btn} >
                Развернуть
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default News;
