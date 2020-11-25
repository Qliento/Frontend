import React, {useEffect}  from "react";
import st from "./analitic.module.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { blogData } from '../../redux/actions/actions';
import noPhoto from './no_photo.jpg';

const Analitic = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.blogData.data.data);
    const language = useSelector(state => state.langReducer.lang);
    useEffect(() => {dispatch(blogData())}, []);

    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентабрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return (
    <div className={st.analitic_container}>
        <div className={st.analitic_way}>
            {language === 1 && <>
                <Link to="/">Главная</Link>
                <span> / </span>
                <Link to="/analitic">Блог</Link>
            </>}
            {language === 2 && <>
                <Link to="/">Home</Link>
                <span> / </span>
                <Link to="/analitic">Blog</Link>
            </>}
            {language === 3 && <>
                <Link to="/">Башкы бет</Link>
                <span> / </span>
                <Link to="/analitic">Блог</Link>
            </>}
        </div>
        {language === 1 && <h2>Блог</h2>}
        {language === 2 && <h2>Blog</h2>}
        {language === 3 && <h2>Блог</h2>}
        <div className={st.analitic_content}>
            {data && data.map(elem =>(
                <Link to={`/analiticCard/${elem.id}`} key={elem.id} className={st.analitic_card}>
                    <div>
                        <img src={elem.images[0] === undefined ? noPhoto : elem.images[0].url} alt="img" />
                        <div className={st.card_info}>
                            <span className={st.card_date}>
                                <span>{ elem.date.match(/\d+/g)[2] } </span>
                                <span>{ month[Number(elem.date.match(/\d+/g)[1] - 1)] }</span>
                                <span>{ elem.date.match(/\d+/g)[0] }</span>
                            </span>
                            <h5 className={st.card_title}>{elem.header}</h5>
                            <p>{elem.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
            
        </div>
    </div>
  );
};

export default Analitic;
