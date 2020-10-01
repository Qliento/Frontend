import React from "react";
import classes from "./news.module.css";
import NewsCards from "./NewsCards/NewsCards";

const News = () => {
  return (
    <div className={classes.blockNews}>
      <div className={classes.blockTitle}>
        <span className={classes.title}>Новости</span>
      </div>
      <div className={classes.content}>
        <NewsCards />
      </div>
    </div>
  );
};
export default News;
