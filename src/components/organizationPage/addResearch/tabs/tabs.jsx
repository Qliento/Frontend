import React, { useState } from "react";
import classes from "./tabs.module.css";

const Tabs = ({ changeLang, triger, isModal, isLang }) => {
  const [active, setAtive] = useState(isLang.filter((item)=>item>0)[0]);
  const activeBtn = (e) => {
    if (triger) {
      setAtive(e);
      changeLang(e);
      isModal(true);
    } else {
      isModal();
    }
  };
  console.log(isLang);
  return (
    <div className={classes.blockTabs}>
      {isLang &&
        isLang.map((item) => {
          if (item === 1) {
            return (
              <div
                className={active === 1 ? classes.activeTab : classes.tab}
                onClick={() => activeBtn(1)}
              >
                Русский
              </div>
            );
          }
        })}
      {isLang &&
        isLang.map((item) => {
          if (item === 2) {
            return (
              <div
                className={active === 2 ? classes.activeTab : classes.tab}
                onClick={() => activeBtn(2)}
              >
                Кыргызский
              </div>
            );
          }
        })}
      {isLang &&
        isLang.map((item) => {
          if (item === 3) {
            return (
              <div
                className={active === 3 ? classes.activeTab : classes.tab}
                onClick={() => activeBtn(3)}
              >
                Английский
              </div>
            );
          }
        })}
    </div>
  );
};
export default Tabs;
