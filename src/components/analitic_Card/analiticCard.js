import React, { useEffect }  from 'react';
import st from './analiticCard.module.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { blogCardData } from '../../redux/actions/actions';




const AnaliticCard = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.blogCardData.data.data);
    console.log(data);
    useEffect(() => {
        dispatch(blogCardData(id));
    }, []);
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентабрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    
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
                <Link to="/">Главная</Link>
                <span> / </span>
                <Link to="/analitic">Блог</Link>
                <span> / </span>
                {data && <Link to={`/analiticCard/${data.id}`}>{data.header}</Link>}
            </span>
            <div className={st.card_content}>
                <div className={st.card_img}>
                    <img src={data && data.images[0].url} alt="img" />
                    <div className={st.shareIt}>
                        <span>Поделиться в соц сетях</span>
                        <div className={st.shareIt_icons}>
                        <div id="ya"></div>
                        </div>
                    </div>
                    {data && data.research && <div className={st.research_info}>
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
                    </div>}
                    
                </div>
                <div className={st.card_description}>
                    <span>
                        <span>{ data && data.date.match(/\d+/g)[2] } </span>
                        <span>{ data && month[Number(data.date.match(/\d+/g)[1] - 1)] } </span>
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