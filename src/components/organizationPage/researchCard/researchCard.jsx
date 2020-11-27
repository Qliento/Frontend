import React, { useState } from "react";
import classes from "./researchCard.module.css";
import doctor from "./img/Rectangle 47.png";
import { Link } from "react-router-dom";
import EditModal from "../editResearch/editResearch";
import ReactDOM from 'react-dom';

const ResearchCard = ({ data }) => {
  const [edit, setEdit] = useState(false);
  return (
    <>
      <div className={classes.marketCard}>
        <Link to={`/organization-page/detail-card/${data.id}`} className={classes.link}>
          <img
            alt="img"
            src={data.image ? data.image : doctor}
            className={classes.img}
          />
          <div className={classes.content}>
            <div className={classes.nameCompany}>
              <span className={classes.name}></span>
              <span className={classes.date}>{data && data.date}</span>
            </div>
            <div className={classes.blockDescrip}>
              <div className={classes.nameResearch}>
                <span>{data && data.name}</span>
              </div>
              <div className={classes.description}>
                <span>{data && data.pages} стр</span>
                <span>ID: {data && data.id}</span>
                <div className={classes.country}>
                  <span>Страны: </span>
                  {data.country &&
                    data.country.map((item) => {
                      return <span key={item.id}> {item.name}</span>;
                    })}
                </div>
              </div>
            </div>
            <div className={classes.blockHeshteg}>
              {data.hashtag &&
                data.hashtag.map((items) => {
                  return <div key={items.id}>#{items.name}</div>;
                })}
            </div>
          </div>
        </Link>
        <div className={classes.blockAct}>
          <div className={classes.blockPrace}>
            {data.old_price && data.new_price ? (
              <>
                <span className={classes.discounts}>{data.old_price} сом</span>
                <span className={classes.newPrace}>{data.new_price} сом</span>
              </>
            ) : (
              <>
                <span></span>
                <span className={classes.newPrace}>{data.old_price} сом</span>
              </>
            )}
          </div>
          <div className={classes.blockBtn}>
            <button className={classes.toBasket} onClick={() => setEdit(true)}>
              Редактировать
            </button>
            <div className={classes.blockStatus}>
              <span className={classes.status_title}>Статус</span>
              {data && data.status === 1 ? (
                <span className={classes.status_desc}>На рассмотрении</span>
              ) : null}

              {data && data.status === 2 ? (
                <span className={classes.status_desc2}>Одобрено</span>
              ) : null}
              {data && data.status === 3 ? (
                <span className={classes.status_desc3}>Отказано</span>
              ) : null}
              {data && data.status === 4 ? (
                <span className={classes.status_desc4}>
                  Запросить скидочную цену
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>

    
      {edit == true && ReactDOM.createPortal(
                <EditModal changeState={() => setEdit(false)} id={data.id} />,
                document.getElementById('portal')
            )}
    </>
  );
};
export default ResearchCard;
