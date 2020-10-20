import React, { useState,useEffect } from "react";
import st from "./news.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NewsCard from "../newsCard/newsCard";
import { ListNews } from "../../redux/actions/getListNews/getNews";


const News = () => {
  const dispatch = useDispatch();
 const data = useSelector((state) => state.ListNews.arrayNews);
useEffect(() => {
  dispatch(ListNews());
}, []);
  const [block, setBlock] = useState();
  const arr = [1, 2];
  return (
    <div className={st.analitic_container}>
      <div className={st.analitic_way}>
        <Link to="/">Главная / </Link>
        <Link to="">Новости</Link>
      </div>
      <h2>Новости</h2>
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
