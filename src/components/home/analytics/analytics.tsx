import React from "react";
import classes from "./analytics.module.css";
import image from "./img/img.png";

const Analytics = () => {
  return (
      <div className={classes.blockAnalytic}>
 <div className={classes.analytic}>
      <div className={classes.blockImg}>
        <img alt="img" src={image} className={classes.images} />
      </div>
      <div className={classes.content}>
        <span className={classes.title}>Аналитика</span>
        <span className={classes.description}>
          Повседневная практика показывает, что постоянный количественный рост и
          сфера нашей активности позволяет выполнять важные задания по
          разработке направлений прогрессивного развития. Значимость этих
          проблем настолько очевидна, что новая модель организационной
          деятельности играет важную роль в формировании направлений
          прогрессивного развития. 
          <br/><br/>
          Задача организации, в особенности же новая
          модель организационной деятельности позволяет выполнять важные задания
          по разработке новых предложений.
        </span>
      </div>
    </div>
      </div>
   
  );
};
export default Analytics;
