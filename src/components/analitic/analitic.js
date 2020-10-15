import React from "react";
import st from "./analitic.module.css";
import { Link } from 'react-router-dom';

const Analitic = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div className={st.analitic_container}>
        <div className={st.analitic_way}>
            <span>Главная / </span>
            <span>Аналитика</span>
        </div>
        <h2>Аналитика</h2>
        <div className={st.analitic_content}>
            {arr.map(elem =>(
                <Link to="/analiticCard">
                <div className={st.analitic_card}>
                <img src={require('./analitic_bg.png')} alt="img" />
                <div className={st.card_info}>
                    <span className={st.card_date}>{elem} сентября 2020</span>
                    <h5 className={st.card_title}>Рынок частной медицины 2020. База сетей</h5>
                    <p>Таким образом дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки дальнейших направлений развития...</p>
                </div>
            </div>
            </Link>
            ))}
            
        </div>
    </div>
  );
};

export default Analitic;
