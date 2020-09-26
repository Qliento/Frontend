import React, { FC, useState } from "react";
import classes from "./tabsItem.module.css";

type PropsType = {
  title: string;
  productCount: string;
};

const TabsItem: FC<PropsType> = ({ title, productCount }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={classes.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={classes.BlockTitle}>
        <span>{title}</span>
      </div>
      <div className={classes.BlockCount}>
        <span style={{ color: hover ? "#1B8E3D" : "#76B73E" }}>
          {productCount}
        </span>
      </div>
    </div>
  );
};
export default TabsItem;
