import React, { useState } from "react";
import classes from "./tabs.module.css";
import {useSelector} from 'react-redux';

const Tabs1 = ({ dataText, clickBtn }) => {
  const [active, setAtive] = useState(1);
  const [isClose, setIsClose] = useState(false);
  const language = useSelector(state => state.langReducer.lang)
  const onClickbtn = () => {
    setIsClose(!isClose);
    clickBtn();
  };
  return (
    <div className={classes.blockInfo}>
      <div className={classes.tabs}>
        {language === 1 && <div className={active === 1 ? classes.activeTab : classes.tab} onClick={() => setAtive(1)}>
          Описание
        </div>}
        {language === 2 && <div className={active === 1 ? classes.activeTab : classes.tab} onClick={() => setAtive(1)}>
          Description
        </div>}
        {language === 3 && <div className={active === 1 ? classes.activeTab : classes.tab} onClick={() => setAtive(1)}>
          Cүрөттөө
        </div>}
        {dataText.content ? (<>
          {language === 1 && <div className={active === 2 ? classes.activeTab : classes.tab} onClick={() => setAtive(2)}>
            Содержание
          </div>}
          {language === 2 && <div className={active === 2 ? classes.activeTab : classes.tab} onClick={() => setAtive(2)}>
            Сontent
          </div>}
          {language === 3 && <div className={active === 2 ? classes.activeTab : classes.tab} onClick={() => setAtive(2)}>
            Мазмун
          </div>}
        </>) : <></>}
        {dataText.author ? (<>
          {language === 1 && <div className={active === 3 ? classes.activeTab : classes.tab} onClick={() => setAtive(3)}>
            Об авторе
          </div>}
          {language === 2 && <div className={active === 3 ? classes.activeTab : classes.tab} onClick={() => setAtive(3)}>
            Аbout company
          </div>}
          {language === 3 && <div className={active === 3 ? classes.activeTab : classes.tab} onClick={() => setAtive(3)}>
            Компания жөнүндө
          </div>}
        </>) : <></>}
      </div>
      <div className={classes.content}>
        <div className={isClose ? classes.contentText1 : classes.contentText}>
          {active === 1 ? (
            <span>{dataText && dataText.description}</span>
          ) : null}
          {active === 2 ? <span>{dataText && dataText.content}</span> : null}
          {active === 3 ? (
            <span>{dataText.author ? dataText.author.logo : "Автора нет"}</span>
          ) : null}
        </div>

        {isClose ? (<>
          {language === 1 && <button className={classes.contentBtn} onClick={() => onClickbtn()}>Закрыть</button>}
          {language === 2 && <button className={classes.contentBtn} onClick={() => onClickbtn()}>Close</button>}
          {language === 3 && <button className={classes.contentBtn} onClick={() => onClickbtn()}>Жабуу</button>}
        </>) : (<>
          {language === 1 && <button className={classes.contentBtn} onClick={() => onClickbtn()}>Развернуть</button>}
          {language === 2 && <button className={classes.contentBtn} onClick={() => onClickbtn()}>Expand</button>}
          {language === 3 && <button className={classes.contentBtn} onClick={() => onClickbtn()}>Кеңейтүү</button>}
        </>)}
      </div>
    </div>
  );
};
export default Tabs1;
