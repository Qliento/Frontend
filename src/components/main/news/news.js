import React from "react";
import classes from "./news.module.css";
import NewsCards from "./NewsCards/NewsCards";
import {useSelector} from 'react-redux';

const News = ({arrNews}) => {
  const language = useSelector(state => state.langReducer.lang)
  return (
    <div className={classes.blockNews}>
      <div className={classes.blockTitle}>
        {language === 1 && <span className={classes.title}>Новости</span>}
        {language === 2 && <span className={classes.title}>News</span>}
        {language === 3 && <span className={classes.title}>Жаңылыктар</span>}
      </div>
      <div className={classes.content}>
        <NewsCards arrNews={arrNews && arrNews}/>
      </div>
    </div>
  );
};
export default News;
