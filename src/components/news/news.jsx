import React, { useState,useEffect } from "react";
import st from "./news.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NewsCard from "../newsCard/newsCard";
import { ListNews } from "../../redux/actions/getListNews/getNews";


const News = () => {
  const dispatch = useDispatch();
 const data = useSelector((state) => state.ListNews.arrayNews);
//  const language = useSelector(state => state.langReducer.lang);
const language = localStorage.getItem('lang');
useEffect(() => {
  dispatch(ListNews());
  window.scrollTo(0, 0)
}, []);

  const [block, setBlock] = useState();
  const arr = [1, 2];
  return (
    <div className={st.analitic_container}>
      <div className={st.analitic_way}>
        {(language == 1 || language == undefined) && <>
          <Link to="/">Главная / </Link>
          <Link to="">Новости</Link>
        </>}
        {language == 2 && <>
          <Link to="/">Home / </Link>
          <Link to="">News</Link>
        </>}
        {language == 3 && <>
          <Link to="/">Башкы бет / </Link>
          <Link to="">Жаңылыктар</Link>
        </>}
      </div>
      {(language == 1 || language == undefined) && <h2>Новости</h2>}
      {language == 2 && <h2>News</h2>}
      {language == 3 && <h2>Жаңылыктар</h2>}
      <div className={st.analitic_content}>
        {
          data&&(
            data.map((item) => {
              return(
              <NewsCard key={item.id} data={item} />
              )
            })
          )
          }
      </div>
    </div>
  );
};
export default News;
