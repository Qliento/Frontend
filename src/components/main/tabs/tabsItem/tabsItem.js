import React, { useState } from "react";
import classes from "./tabsItem.module.css";
import {Link } from "react-router-dom"

// type PropsType = {
//   title: string;
//   productCount: string;
// };

const TabsItem = ({title, productCount}) => {
  const [hover, setHover] = useState(false);
  return (
    <Link to={`/market-research/${title}`}
    className={classes.card}>
  
    <div
     className={classes.card1}
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
    </Link>
  );
};
export default TabsItem;
