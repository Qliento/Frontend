import React, { useState } from "react";
import classes from "./tabs.module.css";

const Tabs = () => {
  const [active, setAtive] = useState(1);
  return (
    <div className={classes.blockTabs}>
      <div
        className={active === 1 ? classes.activeTab : classes.tab}
        onClick={() => setAtive(1)}
      >
        Русский
      </div>
      <div
        className={active === 2 ? classes.activeTab : classes.tab}
        onClick={() => setAtive(2)}
      >
        Кыргызский
      </div>
      <div
        className={active === 3 ? classes.activeTab : classes.tab}
        onClick={() => setAtive(3)}
      >
        Английский
      </div>
    </div>
  );
};
export default Tabs;
