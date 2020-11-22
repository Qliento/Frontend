import React, { useState } from "react";
import classes from "./tabs.module.css";

const Tabs1 = ({ dataText, clickBtn }) => {
  const [active, setAtive] = useState(1);
  const [isClose, setIsClose] = useState(false);
  const onClickbtn = () => {
    setIsClose(!isClose);
    clickBtn();
  };
  return (
    <div className={classes.blockInfo}>
      <div className={classes.tabs}>
        <div
          className={active === 1 ? classes.activeTab : classes.tab}
          onClick={() => setAtive(1)}
        >
          Описание
        </div>
        {dataText.content ? (
          <div
            className={active === 2 ? classes.activeTab : classes.tab}
            onClick={() => setAtive(2)}
          >
            Содержание
          </div>
        ) : <></>}
        {dataText.author ? (
          <div
            className={active === 3 ? classes.activeTab : classes.tab}
            onClick={() => setAtive(3)}
          >
            Об авторе
          </div>
        ) : <></>}
      </div>
      <div className={classes.content}>
        <div className={isClose ? classes.contentText1 : classes.contentText}>
          {active === 1 ? (
            <span>{dataText.description && dataText.description}</span>
          ) : null}
          {active === 2 ? <span>{dataText.content && dataText.content}</span> : null}
          {active === 3 ? (
            <span>{dataText.author.logo ? dataText.author.logo : "Автора нет"}</span>
          ) : null}
        </div>

        {isClose ? (
          <button className={classes.contentBtn} onClick={() => onClickbtn()}>
            Закрыть
          </button>
        ) : (
          <button className={classes.contentBtn} onClick={() => onClickbtn()}>
            Развернуть
          </button>
        )}
      </div>
    </div>
  );
};
export default Tabs1;
