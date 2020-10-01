import React from "react";
import classes from "./aboutUs.module.css";
import mainImg from "./img/mainImag.png";
import leftImg from "./img/leftImg.png";
import rightImg from "./img/Rectangle 24.png";

const AboutUs = () => {
  return (
    <div className={classes.blockAbout}>
      <div className={classes.blockImg}>
        <img src={leftImg} className={classes.leftImg} alt="img" />
        <img alt="img" className={classes.mainImg} src={mainImg} />
        <img src={rightImg} className={classes.rightImg} alt="img" />
      </div>

      <div className={classes.content}>
        <span className={classes.title}>О нас</span>
        <span className={classes.text}>
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
  );
};
export default AboutUs;
