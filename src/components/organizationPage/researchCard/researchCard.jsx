import React, { useState, useEffect } from "react";
import classes from "./researchCard.module.css";
import doctor from "./img/Rectangle 47.png";
import { Link } from "react-router-dom";
import EditModal from "../editResearch/editResearch";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

const ResearchCard = ({ data }) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem("lang");
  return (
    <>
      <div className={classes.marketCard}>
        <Link
          to={`/organization-page/detail-card/${data.id}`}
          className={classes.link}
        >
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
                {(language == 1 || language == undefined) && (
                  <span>{data && data.pages} стр</span>
                )}
                {language == 2 && <span>{data && data.pages} рages</span>}
                {language == 3 && <span>{data && data.pages} бет</span>}
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
                <span className={classes.discounts}>{data.old_price} $</span>
                <span className={classes.newPrace}>{data.new_price} $</span>
              </>
            ) : (
              <>
                <span></span>
                <span className={classes.newPrace}>{data.old_price} $</span>
              </>
            )}
          </div>
          <div className={classes.blockBtn}>
            {(language == 1 || language == undefined) && (
              <button
                className={classes.toBasket}
                onClick={() => setEdit(true)}
                disabled={(data&&data.status==4) ? false:true}
              >
                Редактировать
              </button>
            )}
            {language == 2 && (
              <button
                className={classes.toBasket}
                onClick={() => setEdit(true)}
                disabled={(data&&data.status==4) ? false:true}
              >
                Edit
              </button>
            )}
            {language == 3 && (
              <button
                className={classes.toBasket}
                onClick={() => setEdit(true)}
                disabled={(data&&data.status==4) ? false:true}
              >
                Түзөтүү
              </button>
            )}
            <div className={classes.blockStatus}>
              {(language == 1 || language == undefined) && (
                <span className={classes.status_title}>Статус</span>
              )}
              {language == 2 && (
                <span className={classes.status_title}>Status</span>
              )}
              {language == 3 && (
                <span className={classes.status_title}>Статус</span>
              )}
              {data && data.status === 1 ? (
                <>
                  {(language == 1 || language == undefined) && (
                    <span className={classes.status_desc}>На рассмотрении</span>
                  )}
                  {language == 2 && (
                    <span className={classes.status_desc}>Pending</span>
                  )}
                  {language == 3 && (
                    <span className={classes.status_desc}>Күтүлүүдө</span>
                  )}
                </>
              ) : null}

              {data && data.status === 2 ? (
                <>
                  {(language == 1 || language == undefined) && (
                    <span className={classes.status_desc2}>Одобрено</span>
                  )}
                  {language == 2 && (
                    <span className={classes.status_desc2}>Approved</span>
                  )}
                  {language == 3 && (
                    <span className={classes.status_desc2}>Бекитилген</span>
                  )}
                </>
              ) : null}
              {data && data.status === 3 ? (
                <>
                  {(language == 1 || language == undefined) && (
                    <span className={classes.status_desc3}>Отказано</span>
                  )}
                  {language == 2 && (
                    <span className={classes.status_desc3}>Denied</span>
                  )}
                  {language == 3 && (
                    <span className={classes.status_desc3}>Четке кагылды</span>
                  )}
                </>
              ) : null}
              {data && data.status === 4 ? (
                <>
                  {(language == 1 || language == undefined) && (
                    <span className={classes.status_desc4}>
                      Запросить скидочную цену
                    </span>
                  )}
                  {language == 2 && (
                    <span className={classes.status_desc4}>
                      Request a discount price
                    </span>
                  )}
                  {language == 3 && (
                    <span className={classes.status_desc4}>
                      Арзандатуу баасын сураңыз
                    </span>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className={classes.marketCardNone}>
        <div className={classes.topBlock}>
        <Link
          to={`/organization-page/detail-card/${data.id}`}
          className={classes.linkImg}
        >
          <img
            alt="img"
            src={data.image ? data.image : doctor}
            className={classes.img}
          />
        </Link>
        <div className={classes.blockAct}>
          <div className={classes.blockPrace}>
            {data.old_price && data.new_price ? (
              <>
                <span className={classes.discounts}>{data.old_price} $</span>
                <span className={classes.newPrace}>{data.new_price} $</span>
              </>
            ) : (
              <>
                <span></span>
                <span className={classes.newPrace}>{data.old_price} $</span>
              </>
            )}
          </div>
          <div className={classes.blockBtn}>
            {(language == 1 || language == undefined) && (
              <button
                className={classes.toBasket}
                onClick={() => setEdit(true)}
                disabled={(data&&data.status==4) ? false:true}
              >
                Редактировать
              </button>
            )}
            {language == 2 && (
              <button
                className={classes.toBasket}
                onClick={() => setEdit(true)}
                disabled={(data&&data.status==4) ? false:true}
              >
                Edit
              </button>
            )}
            {language == 3 && (
              <button
                className={classes.toBasket}
                onClick={() => setEdit(true)}
                disabled={(data&&data.status==4) ? false:true}
              >
                Түзөтүү
              </button>
            )}
            <div className={classes.blockStatus}>
              {(language == 1 || language == undefined) && (
                <span className={classes.status_title}>Статус</span>
              )}
              {language == 2 && (
                <span className={classes.status_title}>Status</span>
              )}
              {language == 3 && (
                <span className={classes.status_title}>Статус</span>
              )}
              {data && data.status === 1 ? (
                <>
                  {(language == 1 || language == undefined) && (
                    <span className={classes.status_desc}>На рассмотрении</span>
                  )}
                  {language == 2 && (
                    <span className={classes.status_desc}>Pending</span>
                  )}
                  {language == 3 && (
                    <span className={classes.status_desc}>Күтүлүүдө</span>
                  )}
                </>
              ) : null}

              {data && data.status === 2 ? (
                <>
                  {(language == 1 || language == undefined) && (
                    <span className={classes.status_desc2}>Одобрено</span>
                  )}
                  {language == 2 && (
                    <span className={classes.status_desc2}>Approved</span>
                  )}
                  {language == 3 && (
                    <span className={classes.status_desc2}>Бекитилген</span>
                  )}
                </>
              ) : null}
              {data && data.status === 3 ? (
                <>
                  {(language == 1 || language == undefined) && (
                    <span className={classes.status_desc3}>Отказано</span>
                  )}
                  {language == 2 && (
                    <span className={classes.status_desc3}>Denied</span>
                  )}
                  {language == 3 && (
                    <span className={classes.status_desc3}>Четке кагылды</span>
                  )}
                </>
              ) : null}
              {data && data.status === 4 ? (
                <>
                  {(language == 1 || language == undefined) && (
                    <span className={classes.status_desc4}>
                      Запросить скидочную цену
                    </span>
                  )}
                  {language == 2 && (
                    <span className={classes.status_desc4}>
                      Request a discount price
                    </span>
                  )}
                  {language == 3 && (
                    <span className={classes.status_desc4}>
                      Арзандатуу баасын сураңыз
                    </span>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </div>
        </div>
        <Link
          to={`/organization-page/detail-card/${data.id}`}
          className={classes.linkContent}
        >
          <div className={classes.content1}>
            <div className={classes.nameCompany}>
              <span className={classes.name}></span>
              <span className={classes.date}>{data && data.date}</span>
            </div>
            <div className={classes.blockDescrip}>
              <div className={classes.nameResearch}>
                <span>{data && data.name}</span>
              </div>
              <div className={classes.description}>
                {(language == 1 || language == undefined) && (
                  <span>{data && data.pages} стр</span>
                )}
                {language == 2 && <span>{data && data.pages} рages</span>}
                {language == 3 && <span>{data && data.pages} бет</span>}
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
      </div>

      {edit == true &&
        ReactDOM.createPortal(
          <EditModal changeState={() => setEdit(false)} id={data.id} />,
          document.getElementById("portal")
        )}
    </>
  );
};
export default ResearchCard;
