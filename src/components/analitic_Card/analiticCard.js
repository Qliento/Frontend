import React, { useEffect }  from 'react';
import st from './analiticCard.module.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { blogCardData } from '../../redux/actions/actions';




const AnaliticCard = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.blogCardData.data.data);
    // const language = useSelector(state => state.langReducer.lang);
    const language = localStorage.getItem('lang');
    useEffect(() => {dispatch(blogCardData(id))}, []);
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентабрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const monthEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthKg = ['Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'];
    
    useEffect(() => {
    window.Ya.share2('ya', {
        theme: { services: 'vkontakte,facebook,telegram,linkedin,twitter',
        size: 'l',
    },
      });
    })

    return(
        <div className={st.container}>
            <span className={st.analiticCard_way}>
                {(language == 1 || language == undefined) && <><Link to="/">Главная</Link><span> / </span>
                <Link to="/analitic">Блог</Link></>}
                {language == 2 && <><Link to="/">Home</Link><span> / </span>
                <Link to="/analitic">Blog</Link></>}
                {language == 3 && <><Link to="/">Башкы бет</Link><span> / </span>
                <Link to="/analitic">Блог</Link></>}
                <span> / </span>
                {data && <Link to={`/analiticCard/${data.id}`}>{data.header}</Link>}
            </span>
            <div className={st.card_content}>
                <div className={st.card_img}>
                    <div className={st.card_img_container}>
                        <img src={data && data.images[0].url} alt="img" />
                    </div>
                    <div className={st.shareIt}>
                        {(language == 1 || language == undefined) && <span>Поделиться в соц сетях</span>}
                        {language == 2 && <span>Share in social networks</span>}
                        {language == 3 && <span>Социалдык тармактарда бөлүшүү</span>}
                        <div className={st.shareIt_icons}>
                        <div id="ya"></div>
                        </div>
                    </div>
                    {data && data.research && <div className={st.research_info}>
                    <Link to={`/market-research-detail/${data.research && data.research.id}`} >
                        <div className={st.research_info_header}>
                            <span>{data.research.author && data.research.author.logo}</span>
                            <span>{data.research.date}</span>
                        </div>
                        <div className={st.research_info_line}></div>
                        <div className={st.research_info_content}>
                            <h5>{data.research.name}</h5>
                            <div className={st.research_info_details}>
                                <span>{data.research.pages} стр</span>
                                <span>ID: {data.research.id}</span>
                                <span>Страна: {data.research.country.map(elem =>(
                                    <>
                                    <span>{elem.name}</span>
                                    </>
                                ))}</span>
                            </div>
                        </div>
                        <div className={st.research_info_hashtag}>
                            {
                                data.research.hashtag.map(elem =>(
                                    <>
                                        <span>#{elem.name}</span>
                                    </>
                                ))
                            }
                        </div>
                        </Link>
                    </div>}
                    
                </div>
                <div className={st.card_description}>
                    <span>
                        <span>{ data && data.date.match(/\d+/g)[2] } </span>
                        {(language == 1 || language == undefined) && <span>{ data && month[Number(data.date.match(/\d+/g)[1] - 1)] } </span>}
                        {language == 2 && <span>{ data && monthEng[Number(data.date.match(/\d+/g)[1] - 1)] } </span>}
                        {language == 3 && <span>{ data && monthKg[Number(data.date.match(/\d+/g)[1] - 1)] } </span>}
                        <span>{ data && data.date.match(/\d+/g)[0] }</span>
                    </span>
                    <h4>{ data && data.header }</h4>
                    <p>{ data && data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default AnaliticCard;