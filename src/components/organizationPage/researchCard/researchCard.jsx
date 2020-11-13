import React from "react";
import classes from "./researchCard.module.css";
import doctor from "./img/Rectangle 47.png";
import { Link } from "react-router-dom";

const ResearchCard = ({ id }) => {
  return (
    <Link to={`/organization-page/detail-card`}>
      <div className={classes.marketCard}>
        <img alt="img" src={doctor} className={classes.img} />
        <div className={classes.content}>
          <div className={classes.nameCompany}>
            <span className={classes.name}>ОсОО “Бимед Фарм”</span>
            <span className={classes.date}>29 / 09 / 2020</span>
          </div>
          <div className={classes.blockDescrip}>
            <div className={classes.nameResearch}>
              <span>Рынок частной медицины 2020. База сетей</span>
            </div>
            <div className={classes.description}>
              <span>150 стр</span>
              <span>ID: 003</span>
              <div className={classes.country}>
                <span>Страны: </span>
                <span >Россия</span>
              </div>
            </div>
          </div>
          <div className={classes.blockHeshteg}>
            <div >#медицина</div>
            <div >#медицина</div>
            <div >#медицина</div>
          </div>
        </div>
        <div className={classes.blockAct}>
          <div className={classes.blockPrace}>
            <span className={classes.discounts}>88 000 сом</span>
            <span className={classes.newPrace}>55 000 сом</span>
          </div>
          <div className={classes.blockBtn}>
            <button className={classes.toBasket}>Редактировать</button>
            <div className={classes.blockStatus}>
                <span className={classes.status_title}>Статус</span>
                <span className={classes.status_desc}>На рассмотрении</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ResearchCard;