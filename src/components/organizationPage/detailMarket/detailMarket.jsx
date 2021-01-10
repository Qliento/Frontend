import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditModal from "../editResearch/editResearch";
import classes from "./detailMarket.module.css";
import Dropdown from "./dropdown";
import Modal from "react-modal";
import img1 from "./img/Rectangle 47.png";
import Tabs1 from "./tabs/tabs";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailResearch } from "../../../redux/actions/organizationPage/action";
Modal.setAppElement("#root");
const DetailMarket = () => {
  const [isClose, setIsClose] = useState(false);
  const [edit, setEdit] = useState(false);
  const params = useParams();

  const dispatch = useDispatch();
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem("lang");
  useEffect(() => {
    dispatch(detailResearch(params.id));
  }, []);
  const data = useSelector((state) => state.ResearchList.detailData);
  const dataStatic = useSelector((state) => state.ResearchList.static);
  let leng = data.country && data.country.length;
  const clickBtn = () => {
    setIsClose(!isClose);
  };

  return (
    <>
      <div className={isClose ? classes.blockDetail1 : classes.blockDetail}>
        <div className={classes.leftCard}>
          <div className={classes.blockImg}>
            <img
              alt="img"
              src={data.image && data.image}
              className={classes.img}
            />
          </div>
          <div className={classes.container1}>
            <div className={classes.topBlock}>
              <div className={classes.blockDate}>
                <span className={classes.textAuthor}>
                  {data.author && data.author.logo}
                </span>
                <span className={classes.textDate}>
                  {data.date && data.date}
                </span>
              </div>
              <div className={classes.blockDesc}>
                <div className={classes.blockName1}>
                  <span>{data.name && data.name}</span>
                </div>
                <div className={classes.descrip}>
                  {(language == 1 || language == undefined) && (
                    <span>{data && data.pages} стр</span>
                  )}
                  {language == 2 && <span>{data && data.pages} рages</span>}
                  {language == 3 && <span>{data && data.pages} бет</span>}
                  <span>ID: {data && data.id}</span>
                  <div className={classes.country}>
                    {(language == 1 || language == undefined) && (
                      <span>Страны: &#160; </span>
                    )}
                    {language == 2 && <span>Сountries: &#160; </span>}
                    {language == 3 && <span>Мамлекеттер: &#160; </span>}
                    {data.country &&
                      data.country.map((item, index) => {
                        return (
                          <span key={item.id}>
                            {item.name}
                            {index < leng - 1 ? "," : null}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className={classes.buttomBlockH}>
                <div className={classes.blockHeshteg}>
                  {data.hashtag &&
                    data.hashtag.map((item) => {
                      return (
                        <div className={classes.hashtag} key={item.id}>
                          #{item.name}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className={classes.blockChange}>
              <div className={classes.price}>
                {data.old_price && data.new_price ? (
                  <>
                    <span className={classes.oldPrice}>
                      {data && data.old_price} $
                    </span>
                    <span className={classes.newPrice}>
                      {data && data.new_price} $
                    </span>
                  </>
                ) : (
                  <>
                    <span></span>
                    <span className={classes.newPrice}>
                      {data && data.old_price} $
                    </span>
                  </>
                )}
              </div>
              <div className={classes.blockBtn}>
                {(language == 1 || language == undefined) && (
                  <button
                    className={classes.demo}
                    onClick={() => setEdit(true)}
                    disabled={data && data.status == 4 ? false : true}
                  >
                    Редактировать
                  </button>
                )}
                {language == 2 && (
                  <button
                    className={classes.demo}
                    onClick={() => setEdit(true)}
                    disabled={data && data.status == 4 ? false : true}
                  >
                    Edit
                  </button>
                )}
                {language == 3 && (
                  <button
                    className={classes.demo}
                    onClick={() => setEdit(true)}
                    disabled={data && data.status == 4 ? false : true}
                  >
                    Түзөтүү
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className={classes.container}>
            <div className={classes.blockHeshteg}>
              {data.hashtag &&
                data.hashtag.map((item) => {
                  return (
                    <div className={classes.hashtag} key={item.id}>
                      #{item.name}
                    </div>
                  );
                })}
            </div>
            <div className={classes.blockText}>
              <span className={classes.title}>{data && data.name}</span>
            </div>
            <div className={classes.blockdDescrip}>
              <div className={classes.descrip}>
                {(language == 1 || language == undefined) && (
                  <span>{data && data.pages} стр</span>
                )}
                {language == 2 && <span>{data && data.pages} рages</span>}
                {language == 3 && <span>{data && data.pages} бет</span>}
                <span>ID: {data && data.id}</span>
                <div className={classes.country}>
                  {(language == 1 || language == undefined) && (
                    <span>Страны: &#160; </span>
                  )}
                  {language == 2 && <span>Сountries: &#160; </span>}
                  {language == 3 && <span>Мамлекеттер: &#160; </span>}
                  {data.country &&
                    data.country.map((item, index) => {
                      return (
                        <span key={item.id}>
                          {item.name}
                          {index < leng - 1 ? "," : null}
                        </span>
                      );
                    })}
                </div>
              </div>
              <div className={classes.price}>
                {data.old_price && data.new_price ? (
                  <>
                    <span className={classes.oldPrice}>
                      {data && data.old_price} $
                    </span>
                    <span className={classes.newPrice}>
                      {data && data.new_price} $
                    </span>
                  </>
                ) : (
                  <>
                    <span></span>
                    <span className={classes.newPrice}>
                      {data && data.old_price} $
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className={classes.blockBtn}>
              {(language == 1 || language == undefined) && (
                <button
                  className={classes.demo}
                  onClick={() => setEdit(true)}
                  disabled={data && data.status == 4 ? false : true}
                >
                  Редактировать
                </button>
              )}
              {language == 2 && (
                <button
                  className={classes.demo}
                  onClick={() => setEdit(true)}
                  disabled={data && data.status == 4 ? false : true}
                >
                  Edit
                </button>
              )}
              {language == 3 && (
                <button
                  className={classes.demo}
                  onClick={() => setEdit(true)}
                  disabled={data && data.status == 4 ? false : true}
                >
                  Түзөтүү
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={classes.rightCard}>
          <Tabs1 data={data && data} clickBtn={clickBtn} />
        </div>
      </div>
      <div className={classes.statistic}>
        <div className={classes.blockTitle}>
          {(language == 1 || language == undefined) && (
            <span className={classes.title}>Статистика</span>
          )}
          {language == 2 && <span className={classes.title}>Statistics</span>}
          {language == 3 && <span className={classes.title}>Статистика</span>}
          <div className={classes.input}>
            <Dropdown id={params.id} />
          </div>
        </div>
        <div className={classes.buttomBlock}>
          <div className={classes.column}>
            {(language == 1 || language == undefined) && (
              <span className={classes.column_title}>Просмотры</span>
            )}
            {language == 2 && (
              <span className={classes.column_title}>Views</span>
            )}
            {language == 3 && (
              <span className={classes.column_title}>Демо версиясын көрүү</span>
            )}
            <span className={classes.column_data}>
              {dataStatic && dataStatic.watches}
            </span>
          </div>
          <div className={classes.column}>
            {(language == 1 || language == undefined) && (
              <span className={classes.column_title}>
                Скачивание демо версии
              </span>
            )}
            {language == 2 && <span className={classes.column_title}></span>}
            {language == 3 && (
              <span className={classes.column_title}>
                Download demo version
              </span>
            )}
            <span className={classes.column_data}>
              {dataStatic && dataStatic.demos_downloaded}
            </span>
          </div>
          <div className={classes.column}>
            {(language == 1 || language == undefined) && (
              <span className={classes.column_title}>Куплено</span>
            )}
            {language == 2 && (
              <span className={classes.column_title}>Purchased</span>
            )}
            {language == 3 && (
              <span className={classes.column_title}>Cатып алуу</span>
            )}
            <span className={classes.column_data}>
              {dataStatic && dataStatic.bought}
            </span>
          </div>
        </div>
      </div>
      {edit == true &&
        ReactDOM.createPortal(
          <EditModal changeState={() => setEdit(false)} id={data.id} />,
          document.getElementById("portal")
        )}
    </>
  );
};
export default DetailMarket;
