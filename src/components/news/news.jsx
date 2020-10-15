import React from "react";
import classes from "./news.module.css";
import st from "./news.module.css";
import { Link } from "react-router-dom";

const News = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className={st.analitic_container}>
      <div className={st.analitic_way}>
        <Link to="/">Главная / </Link>
        <Link to="">Новости</Link>
      </div>
      <h2>Новости</h2>
      <div className={st.analitic_content}>
        {arr.map((elem) => (
          <Link to="/newsCard">
            <div className={st.analitic_card}>
              <img src={require("./img/analitic_bg.png")} alt="img" />
              <div className={st.card_info}>
                <di className={st.blockDate}>
                  <span className={st.card_date}>{elem} сентября 2020</span>
                  <span className={st.clock}>22:00</span>
                </di>

                <h5 className={st.card_title}>
                  Рынок частной медицины 2020. База сетей
                </h5>
                <p>
                  Таким образом дальнейшее развитие различных форм деятельности
                  представляет собой интересный эксперимент проверки дальнейших
                  направлений развития...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default News;
