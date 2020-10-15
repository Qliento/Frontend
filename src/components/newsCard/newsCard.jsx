import React from "react";
import classes from "./newsCard.module.css";
import img1 from "./img/Rectangle 47.png";
import facebook from "./img/facebook.png";
import google from "./img/google.png";
import twiter from "./img/twiter.png";
import vk from "./img/vk.png";
import {Link} from "react-router-dom"

const NewsCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.links}>
     <Link to="/">Главная /</Link>
        <Link to="/news"> Новости /</Link>
        <Link> Рынок частной медицины 2020</Link>
      </div>
      <div className={classes.content}>
        <div className={classes.leftBlock}>
          <img alt="img" className={classes.bigImg} src={img1} />
          <div className={classes.blockSocSeti}>
            <span className={classes.title}>Поделится в соц сетях</span>
            <div className={classes.icons}>
              <img src={google} alt="" />
              <img className={classes.icon} src={facebook} alt="" />
              <img className={classes.icon} src={vk} alt="" />
              <img className={classes.icon} src={twiter} alt="" />
            </div>
          </div>
        </div>
        <div className={classes.textBlock}>
          <span className={classes.date}>30 сентября 2020</span>
          <span className={classes.nameText}>Рынок частной медицины 2020. База сетей</span>

          <span className={classes.descrip}>
            Товарищи! консультация с широким активом влечет за собой процесс
            внедрения и модернизации дальнейших направлений развития. Задача
            организации, в особенности же новая модель организационной
            деятельности влечет за собой процесс внедрения и модернизации
            соответствующий условий активизации. Товарищи! реализация намеченных
            плановых заданий позволяет оценить значение систем массового
            участия. Равным образом постоянный количественный рост и сфера нашей
            активности влечет за собой процесс внедрения и модернизации
            существенных финансовых и административных условий.<br/><br/> С другой стороны
            сложившаяся структура организации в значительной степени
            обуславливает создание модели развития. Задача организации, в
            особенности же новая модель организационной деятельности
            способствует подготовки и реализации направлений прогрессивного
            развития. Задача организации, в особенности же укрепление и развитие
            структуры требуют определения и уточнения систем массового участия.
            Таким образом консультация с широким активом требуют определения и
            уточнения форм развития. Повседневная практика показывает, что
            укрепление и развитие структуры позволяет оценить значение
            существенных финансовых и административных условий.<br/><br/> С другой стороны
            дальнейшее развитие различных форм деятельности влечет за собой
            процесс внедрения и модернизации новых предложений. Равным образом
            реализация намеченных плановых заданий способствует подготовки и
            реализации соответствующий условий активизации. Равным образом
            постоянный количественный рост и сфера нашей активности требуют от
            нас анализа систем массового участия.
          </span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
