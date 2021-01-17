import React, { useState } from "react";
import classes from "./tabs.module.css";
import { useSelector } from "react-redux";
const Tabs1 = ({ dataText, clickBtn, data }) => {
  const [active, setAtive] = useState(1);
  const [isClose, setIsClose] = useState(false);
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem("lang");

  console.log(language);
  const onClickbtn = () => {
    setIsClose(!isClose);
    clickBtn();
  };

  return (
    <div className={classes.blockInfo}>
      {(language == undefined || language == 1) && (
        <div className={classes.tabs}>
          {data.description && (
            <div
              className={active == 1 ? classes.activeTab : classes.tab}
              onClick={() => setAtive(1)}
            >
              Описание
            </div>
          )}

          {data.content_data&&data.content_data.length !== 0 && (
            <div
              className={active == 2 ? classes.activeTab : classes.tab}
              onClick={() => setAtive(2)}
            >
              Содержание
            </div>
          )}

          {data.author && (
            <div
              className={active == 3 ? classes.activeTab : classes.tab}
              onClick={() => setAtive(3)}
            >
              Об авторе
            </div>
          )}
        </div>
      )}
      {language == 2 && (
        <div className={classes.tabs}>
          {data.description && (
            <div
              className={active == 1 ? classes.activeTab : classes.tab}
              onClick={() => setAtive(1)}
            >
              Description
            </div>
          )}

          {data.content_data&&data.content_data.length !== 0 && (
            <div
              className={active == 2 ? classes.activeTab : classes.tab}
              onClick={() => setAtive(2)}
            >
              Content
            </div>
          )}

          {data.author && (
            <div
              className={active == 3 ? classes.activeTab : classes.tab}
              onClick={() => setAtive(3)}
            >
              About company
            </div>
          )}
        </div>
      )}
      {language == 3 && (
        <div className={classes.tabs}>
          {data.description && (
            <div
              className={active == 1 ? classes.activeTab : classes.tab}
              onClick={() => setAtive(1)}
            >
              Сүрөттөө
            </div>
          )}
          {data.content_data&&data.content_data.length !== 0 && (
            <div
              className={active == 2 ? classes.activeTab : classes.tab}
              onClick={() => setAtive(2)}
            >
              Мазмун
            </div>
          )}
          {data.author && (
            <div
              className={active == 3 ? classes.activeTab : classes.tab}
              onClick={() => setAtive(3)}
            >
              Компания жөнүндө
            </div>
          )}
        </div>
      )}
      <div className={classes.content}>
        <div className={isClose ? classes.contentText1 : classes.contentText}>
          {active === 1 ? <span>{data && data.description}</span> : null}
          {active === 2 ? (
            data.content_data.length !== 0 ? (
              data.content_data.map((item) => {
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
            <span>{data.author && data.author.about_me}</span>
          ) : null}
        </div>

        {isClose ? (
          <>
            {(language == undefined || language == 1) && (
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
            {(language == undefined || language == 1) && (
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
