import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditModal from "../editResearch/editResearch";
import classes from "./detailMarket.module.css";
import Dropdown from "./dropdown";
import img1 from "./img/Rectangle 47.png";
import Tabs1 from "./tabs/tabs";
import { useDispatch, useSelector } from "react-redux";
import { detailResearch } from "../../../redux/actions/organizationPage/action";

const DetailMarket = () => {
  const [isClose, setIsClose] = useState(false);
  const [edit, setEdit] = useState(false);
  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailResearch(params.id));
  }, []);
  const data = useSelector((state) => state.ResearchList.detailData);
  const clickBtn = () => {
    setIsClose(!isClose);
    console.log(isClose);
  };
  return (
    <>
      <div className={isClose ? classes.blockDetail1 : classes.blockDetail}>
        <div className={classes.leftCard}>
          <div className={classes.blockImg}>
            <img
              alt="img"
              src={data.image ? data.image : img1}
              className={classes.img}
            />
          </div>
          <div className={classes.container}>
            <div className={classes.blockHeshteg}>
              <div>#медициа</div>
              <div>#медициа</div>
              <div>#медициа</div>
            </div>
            <div className={classes.blockText}>
              <span className={classes.title}>{data && data.name}</span>
            </div>
            <div className={classes.blockdDescrip}>
              <div className={classes.descrip}>
                <span>Дата выпуска: {data && data.date}</span>
                <span>Количество страниц: {data && data.pages}</span>
                <span>ID: {data && data.id}</span>
              </div>
              <div className={classes.price}>
        
                {data.old_price && data.new_price ? (
                <>
                  <span className={classes.oldPrice}>
                    {data && data.old_price} сом
                  </span>
                  <span className={classes.newPrice}>
                    {data && data.new_price} сом
                  </span>
                </>
              ) : (
                <>
                  <span></span>
                  <span className={classes.newPrice}>
                    {data && data.old_price} сом
                  </span>
                </>
              )}
              </div>
            </div>
            <div className={classes.blockBtn}>
              <button className={classes.demo} onClick={() => setEdit(true)}>
                Редактировать
              </button>
            </div>
          </div>
        </div>
        <div className={classes.rightCard}>
          <Tabs1 data={data&&data} clickBtn={clickBtn} />
        </div>
      </div>
      <div className={classes.statistic}>
        <div className={classes.blockTitle}>
          <span className={classes.title}>Статистика</span>
          <div className={classes.input}>
            <Dropdown />
          </div>
        </div>
        <div className={classes.buttomBlock}>
          <div className={classes.column}>
            <span className={classes.column_title}>Просмотры</span>
            <span className={classes.column_data}>4200</span>
          </div>
          <div className={classes.column}>
            <span className={classes.column_title}>Скачивание демо версии</span>
            <span className={classes.column_data}>2100</span>
          </div>
          <div className={classes.column}>
            <span className={classes.column_title}>Куплено</span>
            <span className={classes.column_data}>150</span>
          </div>
        </div>
      </div>
      {<EditModal edit={edit} changeState={(e) => setEdit(e)} />}
    </>
  );
};
export default DetailMarket;
