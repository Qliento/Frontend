import React from "react";
import classes from "./analytics.module.css";
// import image from "./img/img.png";

const Analytics = ({ data }) => {
  return (
    <div className={classes.blockAnalytic}>
      <div className={classes.analytic}>

            <span className={classes.titleV}>{data && data.header}</span>

        <div className={classes.blockImg}>
          <img
            alt="img"
            src={data && data.images[0].url}
            className={classes.images}
          />
        </div>
        <div className={classes.content}>
          <div className={classes.blockTitle}>
            <span className={classes.title}>{data && data.header}</span>
          </div>
          <div className={classes.blockDescr}>
            <span className={classes.text}>{data && data.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
