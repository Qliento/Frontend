import React, { useState } from "react";
import classes from "./tabs.module.css";
import { useSelector } from "react-redux";

const Tabs1 = ({ dataText, clickBtn }) => {
  const [active, setAtive] = useState(1);
  const [isClose, setIsClose] = useState(false);
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem("lang");
  const onClickbtn = () => {
    setIsClose(!isClose);
    clickBtn();
  };
  return (
    <div className={classes.blockInfo}>
      <div className={classes.tabs}>
        {(language == 1 || language == undefined) && (
          <div
            className={active === 1 ? classes.activeTab : classes.tab}
            onClick={() => setAtive(1)}
          >
            Описание
          </div>
        )}
        {language == 2 && (
          <div
            className={active === 1 ? classes.activeTab : classes.tab}
            onClick={() => setAtive(1)}
          >
            Description
          </div>
        )}
        {language == 3 && (
          <div
            className={active === 1 ? classes.activeTab : classes.tab}
            onClick={() => setAtive(1)}
          >
            Cүрөттөө
          </div>
        )}
        {dataText.content_data&&dataText.content_data.length !== 0 ? (
          <>
            {(language == 1 || language == undefined) && (
              <div
                className={active === 2 ? classes.activeTab : classes.tab}
                onClick={() => setAtive(2)}
              >
                Содержание
              </div>
            )}
            {language == 2 && (
              <div
                className={active === 2 ? classes.activeTab : classes.tab}
                onClick={() => setAtive(2)}
              >
                Сontent
              </div>
            )}
            {language == 3 && (
              <div
                className={active === 2 ? classes.activeTab : classes.tab}
                onClick={() => setAtive(2)}
              >
                Мазмун
              </div>
            )}
          </>
        ) : (
          <></>
        )}
        {dataText.author ? (
          <>
            {(language == 1 || language == undefined) && (
              <div
                className={active === 3 ? classes.activeTab : classes.tab}
                onClick={() => setAtive(3)}
              >
                Об авторе
              </div>
            )}
            {language == 2 && (
              <div
                className={active === 3 ? classes.activeTab : classes.tab}
                onClick={() => setAtive(3)}
              >
                Аbout company
              </div>
            )}
            {language == 3 && (
              <div
                className={active === 3 ? classes.activeTab : classes.tab}
                onClick={() => setAtive(3)}
              >
                Компания жөнүндө
              </div>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
      <div className={classes.content}>
        <div className={isClose ? classes.contentText1 : classes.contentText}>
          {active === 1 ? (
            <span>{dataText.description && dataText.description}</span>
          ) : null}
          {active === 2 ? (
            dataText.content_data.length !== 0 ? (
              dataText.content_data.map((item) => {
                return (
                  <div className={classes.blockSpan}>
                    <span>{item.content}</span>
                <span>{item.page}</span>
                  </div>
                );
              })
            ) : (
              <></>
            )
          ) : null}
          {active === 3 ? (
            <span>
              {dataText.author.about_me
                ? dataText.author.about_me
                : "Автора нет"}
            </span>
          ) : null}
        </div>

        {isClose ? (
          <>
            {(language == 1 || language == undefined) && (
              <button
                className={classes.contentBtn}
                onClick={() => onClickbtn()}
              >
                Закрыть
              </button>
            )}
            {language == 2 && (
              <button
                className={classes.contentBtn}
                onClick={() => onClickbtn()}
              >
                Close
              </button>
            )}
            {language == 3 && (
              <button
                className={classes.contentBtn}
                onClick={() => onClickbtn()}
              >
                Жабуу
              </button>
            )}
          </>
        ) : (
          <>
            {(language == 1 || language == undefined) && (
              <button
                className={classes.contentBtn}
                onClick={() => onClickbtn()}
              >
                Развернуть
              </button>
            )}
            {language == 2 && (
              <button
                className={classes.contentBtn}
                onClick={() => onClickbtn()}
              >
                Expand
              </button>
            )}
            {language == 3 && (
              <button
                className={classes.contentBtn}
                onClick={() => onClickbtn()}
              >
                Кеңейтүү
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Tabs1;
